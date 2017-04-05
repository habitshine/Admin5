<template>
    <div class="com-number input-group">
        <input type="text" class="form-control" :placeholder="opts.placeholder" :value="value" @input="input">
        <div class="input-group-btn">
            <a class="btn btn-default fa fa-minus" @click="reduce"></a>
            <a class="btn btn-default fa fa-plus" @click="add"></a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'number',

    props: {
        opts: {

        },

        value: {
            type: [Number, String]
        }
    },

    data() {
        return {};
    },

    methods: {
        input(e){
            if(this.min > e.target.value) {
                e.target.value = this.min;
                this.$emit('input', this.min);
                syslog(e.target.value)
            } else if(this.min < e.target.value){
                e.target.value = this.max;
                this.$emit('input', this.max);
                syslog(e.target.value)
            }
        },

        reduce() {
            if(this.opts.min < this.value) {
                this.$emit('input', this.value - 1);
            }
        },

        add() {
            if(this.opts.max > this.value) {
                this.$emit('input', this.value + 1);
            }
        }
    }
}
</script>
<style scoped lang="scss">
.com-number {}
</style>
