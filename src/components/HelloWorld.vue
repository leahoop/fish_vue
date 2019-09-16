<template>
    <div>
        <el-container>
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="vertical"
                    @select="handleSelect"
                    active-text-color="blue">
                    <el-menu-item index="1">知乎</el-menu-item>
                    <el-menu-item index="2">v2ex</el-menu-item>
                    <el-menu-item index="3">步行街</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <el-form :label-position="left">
                    <el-row v-for="(item,index) in data" :key="index">
                        <el-col :span="15" offset="8">
                            <div class="grid-content bg-purple-dark">
                                <i class="el-icon-search"></i>
                                <a :href="[item.url]" target="_blank" rel="noopener">
                                <span v-if="item.hot">
                                <el-tag type="danger" style="width: 80px">{{item.hot}}万HOT</el-tag>&nbsp;
                                </span>{{item.title}}</a>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
            </el-main>
        </el-container>
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
                activeIndex: '1'
            }
        },
        created() {
            const param = {'key': this.activeIndex}
            https.fetchGet('getInfo', param).then(res => {
                this.data = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            handleSelect(key, keyPath) {
                const param = {'key': key}
                https.fetchGet('getInfo', param).then(res => {
                    // console.log(res)
                    this.data = res.data
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
</style>
