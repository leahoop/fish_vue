<template>
    <div>
        <el-row>
            <el-header>
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="vertical"
                        @select="handleSelect"
                        active-text-color="blue">
                    <el-menu-item index="1" style="font-size: 17px">知乎</el-menu-item>
                    <el-menu-item index="2" style="font-size: 17px">v2ex</el-menu-item>
                    <el-menu-item index="3" style="font-size: 17px">步行街</el-menu-item>
                    <el-menu-item index="4" style="font-size: 17px">羊毛线报</el-menu-item>
                </el-menu>
            </el-header>
                <el-card class="box-card">
                    <el-container>
                        <el-main>
                            <el-form>
                                <el-row v-for="(item, index) in data" :key="index">
                                    <el-col :span=10 offset="8">
                                        <div v-if="activeIndexTem == 4">
                                            <el-collapse v-model="activeName" accordion>
                                                <el-collapse-item>
<!--                                                <el-collapse-item :title="item.title" :name="index" >-->
                                                    <template slot="title">
                                                       <span style="color: #409EFF"> {{item.title}}</span>
                                                    </template>

                                                    <div v-html="item.tex" style="background-color: #67C23A"></div>
                                                </el-collapse-item>
                                            </el-collapse>
                                        </div>
                                        <div v-else class="grid-content bg-purple-dark">
                                            <a :href="[item.url]" target="_blank" rel="noopener">
                                                <el-tag>{{index + 1}}</el-tag>
                                                <!--                                <span v-if="item.hot">-->
                                                <!--                                <el-tag type="danger" style="width: 80px">{{item.hot}}万HOT</el-tag>&nbsp;-->
                                                {{item.title}}</a>
                                        </div>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </el-main>
                    </el-container>
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
            handleSelect(key, keyPath) {
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

    .el-header, .el-footer {
        background-color: white;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: white;
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
    }

    .el-main {
        background-color: white;
        color: #333;
        text-align: left;
        /*line-height: 160px;*/
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

    .bg-purple {
        background: white;
    }

    .bg-purple-light {
        background: white;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        /*margin: 0 auto;*/
        display: block;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .el-menu-demo {
        margin-bottom: 20px;
    }

    .box-card {
        margin: 0 auto;
        width: 80%;
        height: 100%;
        /*margin-bottom: 22px;*/
    }

    .el-collapse-item__header {
        background-color: gray;
    }
</style>
