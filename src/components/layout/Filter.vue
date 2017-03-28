<template>
    <div class=" filter-panel">
        <div class="body">
            <slot></slot>
        </div>
        <!-- 自定义按钮 -->
        <div class="footer">
            <slot name="btn-group"></slot>
            <a @click="reset" class="btn btn-default">
                <i class="glyphicon glyphicon-retweet"></i> 重置
            </a>
            <a @click="submit" class="btn btn-primary">
                <i class="glyphicon glyphicon-ok"></i> 确定
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'filterPanel',

    data() {
        return {
            show: true,
            panelHeight: 0

        };
    },

    mounted() {
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
<style scoped lang="scss">
.filter-panel {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 15px;
    transition: all 1s;
    .body{padding: 5px 0;}
    .footer {
        margin-top: 15px;
        border-top:1px solid #e7e7e7;
        padding: 15px 0 0 0;
        background: #fff;
    }
}
</style>
