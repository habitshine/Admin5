<template>
    <div class="app">
        <v-confirm 
            v-model="isConfirmShow"
            @ok="$store.state.confirm.ok"
            :title="$store.state.confirm.title">
        </v-confirm>

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


    methods: {
        ok(){
            alert(312)
        }
    },

    computed: {
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
        VModal
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
