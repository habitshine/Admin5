<template>
    <div class="com-upload">
        <!-- 按钮 -->
        <label class="btn btn-default" ref="btn-upload">
            点击上传
            <input name="upload" class="input-upload" type="file" multiple>
        </label>
        <!-- 预览 -->
        <transition-group class="previews" v-show="0 < previews.length" tag="ul">
            <li v-for="(preview, i) in previews" :key="i">
                <span class="mask" :style="{background: 'rgba(0,0,0, ' + (100 - preview.progress) / 100 + ')'}"></span>
                <p>{{preview.progress}}%</p>
                <img :src="preview.img">
            </li>
        </transition-group>
    </div>
</template>
<script>
import FileAPI from 'fileapi'
export default {
    name: 'upload',

    props: {
        opts: {},
        value: {

        }
    },

    data() {
        return {
            FileAPI: FileAPI,
            previews: [],
        };
    },

    mounted() {
        // 监听上传事件
        this.FileAPI.event.on(this.$refs['btn-upload'], 'change', (evt) => {
            // 文件对象 
            var files = this.FileAPI.getFiles(evt);

            // 遍历文件
            this.FileAPI.each(files, (file) => {
                // 添加数据
                // vue会自动监听
                this.previews.push({
                    progress: 0,
                    url: '',
                    img: ''
                });
                
                // 生成缩略图
                this.base64Preview(file).then(base64 => {
                    c(this.previews.length)
                    this.previews[0].img = base64;
                });

                // 上传
                this.upload(file).then(file => {
                    
                });



// Promise.all([
//   this.base64Preview(file),
//   this.upload(file)
// ]).then(([books, user]) => {
    
// });



            });
        });
    },

    methods: {
        base64Preview(file) {
            return new Promise((resolve, reject) => {
                this.FileAPI.Image(file).preview(100).get((err, img) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(img.toDataURL());
                    }
                });
            });
        },

        upload(file) {
            return new Promise((resolve, reject) => {
                this.FileAPI.upload({
                    url: '/mock/upload',

                    progress: (evt) => {
                        this.previews[0].progress = Math.floor(evt.loaded / evt.total * 100);
                    },

                    files: {
                        file: file
                    },

                    complete: (err, xhr, file, options) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(file);
                        }
                    }
                });
            });
        }
    }
}
</script>
<style scoped lang=scss>
$h: 100px;
.com-upload {
    overflow: hidden;
    .input-upload {
        display: none;
    }
    ul.previews {
        border-radius: 4px;
        margin: 15px 0;
        overflow-x: auto;
        overflow-y: hidden;
        border: 1px solid #ddd;
        >li {
            border-radius: 4px;
            overflow: hidden;
            height: $h;
            width: $h;
            position: relative;
            display: block;
            float: left;
            margin: 5px;
            box-shadow: 1px 2px 3px rgba(0, 0, 0, .1);
            >.mask {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 3;
                width: 100%;
                height: 100%;
            }
            >img {
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;
            }
            >p {
                color: #fff;
                font-size: 16px;
                position: absolute;
                z-index: 3;
                line-height: $h;
                width: 100%;
                text-align: center;
            }
        }
    }
    .v-enter {
        opacity: 0;
        transform: translateY(-.5rem);
    }
    .v-enter-active {
        transition: all .3s;
    }
    .v-leave-active {
        opacity: 0;
        transition: all .3s;
    }
}
</style>
