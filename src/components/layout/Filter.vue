<template>
    <div class=" filter-panel">
        <div class="body">
            <slot></slot>
        </div>
        <!-- 自定义按钮 -->
        <div class="footer btn-group">
            <slot name="btn-group"></slot>
            <v-button @click="reset" :icon="'refresh'" :type="'default'">重置</v-button>
            <v-button @click="submit" :icon="'check'" :type="'primary'">确定</v-button>
        </div>
    </div>
</template>
<script>
import VButton from '../form/Button'
export default {
    name: 'filterPanel',

    components: {VButton},

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
    .body{}
    .footer {
        margin-top: 15px;
        border-top:1px solid #e7e7e7;
        padding: 15px 0 0 0;
        background: #fff;
    }
}
</style>
