<template>
    <div @click="select(opts)" class="com-radio" :class="{'radio-disabled': opts.disabled}">
        <i class="circle">
            <transition>
            <div v-show="value == opts.value" class="dot"></div>
            </transition>
        </i>
        <a class="text">{{opts.label}}</a>
    </div>
</template>
<script>
export default {
    name: 'Radio',
    
    props: {
        opts: {
            type: Object
        },
        value: {}
    },
    methods: {
        select: function(opts) {
            if (!opts.disabled) {
                this.opts.value = opts.value;
                this.$emit('input', opts.value);
            }
        }
    }
}
</script>
<style scoped lang=scss>
$color: #666;
$height: 16px;
$disabled_color: #bbb;
.com-radio {
    margin: 0 15px 0 0;
    cursor: pointer;
    display: inline-block;
    i.circle {
        display: inline-block;
        vertical-align: top;
        border-radius: 100%;
        width: $height;
        height: $height;
        border: 1px solid $color;
        box-sizing: content-box;
        div.dot {
            background: $color;
            height: $height/2;
            width: $height/2;
            margin: $height/4;
            border-radius: 100%;
        }
    }
    a.text {
        font-size: 14px;
        color: #444;
        display: inline-block;
        vertical-align: top;
        height: $height + 2px;
        margin-left: 5px;
        text-decoration: none;
    }
    li.radio-disabled {
        i.circle {
            display: block;
            float: left;
            border-radius: 100%;
            width: $height;
            height: $height;
            border: 1px solid $disabled_color;
            box-sizing: content-box;
            div.dot {
                background: $disabled_color;
                height: $height/2;
                width: $height/2;
                margin: $height/4;
                border-radius: 100%;
            }
        }
        a.text {
            color: $disabled_color;
            display: block;
            float: left;
            line-height: $height;
            margin-left: 5px;
            text-decoration: none;
        }
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
