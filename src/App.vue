<template>
    <div class="app">
        <v-notify v-model="$store.state.notifyList"></v-notify>

        <v-confirm 
            v-model="isConfirmShow"
            @ok="$store.state.confirm.ok"
            :title="$store.state.confirm.title">
        </v-confirm>

        <v-alert
            @after-close="$store.state.alert.afterClose"
            v-model="isAlertShow"
            :title="$store.state.alert.title">
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
                this.$store.commit('changeAlert', {
                    show: false
                });
            }            
        },

        isConfirmShow: {
            get() {
                return this.$store.state.confirm.show;
            },

            set() {
                this.$store.commit('changeConfirm', {
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
