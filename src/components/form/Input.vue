<template>
    <div class="com-input" :class="{'input-group': opts.icon}">
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

        },

        type: {
            type: String,
            default () {
                return 'text';
            }
        }
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
    .text-danger {
        margin-left: 5px;
        font-size: 12px;
        visibility: hidden;
    }
}
</style>
