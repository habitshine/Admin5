// 开发/上线阶段全局变量
if(process.env.NODE_ENV == 'production') {
    window.ROOT_URL = 'http://113.6.252.23:6688';
    window.MENU_URL  = [window.ROOT_URL , '/personal/menu'].join('');
    window.LOGIN_URL = [window.ROOT_URL , '/oauth'].join('');  
} else {
    window.ROOT_URL = '/mock';
    window.MENU_URL = './mock/menu';
    window.LOGIN_URL = './mock/login'    
}

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
window.axios = require('axios');
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
window.qs = require('qs');

// debug
window.l = window.syslog = input => console.log(input);
window.c = input => console.log(JSON.stringify(input, null, 4));

// 路由根路径
window.HOME_ROUTE = '/home/';
// window.FileAPI = {cors: true, debug: true};

/**
 * 登陆验证
 * 如果accessToken为空, 跳转到/login
 */
router.beforeEach((to, from, next) => {
    // 排除404 和 login, 不验证token
    if(-1 != ['view404', 'loginView'].indexOf(to.name)){
        next();
    } else {
        if(-1 != ['', undefined, null].indexOf(store.state.loginModule.accessToken)) {
            next({path: '/login'});
        } else {
            next();
        }
    }
});

/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    template: '<App/>',
    router,
    components: { App },
});

// Raven
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
Raven
    .config('https://91523ac45c3a4c0b99ff408d89c46e56@sentry.io/148184')
    .addPlugin(RavenVue, Vue)
    .install();
