<template>
    <div class="view-login">
        <v-modal :opts="{show: 0 == status, width: '240px'}">
            <p class="text text-warning">{{info}}</p>
        </v-modal>

        <h2>登陆</h2>

        <v-input class="mt15" v-model="userName" :opts="{placeholder: '请输入用户名'}"></v-input>

        <v-input class="mt15" v-model="password" :opts="{placeholder: '请输入密码', type: 'password'}"></v-input>
        
        <button @click="login" class="mt15 btn btn-lg btn-primary btn-block" type="submit">登陆</button>
    </div>
</template>
<script>
import VInput from '../components/form/Input'
import VModal from '../components/notice/Modal'

export default {
    name: 'LoginView',

    mounted() {
        this.$store.commit('exit');
    },

    data() {
        return {
            status: -1,
            info: '',
            password: ''
        }
    },

    computed: {
        userName: {
            get() {
                return this.$store.state.userName;
            },

            set(value) {
                this.$store.commit('setUserName', value)
            }
        }
    },

    methods: {
        /**
         * 登陆, 触发action
         */
        login() {
            this.$store.dispatch('login', {
                userName: this.userName,
                password: this.password
            }).then((res) => {
                if (1 == res.status) {
                    this.status = 1;
                    this.$router.push({
                        path: 'home'
                    });
                } else {
                    this.status = 0;
                    this.info = res.info;
                    // 定时关闭
                    setTimeout(() => {
                        this.status = -1;
                    }, 2000);
                }
            });
        }
    },

    components: {
        VModal,
        VInput
    }
}
</script>
<style>
.view-login {
    max-width: 320px;
    width: 100%;
    margin: 15% auto;
    .mt15 {
        margin-top: 15px;
    }
}
</style>
