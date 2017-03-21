<template>
    <div class="com-upload">
        <!-- 按钮 -->
        <label class="btn btn-default" ref="btn-upload">
            点击上传
            <input class="input-upload" type="file" multiple>
        </label>
        <!-- 预览 -->
        <ul class="previews">
            <li v-for="canvas in previews" v-html="canvas"></li>
        </ul>
    </div>
</template>
<script>
import FileApi from 'fileapi'
export default {
    name: 'upload',

    props: {
        value: {

        }
    },

    data() {
        return {
            FileAPI: null,
            previews: []
        };
    },

    mounted() {
        var _this = this;
        // 监听上传事件
        FileAPI.event.on(this.$refs['btn-upload'], 'change', function(evt) {
            var files = FileAPI.getFiles(evt);

            FileAPI.each(files, function(file) {
                FileAPI.Image(file).preview(100).get(function(err, img) {
                    syslog(img)
                    _this.previews.push(img);
                });
            });
        });
    },


    methods: {

    }
}
</script>
<style scoped lang=scss>
.com-upload {
    overflow: hidden;
    .input-upload {
        display: none;
    }
    .previews {
        li {
            display: block;
            float: left;
        }
    }
}
</style>
