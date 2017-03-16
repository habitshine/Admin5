<template>
    <div>
        <div class="js-fileapi-wrapper upload-warp">
            <div class="btn-upload">
                <div class="btn-title">上传图片</div>
                <input type="file" class="btn-file-upload" ref="fileUpChoose" id="fileUpChoose">
            </div>
        </div>
        <div id="images">
            <!-- previews -->
        </div>
    </div>
</template>
<script>
import FileApi from 'fileapi'
export default {
    name: 'FileApi',

    props: {

    },

    data() {
        return {
                           fp: null
        };
    },
    mounted() {
        let choose = this.$refs.fileUpChoose;

        FileAPI.event.on(choose, 'change', function(evt) {
            var files = FileAPI.getFiles(evt); // Retrieve file list

            FileAPI.filterFiles(files, function(file, info /**Object*/ ) {
                if (/^image/.test(file.type)) {
                    return info.width >= 320 && info.height >= 240;
                }
                console.log(file);
                return false;
            }, function(files /**Array*/ , rejected /**Array*/ ) {
                if (files.length) {
                    // Make preview 100x100
                    FileAPI.each(files, function(file) {
                        FileAPI.Image(file).preview(100).get(function(err, img) {
                            images.appendChild(img);
                        });
                    });


                    // Uploading Files
                    FileAPI.upload({
                        url: './mock/upload',
                        files: {
                            images: files
                        },
                        fileupload: function(file) {
                            //                                console.log(file)
                            //这里是将文件转化成二进制，计算上传进度的
                            FileAPI.readAsText(file, "utf-8", function(evt) {
                                if (evt.type == 'load') {
                                    // Success
                                    var text = evt.result;
                                } else if (evt.type == 'progress') {
                                    var pr = evt.loaded / evt.total * 100;
                                    console.log(evt.loaded)
                                    console.log(pr)
                                } else {
                                    // Error
                                }
                            })
                        },
                        progress: function(evt, xhr, file) {

                        },
                        complete: function(err, xhr, file) {
                            console.log(file)
                        }
                    });
                }
            });
        });
    },


    methods: {

    }
}
</script>
<style scoped lang=scss>
.upload-warp {
    overflow: hidden
}

.b-progress {
    width: 200px;
    height: 10px;
    border: 2px solid #E2E4E2;
    border-radius: 10px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .2);
    background-color: #d3d3d3;
    position: relative;
}

.b-progress__bar {
    width: 0;
    height: 10px;
    border-radius: 10px;
    background-color: #2D9DD7;
    background: -webkit-linear-gradient(top, #2D9DD7 0%, #1C81C7 100%);
    /* FF3.6+ */
    background: -moz-linear-gradient(top, #2D9DD7 0%, #1C81C7 100%);
    /* FF3.6+ */
    background: linear-gradient(to bottom, #2D9DD7 0%, #1C81C7 100%);
    /* FF3.6+ */
    -webkit-transition: width .5s ease-out;
    -moz-transition: width .5s ease-out;
    -ms-transition: width .5s ease-out;
    transition: width .5s ease-out;
}

.btn-upload {
    float: left;
    height: 34px;
    background: #fff;
    width: 114px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    &:hover {
        background: #e6e6e6;
    }
    .btn-title {
        text-align: center;
        line-height: 34px;
        font-size: 14px;
        color: #333;
    }
    .btn-file-upload {
        font-size: 0;
        /*font-size设置为0，使得鼠标移入的时候显示手型*/
        width: 114px;
        height: 34px;
        cursor: pointer;
        outline: medium none;
        position: absolute;
        filter: alpha(opacity=0);
        opacity: 0;
        left: 0px;
        top: 0px;
    }
}
</style>
