<template>
    <div class="com-editor" contenteditable="true">
        <input id="x" type="hidden" name="content">
        <trix-editor input="x"></trix-editor>
    </div>
</template>
<script>
import trix from 'trix'
import 'trix/dist/trix.css'

export default {
    name: 'editor',

    props: {
        value: {
            type: String
        }
    },

    data() {
        return {
            content: ''
        };
    },

    mounted() {
      this.$el.addEventListener('trix-change', (e)=>{
        console.log(e.target)
      });
    },

    destroyed() {
      
    },

    methods: {
       
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
