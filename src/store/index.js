import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        pathMap: {},
        notifyList: [
            // {type: 'success', text: '恭喜您,成功了!', holdTime: 3000},
            // {type: 'default', text: 'default!', holdTime: 3000},
            // {type: 'primary', text: 'primary!', holdTime: 3000},
            // {type: 'info', text: 'info!', holdTime: 3000},
            // {type: 'danger', text: 'danger!', holdTime: 3000},
            // {type: 'warning', text: 'warning!', holdTime: 3000}
        ],

        confirm: {
            title: '提示?',
            show: false,
            holdTime: -1,
            width: null,
            ok(){},
            afterClose(){}
        },

        alert: {
            title: '提示',
            show: false,
            holdTime: -1,
            width: null,
            ok(){},
            afterClose(){}
        },

        prompt: {
            show: true
        },

        accessToken: localStorage.getItem('accessToken') || '',

        isLogin: false,

        userName: localStorage.getItem('userName') || ''
    },

    mutations: {
        setPathMap(state, options){
            state.pathMap = options;
        },

        notify(state, options) {
            state.notifyList.push(options);
        },

        /**
         * alert
         */
        alert(state, options){
            state.alert = {...state.alert, ...options};
        },
        /**
         * confirem
         */
        confirm(state, options){
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
        login(context, loginData) {
            // context可能是store也可能是module
            // context.commit('xx', true);
            return new Promise((resolve, reject) => {
                axios.post(LOGIN_URL, qs.stringify(loginData) )
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
