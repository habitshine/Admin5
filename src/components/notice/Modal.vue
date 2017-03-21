<template>
    <transition name="modal" @after-leave="afterLeave">
    <div v-show="value" class="com-modal modal" style="modal" @click.self="close">
        <div :style="{width: width}" class="modal-dialog">
            <transition name="modal-content">
            <!-- content -->
            <div v-show="value" class="modal-content">
                <!-- header -->
                <div class="modal-header" v-if="!!title">
                    <button v-if="hasClose" @click="close" type="button" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 class="modal-title">{{title}}</h5>
                </div>
                <!-- body -->
                <div class="modal-body">
                    <slot></slot>
                </div>
                <!-- footer -->
                <div class="modal-footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
            </transition>
        </div>
    </div>
    </transition>
</template>
<script>
export default {
    name: 'modal',

    props: {
        value: {
            type: Boolean
        },

        width: {
            type: String
        },

        title: {
            type: String
        },

        hasClose: {
            type: Boolean,
            default: false
        },

        holdTime: {
            type: Number
        },

        lock: {
            type: Boolean
        }
    },

    watch:{
        value(v){
            if(-1 == [-1, null, undefined].indexOf(this.holdTime)) {
                setTimeout(()=>{
                    this.$emit('input', false);
                }, this.holdTime);                
            }
        }
    },

    methods: {
        afterLeave(){
            this.$emit('after-close');
        },

        close(){
            if(!this.lock) {
                this.$emit('input', false);
            }
        }
    }
}
</script>
<style scoped lang=scss>
.modal {
    z-index: 1989;
    display: block;
    background: rgba(0, 0, 0, .6);
}

.modal-enter-active {
    animation: modal-in .5s;
}

.modal-leave-active {
    animation: modal-out .3s;
}

@keyframes modal-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes modal-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}


.modal-content{position: relative;}

.modal-content-enter-active {
    animation: modal-content-in .5s;
}

.modal-content-leave-active {
    animation: modal-content-out .3s;
}

@keyframes modal-content-in {
    0% {
        opacity: 0;
        transform:translateY(5px);
    }
    100% {
        opacity: 1;
        transform:translateY(0);
    }
}

@keyframes modal-content-out {
    0% {
        opacity: 1;
        transform:translateY(0);
    }
    100% {
        opacity: 0;
        transform:translateY(5px);
    }
}

</style>
