<template>
    <div>

<!--        <div class="test_two_box">-->
<!--            <video id="myVideo" class="video-js">-->
<!--                <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">-->
<!--            </video>-->
<!--        </div>-->

        <h1>图片上传</h1>

        <el-upload
                class="upload-demo"
                action=""
                :http-request="requestFile"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed">
            <!--                :file-list="fileList"-->

            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>




    import https from '../https.js'

    export default {
        data() {
            return {
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }]
            };
        },
        mounted() {
            this.initVideo();
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(File, fileList);
            },
            handlePreview(file) {
                console.log(File);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${File.name}？`);
            },
            handlePreview(file) {
                // console.log(file)
                this.temp.pdf_file = File.raw
                console.log(this.temp)
            },
            requestFile(file) {
                https.fileUpload(File).then(res => {
                    console.log(res)
                });
            },
            initVideo() {
                //初始化视频方法
                let myPlayer = this.$video(myVideo, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: "muted",
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: "800px",
                    //设置视频播放器的显示高度（以像素为单位）
                    height: "400px"
                });
            }
        }
    }
</script>

<style scoped>

</style>
