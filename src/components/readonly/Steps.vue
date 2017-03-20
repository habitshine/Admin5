
<template>
    <div class="com-steps">
        <div class="stps-bar">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Steps',
        data() {
            return {
            };
        },
        props: {
        },
        watch: {

        }
    };
</script>
<style lang="scss" scope rel="stylesheet/scss">
    .com-steps{
        width: 100%;
        padding: 50px 0 30px 0;
        .stps-bar{
            display: -webkit-box;
            height: 18px;
            width: 100%;
            border-radius: 8px;
            background: #eee;
        }
    }
</style>