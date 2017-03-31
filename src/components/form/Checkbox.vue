<template>
    <div @click="select(opts)" class="checkbox">
        <i class="box" :style="{width: size, height: size}">
            <transition>
            <div v-show="value" class="dot"></div>
            </transition>
        </i>
        <a class="text">
            <slot></slot>
        </a>
    </div>
</template>
<script>
export default {
    name: 'Checkbox',

    props: {
        opts: {
            type: Object
        },

        size: {
            type: String,
            default () {
                return '16px';
            }
        },

        value: {
            type: Boolean
        }
    },
    methods: {
        select: function() {
            this.$emit('input', !this.value);
        }
    }
}
</script>
<style scoped lang="scss">
$color: #666;
div.checkbox {
    display: inline-block;
    overflow: hidden;
    padding: 0;
    margin: 0 0 0 0;
    cursor: pointer;
    i.box {
        display: inline-block;
        vertical-align: top;
        border: 1px solid $color;
        box-sizing: content-box;
        border-radius: 2px;
        div.dot {
            border-radius: 2px;
            box-sizing: border-box;
            background: $color;
            height: 50%;
            width: 50%;
            margin: 25%;
            border-radius: 1px;
        }
    }
    a.text {
        font-size: 14px;
        color: #444;
        display: inline-block;
        vertical-align: top;
        line-height: 1.4;
        margin-left: 5px;
        text-decoration: none;
    }
}

.v-enter-active {
    animation: zoomIn .3s;
}

.v-leave-active {
    animation: zoomOut .3s;
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        transform: scale(2);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes zoomOut {
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
