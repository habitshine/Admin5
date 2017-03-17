<template>
    <div class="app">
        <v-confirm v-model="confirmVisibility" :title="$store.state.confirm.title"></v-confirm>
        <transition appear mode="out-in">
            <!-- <keep-alive> -->
            <router-view>
            </router-view>
            <!-- </keep-alive> -->
        </transition>
    </div>
</template>
<script>
import VAlert from './components/notice/Alert'
import VConfirm from './components/notice/Confirm'
import VPrompt from './components/notice/Prompt'
import VModal from './components/notice/Modal'

export default {
    name: 'App',

    components: {
        VAlert,
        VConfirm,
        VPrompt,
        VModal
    },

    computed: {
        confirmVisibility: {
            get() {
                return this.$store.state.confirm.show;
            },

            set() {
                this.$store.commit('changeConfirm', {
                    show: false
                })
            }
        }
    }
}
</script>
<style lang=scss>
.app {
    height: 100%;
    width: 100%;
    position: relative;
}

.v-enter {
    opacity: 0;
    transform: translateY(-.5rem);
}

.v-enter-active {
    transition: all .5s;
}

.v-leave-active {
    opacity: 0;
    transition: all .5s;
    transform: translateY(-.5rem);
}
</style>
