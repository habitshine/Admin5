<template>
    <div class="component-mask" :style="{position, backgroundColor}">
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
                return 'rgba(0,0,0,.5)';
            }
        },

        position: {
            type: String,
            default () {
                return 'fixed';
            }
        }
    }
};
</script>
<style scoped lang=scss>
.component-mask {
    z-index: 1986;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
