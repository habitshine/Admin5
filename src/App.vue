<template>
    <div class="app">
        <v-notify v-model="$store.state.notifyList"></v-notify>

        <v-confirm 
            @ok="$store.state.confirm.ok"
            @after-close="$store.state.confirm.afterClose"
            v-model="isConfirmShow"
            :width="$store.state.confirm.width"
            :lock="$store.state.confirm.lock"
            :holdTime="$store.state.confirm.holdTime"
            :title="$store.state.confirm.title"
            :text="$store.state.confirm.text"
            >
        </v-confirm>

        <v-alert
            @after-close="$store.state.alert.afterClose"
            v-model="isAlertShow"
            :width="$store.state.alert.width"
            :lock="$store.state.alert.lock"
            :holdTime="$store.state.alert.holdTime"
            :title="$store.state.alert.title"
            :text="$store.state.alert.text"
            >
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
import VPrompt from './components/notice/Prompt'
import VNotify from './components/notice/Notify'

export default {
    name: 'App',

    computed: {
        isAlertShow: {
            get() {
                return this.$store.state.alert.show;
            },

            set() {
                this.$store.commit('alert', {
                    show: false
                });
            }            
        },

        isConfirmShow: {
            get() {
                return this.$store.state.confirm.show;
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
        VPrompt,
        VNotify
    }
}
</script>

<style scope lang=scss>
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
    transition: all .3s;
}

.v-leave-active {
    opacity: 0;
    transition: all .3s;
    transform: translateY(-.5rem);
}
</style>
