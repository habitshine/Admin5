<template>
    <transition name="mask" @after-leave="afterLeave">
        <div v-show="value" @click.self="close" class="component-mask" :style="{position, backgroundColor, zIndex}">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'mask',

    props: {
        value: {
            type: Boolean
        },

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
        },

        lock: {
            type : Boolean,
            default(){
                return false
            }
        },

        zIndex: {
            type: Number,
            default(){
                return 1986;
            }
        }
    },

    methods: {
        afterLeave() {
            this.$emit('after-leave');
        },

        close() {
            if (!this.lock) {
                this.$emit('input', false);
            }
        }
    }

};
</script>
<style scoped lang="scss">
.component-mask {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
/*动画*/
.mask-enter-active {
    animation: mask-in .5s;
}

.mask-leave-active {
    animation: mask-out .5s;
}

@keyframes mask-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes mask-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
