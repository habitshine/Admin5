<template>
    <div class="layout-panel panel panel-default">
        <div v-if="undefined != $slots.header" class="panel-heading">
            <slot name="header"></slot>
        </div>
        <div v-if="undefined != $slots.body" class="panel-body">
            <slot name="body"></slot>
        </div>
        <div v-if="undefined != $slots.footer" class="panel-footer">
            <slot name="footer"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'panel'
}
</script>
<style scoped lang="scss">
</style>
