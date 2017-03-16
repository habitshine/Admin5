<template>
    <!-- <div class="row layout-filter" @mouseenter="showPanel" @mouseleave="hiddenPanel" :style="{marginTop: show ? 0 : (30 - panelHeight) + 'px'}"> -->
    <div class="row layout-filter">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <slot></slot>
                </div>
                <div class="panel-footer">
                    <!-- 自定义按钮 -->
                    <slot name="btn-group"></slot>
                    <a @click="reset" class="btn btn-default">
                        <i class="glyphicon glyphicon-retweet"></i> 重置
                    </a>
                    <a @click="submit" class="btn btn-primary">
                        <i class="glyphicon glyphicon-ok"></i> 确定
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FilterPanel',

    data() {
        return {
            show: true,
            panelHeight: 0

        };
    },

    mounted(){
        this.panelHeight = this.$el.offsetHeight;
    },

    methods: {
        reset() {
            this.$emit('reset');
        },

        submit() {
            this.$emit('submit');
        },

        hiddenPanel() {
            this.show = false;
        },

        showPanel() {
            this.show = true;
        }
    }
}
</script>
<style scoped>
.layout-filter {
    transition: all 1s;
}

h1 {
    color: #423983;
}
</style>
