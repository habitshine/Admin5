<template>
    <div class="layout-scroll">
        <!-- 内容容器, 自适应高度 -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScrollView'
}
</script>
<style scoped lang=scss>
.layout-scroll {
    box-sizing:border-box;
    padding:15px;
    position: relative;
    /*height: 100%;*/
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    
}
</style>
