import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        // menu: [],
        modal: {
            title: '您确定要执行该操作吗?',
            show: true
        },
        
        confirm: {
            title: '您确定要执行该操作吗?',
            show: false,
            ok(){},
            cancel(){}
        },

        alert: {
            show: true
        },

        prompt: {
            show: true
        },

        accessToken: localStorage.getItem('accessToken') || '',

        isLogin: false,

        userName: localStorage.getItem('userName') || ''
    },

    mutations: {
        /**
         * 打开confirem
         */
        changeModal(state, options){
            state.modal = options;
        },
        /**
         * 打开confirem
         */
        changeConfirm(state, options){
            state.confirm = {...state.confirm, ...options};
        },
        /**
         * 存储accessToken
         * 存储userName
         */
        saveAccessToken(state, { accessToken, userName }) {
            state.accessToken = accessToken;
            state.isLogin = true;
            state.userName = userName;
            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', accessToken);
        },
        /**
         * 退出登陆
         */
        exit(state) {
            state.accessToken = '';
            localStorage.removeItem('accessToken');
        },

        setUserName(state, userName) {
            state.userName = userName
        },

        getAccessToken() {
            state.accessToken = localStorage.getItem('accessToken');
        }

    },

    actions: {
        // changeConfirm(context, options) {
        //     return new Promise((resolve, reject) => {
        //         context.commit('changeConfirm', options);
        //         resolve(options);
        //     });
        // },
        login(context, loginData) {
            // context可能是store也可能是module
            // context.commit('xx', true);
            return new Promise((resolve, reject) => {
                axios.post('http://113.6.252.23:6688/ndrcs/testlogin', qs.stringify(loginData) )
                // axios.post('./mock/login', loginData)
                    .then((response) => {
                        // 登陆成功
                        if (1 == response.data.status) {
                            // mutation: saveAccessToken
                            context.commit('saveAccessToken', {
                                accessToken: response.data.data.accessToken,
                                userName: loginData.userName
                            });
                        }
                        resolve(response.data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        }
    }
});
