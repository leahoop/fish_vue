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
                    <el-menu-item index="1">知乎</el-menu-item>
                    <el-menu-item index="2">v2ex</el-menu-item>
                    <el-menu-item index="3">步行街</el-menu-item>
                    <el-menu-item index="4">一碗毒鸡汤</el-menu-item>
                </el-menu>
            </el-col>
            <el-card class="box-card">
                <el-form>

                    <div v-if="activeIndexTem == 4">
                       <div >
                           <el-row :gutter="36">
                               <el-col :xs="24" :sm="24" :lg="12">
                                   <span class="grid-content">{{ data[0].content}}</span>
                               </el-col>
                           </el-row>
                       </div>
                        <div>
                            <el-button type="primary" size="small" @click="handleSelect(4)">换汤不换药</el-button>
                        </div>
                        <!--<el-collapse v-model="activeName" accordion>
                            <el-collapse-item>
                                <template slot="title">
                                    <span style="color: #409EFF"> {{item.title}}</span>
                                </template>

                                <div v-html="item.tex" style="background-color: #67C23A"></div>
                            </el-collapse-item>
                        </el-collapse>-->
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
        <el-footer><a href="http://www.miitbeian.gov.cn">粤ICP备19137780号-1</a></el-footer>

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
                activeIndex: '1',
                activeName: '1',
                activeIndexTem: '1'
            }
        },
        created() {
            const param = {'key': this.activeIndex}
            https.fetchGet('getInfo', param).then(res => {
                this.data = res.data
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        },
        methods: {
            handleSelect(key) {
                const param = {'key': key}
                https.fetchGet('getInfo', param).then(res => {
                    // console.log(res)
                    this.data = res.data
                    this.activeIndexTem = key
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

    el-header, el-footer {
        background-color: white;
        color: #333;
        text-align: center;
        line-height: 40px;
    }

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
        width: 80%;
        height: 100%;
        /*margin-bottom: 22px;*/
    }
</style>
