<template>
    <div class="view-login">
        <h2>登陆</h2>
        <v-input class="v-input" v-model="userName" :opts="{placeholder: '请输入用户名'}" @keyup="login"></v-input>
        <v-input class="v-input" v-model="password" :opts="{placeholder: '请输入密码', type: 'password'}" @keyup="login"></v-input>
        <a @click="login" class="btn-login btn btn-lg btn-primary btn-block">
            <i class="fa fa-arrow-circle-right"></i> 登陆
        </a>
    </div>
</template>
<script>
import VInput from '../components/form/Input'

export default {
    name: 'loginView',

    mounted() {
        this.$store.commit('exit');
    },

    data() {
        return {
            password: ''
        }
    },

    computed: {
        userName: {
            get() {
                return this.$store.state.loginModule.userName;
            },

            set(value) {
                this.$store.commit('setUserName', value);
            }
        }
    },

    methods: {
        /**
         * 登陆, 获取accessToken
         */
        login(e) {
            if(undefined == e.keycode || 13 == e.keycode) {
                this.$store.dispatch('login', {
                    userName: this.userName,
                    password: this.password
                }).then((res) => {
                    if (1 == res.status) {
                        this.$router.push({
                            path: '/home'
                        });
                    } else {
                        alert(res.message);
                    }
                });                
            }
        }
    },

    components: {
        VInput
    }
}
</script>
<style scope lang="scss">
.view-login {
    max-width: 320px;
    width: 100%;
    margin: 15% auto;
    .v-input {
        margin-top: 15px;
    }
    .btn-login {
        margin-top: 15px;
    }
}
</style>
