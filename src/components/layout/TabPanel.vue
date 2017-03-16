<template>
    <li v-show="isShow" class="com-tab-panel">
        <slot></slot>
    </li>
</template>
<script>

export default {
    name: 'TabPanel',

    created(){
        // 计算自身的索引
        this.selfIndex = this.$parent.$data.panelLength;
        this.$parent.$data.panelLength++;
    },

    data() {
        return {
            selfIndex: 0,
            activeIndex: ''
        }
    },

    props: {
        label: {
            // type: String
        },
        disabled: {
            type: Boolean
        }
    },

    computed: {
        isShow() {
            return this.selfIndex == this.activeIndex;
        }

    }
}
</script>
<style lang=scss scoped>
.layout-tab {}

.tab-switch-enter-active {
    animation: tab-switch-in .5s;
}

.tab-switch-leave-active {
    animation: tab-switch-out .3s;
}

@keyframes tab-switch-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes tab-switch-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}



</style>
