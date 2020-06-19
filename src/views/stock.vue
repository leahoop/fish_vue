<template>
    <div>
        <el-card class="box-card">
            <el-row>
                <el-col :xs="24" :sm="24" :lg="12">
                    {{ data.increPer}}
                </el-col>
                <el-col :xs="24" :sm="24" :lg="12">
                    {{ data.nowPri}}
                </el-col>
            </el-row>
        </el-card>


    </div>
</template>

<script>
    import https from '../https.js'

    export default {
        name: "",
        data() {
            return {
                data: {}
            }
        },
        created() {
            const param = {'id': 'sh600960'}
            https.fetchGet('stock', param).then(res => {
                console.log(res)
                this.data = res.data
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        }
    }

</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
