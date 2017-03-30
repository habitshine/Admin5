<template>
    <div class="com-mask" :style="{position, backgroundColor}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'mask',

    props: {
        backgroundColor: {
            type: String,
            default () {
                return 'rgba(255,255,255,.9)';
            }
        },

        position: {
            type: String,
            default () {
                return 'absolute';
            }
        }
    }
};
</script>
<style scoped lang=scss>
.com-mask {
    z-index: 1986;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
