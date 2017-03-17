<template>
    <transition>
        <div v-show="opts.show" class="com-dropdown">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'DropDown',

    props: {
        opts: {
            type: Object
        }
    },

    methods: {

    }
}
</script>
<style scoped lang=scss>

</style>
