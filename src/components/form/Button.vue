<template>
    <a :class="['com-button', 'btn', 'btn-'+type, !!disabled && 'disabled']" @click="click" @mouseleave="mouseleave" @mouseenter="mouseenter">
        <i :class="['fa', 'fa-'+icon]"></i>
        <span v-show="openText">
            <slot></slot>
        </span>
    </a>
</template>
<script>
export default {
    name: 'button',

    props: {
        showText: {
            type: Boolean,
            default(){
                return true;
            }
        },

        disabled: {
            type: Boolean
        },

        icon: {
            type: String
        },

        type: {
            type: String
        },

        value: {

        }
    },

    data(){
        return {openText: this.showText};
    },

    methods: {
        mouseenter(){
            if(!this.showText) {
                this.openText = true;
            }
        },

        mouseleave(){
            if(!this.showText) {
                this.openText = false;
            }            
        },

        click(){
            this.$emit('click');
        }
    }
}
</script>
<style scoped lang="scss">
.com-button {
    // transition:.2s;
}

.v-enter-active {
    animation: in .2s;
}

.v-leave-active {
    animation: out .2s;
}

@keyframes in {
    0% {
        opacity: 0;
        transform: scale(2);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(2);
    }
}
</style>
