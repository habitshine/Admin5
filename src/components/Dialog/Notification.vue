<template>
    <div class="component-notification">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Notification',

    props: {
        value: {
            type: Boolean
        }
    },

    data() {
        return {
            timer: null
        };
    },

    methods: {
        ok() {
            this.$emit('input', false);
        }
    },

    computed: {

    },

    watch: {

    }
}
</script>
<style scoped lang="scss">
.component-notification {
    padding: 15px;
    border-radius: 4px;
    background: #fff;
}

// 动画
.notification-enter-active {
    animation: notification-in .5s;
}

.notification-leave-active {
    animation: notification-out .5s;
}

@keyframes notification-in {
    0% {
        opacity: 0;
        transform: translateY(15px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes notification-out {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(15px);
    }
}
</style>
