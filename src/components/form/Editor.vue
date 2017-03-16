<template>
    <div class="com-editor" contenteditable="true">
    </div>
</template>
<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default {

    props: {
        value: {
            type: String
        }
    },

    data() {
        return {
            quill: {},
            contentPanel: {},
            toolbar: [
                ['image', 'code-block']
            ],

        };
    },

    mounted() {
        this.quill = new Quill(this.$el, {
            modules: {
                toolbar: this.toolbar
            },

            theme: 'snow'
        });

        // 监听.ql-editor元素的paste
        this.contentPanel = this.$el.querySelector('.ql-editor');
        this.contentPanel.addEventListener('paste', this.paste);

        this.quill.on('text-change', (delta, oldDelta, source)=> {
            this.$emit('input', this.contentPanel.innerHTML);
        });

    },

    destroyed() {
        this.quill = null;
    },

    methods: {
        paste(event) {
            // console.log(event.clipboardData); // will give you the mime types
            var clip = event.clipboardData || event.originalEvent.clipboardData;
            var items = clip.items;
            for (var k in items) {
                var item = items[k];
                if (item.kind === 'file' && -1 != item.type.indexOf('image')) {
                    var blob = item.getAsFile();

                    var reader = new FileReader();
                    reader.readAsDataURL(blob);

                    reader.onload = event => {
                        this.quill.insertEmbed(10, 'image', event.target.result);
                    };
                }
            }
        }
    }
}
</script>
<style scoped lang=scss>
.com-editor {
    outline: none;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 14px;
    min-height: 150px;
    border-radius:0 0 5px 5px;
    img {
        display: block;
        vertical-align: middle;
        text-align: center;
        max-width: 100%;
    }
}
</style>
