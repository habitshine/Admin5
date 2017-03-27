<template>
    <div class="view-login">
        <h2>登陆</h2>

        <v-input class="mt15" v-model="userName" :opts="{placeholder: '请输入用户名'}"></v-input>

        <v-input class="mt15" v-model="password" :opts="{placeholder: '请输入密码', type: 'password'}"></v-input>
        
        <button @click="login" class="mt15 btn btn-lg btn-primary btn-block" type="submit">登陆</button>
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
                return this.$store.state.userName;
            },

            set(value) {
                this.$store.commit('setUserName', value);
            }
        }
    },

    methods: {
        /**
         * 登陆, 触发action
         */
        login() {
            this.$store.dispatch('login', {
                username: this.userName,
                password: this.password
            }).then((res) => {
                if (1 == res.status) {
                    this.$router.push({path: 'home'});
                } else {
                    alert(123)
                }   
            });
        }
    },

    components: {
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
