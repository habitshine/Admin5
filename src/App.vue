<template>
    <div class="app">
        <!-- <v-prompt :text="prompt.text"></v-prompt> -->

        <v-notify v-model="$store.state.dialogModule.notifyList"></v-notify>
        <v-confirm @ok="$store.state.dialogModule.confirm.ok" @after-close="$store.state.dialogModule.confirm.afterClose" v-model="isConfirmShow" :width="$store.state.dialogModule.confirm.width" :lock="$store.state.dialogModule.confirm.lock" :holdTime="$store.state.dialogModule.confirm.holdTime" :title="$store.state.dialogModule.confirm.title" :text="$store.state.dialogModule.confirm.text">
        </v-confirm>
        <v-alert @after-close="$store.state.dialogModule.alert.afterClose" v-model="isAlertShow" :width="$store.state.dialogModule.alert.width" :lock="$store.state.dialogModule.alert.lock" :holdTime="$store.state.dialogModule.alert.holdTime" :title="$store.state.dialogModule.alert.title" :text="$store.state.dialogModule.alert.text">
        </v-alert>
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
import VNotify from './components/notice/Notify'

export default {
    name: 'App',

    data(){
        return {
            prompt: this.$promptOptions
        }
    },

    computed: {
        isAlertShow: {
            get() {
                return this.$store.state.dialogModule.alert.show;
            },

            set() {
                this.$store.commit('alert', {
                    show: false
                });
            }
        },

        isConfirmShow: {
            get() {
                return this.$store.state.dialogModule.confirm.show;
            },

            set() {
                this.$store.commit('confirm', {
                    show: false
                })
            }
        }
    },

    components: {
        VAlert,
        VConfirm,
        VNotify
    }
}
</script>
<style scope lang="scss">
.app {
    height: 100%;
    width: 100%;
    position: relative;
    .v-enter {
        opacity: 0;
        transform: translateY(-.5rem);
    }
    .v-enter-active {
        transition: all .3s;
    }
    .v-leave-active {
        opacity: 0;
        transition: all .3s;
        transform: translateY(-.5rem);
    }
}
</style>
