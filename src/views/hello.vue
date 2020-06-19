<template>
    <div>
        <el-row>
            <el-col :xs="24" :sm="24" :lg="12">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="vertical"
                        @select="handleSelect"
                        active-text-color="blue"
                        >
                    <el-menu-item index="zhihu">知乎</el-menu-item>
                    <el-menu-item index="v2ex">v2ex</el-menu-item>
                    <el-menu-item index="soul">一碗毒鸡汤</el-menu-item>
                </el-menu>
            </el-col>
            <el-card class="box-card">
                <el-form>

                    <div v-if="activeIndexTem == 'soul'">
                       <div >
                           <el-row :gutter="36">
                               <el-col :xs="24" :sm="24" :lg="12">
                                   <span class="grid-content">{{ data[0].title}}</span>
                               </el-col>
                           </el-row>
                           <el-row>
                               <el-col :xs="24" :sm="24" :lg="12">
                                   <span class="grid-content">{{ stock.nowPri }}: {{ stock.increPer}}</span>
                               </el-col>
                           </el-row>

                       </div>
                        <div>
                            <el-button type="primary" size="small" @click="handleSelect('soul')">换汤不换药</el-button>
                        </div>
                    </div>

                    <el-row v-else v-for="(item, index) in data" :key="index">
                        <el-col :xs="24" :sm="24" :lg="18">
                            <div class="grid-content bg-purple-dark">
                                <a :href="[item.url]" target="_blank" rel="noopener">
                                    <el-tag>{{index + 1}}</el-tag>
                                    {{item.title}}
                                </a>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
            </el-card>

        </el-row>

    </div>
</template>

<script>
    import https from '../https.js'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                data: [],
                activeIndex: 'v2ex',
                activeName: 'v2ex',
                activeIndexTem: 'v2ex',
                stock:{}
            }
        },
        created() {
            const param = {'source': this.activeIndex}
            https.fetchGet('info', param).then(res => {
                this.data = res.data
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
            this.getStock()
        },
        methods: {
            handleSelect(key) {
                const param = {'source': key}
                https.fetchGet('info', param).then(res => {
                    // console.log(res)
                    this.data = res.data
                    this.activeIndexTem = key
                }).catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err)
                })
            },
            getStock() {
                const id = {'id': 'sh600960'}
                https.fetchGet('stock', id).then(res => {
                    this.stock = res.data
                }).catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err)
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    /*el-header, el-footer {*/
    /*    background-color: #2182ff;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 40px;*/
    /*}*/

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #2d4151;
        text-decoration: none;
    }

    .el-row {
        margin-bottom: 20px;
    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: white;
    }

    .grid-content {
        text-align: left;
        border-radius: 4px;
        min-height: 36px;
        /*margin: 0 auto;*/
        display: flex;
    }

    .el-menu-demo {
        margin-bottom: 20px;
    }

    .box-card {
        min-height: 400px;
        margin: 0 auto;
        width: 70%;
        height: 100%;
        /*margin-bottom: 22px;*/
    }
</style>
