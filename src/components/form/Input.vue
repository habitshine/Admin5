<template>
    <div class="com-input" :class="{'input-group': opts.icon}">
        <div class="warning" v-show="warning">
            {{warningText}}
        </div>
        <span v-if="undefined != opts.icon" class="input-group-addon"><i :class="['fa', 'fa-'+opts.icon]"></i></span>
        <input @blur="blur" @keyup="keyup" @keydown="keydown" @focus="selectAll" :value="value" @input="input" class="form-control" :placeholder="opts.placeholder" :type="opts.type">
    </div>
</template>
<script>
export default {
    name: 'input',

    props: {
        opts: {
            type: Object
        },

        value: {

        }
    },

    data(){
        return {
            warningText: '*必填',
            warning: 'require',
        };
    },

    methods: {
        input(e) {
            this.$emit('input', e.target.value);
        },

        selectAll(e) {
            e.target.select();
        },

        blur(e) {

            this.$emit('blur', e);
        },

        keyup(e) {
            this.$emit('keyup', e);
        },

        keydown(e) {
            this.$emit('keydown', e);
        }
    }
}
</script>
<style scoped lang="scss">
.com-input {
    position: relative;
    .warning{
        font-size: 12px;
        padding:5px 15px;
        border-radius: 4px;
        color:#fff;
        background: rgba(#f00,.6);
        box-shadow: 1px 2px 3px rgba(#000, .1);
        position: absolute;
        bottom:35px;right: 0;
    }
    .text-danger {
        margin-left: 5px;
        font-size: 12px;
        visibility: hidden;
    }
}
</style>
