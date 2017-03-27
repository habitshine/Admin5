<template>
    <div class="com-upload-mulit">
        <!-- 按钮 -->
        <label class="btn btn-default" :ref="opts.name">
            {{opts.text}}
            <input name="upload" class="input-upload" type="file" multiple>
        </label>
        <!-- 预览 -->
        <transition-group class="previews" v-show="0 < previews.length" tag="ul">
            <li v-for="(preview, i) in previews" :key="preview">
                <!-- 删除按钮 -->
                <span v-if="-1 != [100, undefined].indexOf(preview.progress)" @click="remove(i, preview.id)" class="remove fa fa-remove"></span>

                <span class="mask" :style="{background: 'rgba(0,0,0, ' + (100 - preview.progress) / 100 + ')'}"></span>
                <p v-if="100 > preview.progress && '' != preview.progress" class="progress2">{{preview.progress}}%</p>
                <a target="_new" :href="preview.url" class="title">{{preview.fileName}}</a>
                <img v-if="'image' == preview.type" :src="preview.cover">
            </li>
        </transition-group>
    </div>
</template>
<script>
// fileAPI对于每次多选的文件,如果再次选择相同的几个文件, 那么不触发上传

import FileAPI from 'fileapi'
export default {
    name: 'uploadMulit',

    props: {
        opts: {},

        value: {
            default () {
                return [];
            }
        }
    },

    data() {
        return {
            activeIndex: 0, // 当前preview的索引
            previews: [] 
        };
    },

    mounted() {
        this.previews = null == this.opts.value ? [] : JSON.parse(JSON.stringify(this.opts.value));

        this.activeIndex = this.previews.length;

        // 监听上传事件
        FileAPI.event.on(this.$refs[this.opts.name], 'change', (evt) => {
            var files = FileAPI.getFiles(evt);

            // 遍历文件,进行文件类型判断
            files.forEach((file, index) => {
                // 初始化一个文件
                var preview = {
                    id: '',
                    cover: '', // 缩略图
                    progress: 0, // 进度条
                    fileName: file.name, // 文件名
                    type: 'file', // 文件类型
                    url: '' // 上传后的资源地址
                };

                this.previews.push(preview);

                // 如果是图片, 转base64
                if (/^image/.test(file.type)) {

                    this.previews[this.activeIndex].type = 'image';

                    // 转base64(异步), 作为cover
                    this.file2base64(file, this.activeIndex);
                }

                // 上传(异步)
                this.upload(file, this.activeIndex);

                // // 移动索引到previews的下一个
                this.activeIndex++;

            });

        });
    },

    methods: {
        /**
         * 生成缩略图
         * file转base64
         * 压缩尺寸到100px
         * @param  {Object} file      
         */
        file2base64(file, index) {
            FileAPI.Image(file).preview(100).get((err, img) => {
                if (err) {
                   
                } else {
                    this.previews[index].cover = img.toDataURL();
                }
            });
        },

        /**
         * 上传, 回馈上传进度
         * @param  {Object} file      
         * @param  {Number} index 当前上传文件索引
         */
        upload(file, index) {
            FileAPI.upload({
                url: this.opts.url.upload,

                data: {cover: this.previews[index].cover},

                progress: (evt) => {
                    this.previews[index].progress = Math.floor(evt.loaded / evt.total * 100);
                },

                files: {file},

                headers: { 'x-upload': 'fileapi' },

                complete: (err, xhr, file, options) => {
                    var {status, data} = JSON.parse(xhr.response);
                    this.previews[index].id = data.id;
                    this.previews[index].url = data.url;
                    this.$emit('input', this.previews.map(item=>{
                        var {id, fileName, type, url} = {...item, url: data.url};
                        return {id, fileName, type, url};
                    }));
                }
            });
        },
        /**
         * 删除列表中的文件
         */
        remove(i, id) {
            this.previews.splice(i, 1);

            axios.delete(this.opts.url.del, {
                params: {
                    id
                }
            }).then(response => {
                this.activeIndex--;
                this.$emit('input', this.previews.map(item=>{
                    var {id, fileName, type, url} = item;
                    return {id, fileName, type, url};
                }));
            }).catch((error) => {

            });
        }
    }
}
</script>
<style scoped lang=scss>
$h: 100px;
.com-upload-mulit {
    overflow: hidden;
    .input-upload {
        display: none;
    }
    ul.previews {
        border-radius: 4px;
        margin: 15px 0;
        padding: 10px;
        overflow-x: auto;
        overflow-y: hidden;
        border: 1px solid #ddd;
        >li {
            background: #777;
            border-radius: 4px;
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
            >.remove {
                position: absolute;
                top: -6px;
                right: -6px;
                background: rgba(#e4685f, 1);
                color: #fff;
                border-radius: 100%;
                line-height: 20px;
                height: 20px;
                width: 20px;
                text-align: center;
                z-index: 100;
                font-size: 12px;
                transition: all .2s ease-in-out;
                &:hover {
                    transform: rotate(90deg);
                    cursor: pointer;
                    background: rgba(#98261d, 1);
                }
                ;
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
            /*和boot样式冲突*/
            >.progress2 {
                color: #fff;
                font-size: 14px;
                position: absolute;
                bottom: 0;
                z-index: 3;
                height: 16px;
                width: 100%;
                text-align: center;
            }
            >.title {
                word-break: break-all;
                overflow-x: hidden;
                overflow-y: auto;
                padding: 20px 5px;
                color: #fff;
                font-size: 12px;
                position: absolute;
                z-index: 3;
                height: $h - 16px - 20px;
                width: 100%;
                text-align: center;
                &:hover{cursor: pointer;}
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
