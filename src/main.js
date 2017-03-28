window.ROOT_URL = '/mock';
window.MENU_URL = './mock/menu';
window.LOGIN_URL = './mock/login'

// window.ROOT_URL = 'http://113.6.252.23:6688';
// window.MENU_URL  = [window.ROOT_URL , '/personal/menu'].join('');
// window.LOGIN_URL = [window.ROOT_URL , '/oauth'].join('');

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
/* awsosme font */
import '../static/Font-Awesome-master/css/font-awesome.css'
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.css'
/* axios */
window.axios = require('axios');
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/* qs */
window.qs = require('qs');

/* debug */
window.l = window.syslog = (input) => {
    return console.log(input);
}

window.c = (input) => {
    console.log(JSON.stringify(input, null, 4));
}

// 路由根路径
window.HOME_ROUTE = '/home/';

// window.FileAPI = {cors: true, debug: true};


router.beforeEach((to, from, next) => {
    // 排除404 和 login, 不验证token
    if(-1 != ['view404', 'loginView'].indexOf(to.name)){
        next();
    } else {
        if(-1 != ['', undefined, null].indexOf(store.state.accessToken)) {
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
