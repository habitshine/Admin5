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
$color: #69c;
$padding:15px;
$disable_color: #ccc;
.com-dropdown {
    box-sizing: border-box;
    margin-top: 2px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    border-radius: 4px;
    outline: none;
    position: absolute;
    z-index: 1986;
    top: 100%;
    left: 0;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .15);
    width: 100%;
}

.v-enter-active {
    animation: popup-in .5s;
}

.v-leave-active {
    animation: popup-out .5s;
}

@keyframes popup-in {
    0% {
        opacity: 0;
        transform: scale(1.1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes popup-out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1.1);
    }
}
</style>
