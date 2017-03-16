<template>
    <div class="com-input">
        <input @focus="selectAll" :value="value" @input="input" class="form-control" :placeholder="opts.placeholder" :type="opts.type">
    </div>
</template>
<script>
export default {
    name: 'Input',

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
        }
    }
}
</script>
<style scoped lang=scss>
.com-input {
    .text-danger {
        margin-left: 5px;
        font-size: 12px;
        visibility: hidden;
    }
}
</style>
