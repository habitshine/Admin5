<template>
    <transition name="alert" @after-leave="afterLeave">
        <div v-show="value" class="component-alert" :style="{width: width}">
            <div class="header">
                <h1 class="title">{{title}}</h1>
            </div>
            <div class="body">
                {{text}}
            </div>
            <div class="footer">
                <a @click="ok" class="btn-ok">确定</a>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Alert',

    props: {
        value: {
            type: Boolean
        },

        width: {
            default () {
                return '400px';
            }
        },

        text: {
            type: String
        },

        title: {
            type: String,
            default () {
                return '提示';
            }
        },

        holdTime: {
            type: Number
        },

        lock: {
            type: Boolean
        }
    },

    methods: {
        ok() {
            this.$emit('ok');
            this.$emit('input', false);
        },

        afterLeave() {
            this.$emit('after-leave');
        }
    },

    computed: {
        isShow: {
            get() {
                return this.value;
            },

            set(isShow) {
                this.$emit('input', isShow);
            }
        }
    },
    components: {}
}
</script>
<style scoped lang="scss">
.component-alert {
    border-radius: 4px;
    background: #fff;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, .2);
    >.header {
        padding: 15px;
        >.title {
            margin: 0;
            font-size: 16px;
        }
    }
    >.body {
        padding: 15px;
    }
    >.footer {
        padding: 15px;
        overflow: hidden;
        @mixin btn() {
            float: right;
            padding:5px 15px;
            border-radius: 4px;
            cursor: pointer;
            letter-spacing: 1px;
            &:hover {
                text-decoration: none;
                opacity: .7;
            }
        }
        .btn-ok {
            border:1px solid #69c;
            color: #69c;
            @include btn();
        }
    }
}

// 动画
.alert-enter-active {
    animation: alert-in .5s;
}

.alert-leave-active {
    animation: alert-out .5s;
}

@keyframes alert-in {
    0% {
        opacity: 0;
        transform: translateY(15px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes alert-out {
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
