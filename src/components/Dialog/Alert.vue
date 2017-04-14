<template>
    <div class="component-alert" :style="{width: width}">
        <div class="header">
            <h1 class="title">提示</h1>
        </div>

        <div class="body">
            <slot>这是默认提示文字</slot>
        </div>
        
        <div class="footer">
            <a @click="sure" class="btn-sure">确定</a>
            <a @click="cancel" class="btn-cancel">取消</a>
        </div>
    </div>
</template>
<script>
import VModal from './Modal'
export default {
    name: 'Alert',

    props: {
        value: {
            type: Boolean
        },

        width: {
            default(){
                return '400px';
            }
        },

        title: {
            type: String,
            default(){
                return '提示';
            }
        },

        holdTime: {
            type: Number
        },

        lock: {
            type: Boolean
        }
    },

    methods: {
        sure() {
            this.$emit('input', false);
        },

        afterClose() {
            this.$emit('after-close');
        },

        cancel() {
            this.$emit('input', false);
        }
    },

    computed: {
        isShow: {
            get() {
                return this.value;
            },

            set(isShow) {
                this.$emit('input', isShow);
            }
        }
    },
    components: {
        VModal
    }
}
</script>
<style scoped lang="scss">
.component-alert {
    border-radius: 4px;
    background: #fff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .2);
    >.header{
        padding:15px;
        >.title{
            margin: 0;font-size: 16px;
        }
    }

    >.body{padding: 15px;}

    >.footer{padding: 15px;overflow: hidden;
        @mixin btn(){
            float: right;padding: 15px;cursor: pointer;color: #69c;letter-spacing: 1px;
            &:hover{text-decoration: none;color: #69c;}
        }
        .btn-sure{@include btn();}
        .btn-cancel{@include btn();}

    }

}
</style>
