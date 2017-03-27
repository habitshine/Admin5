window.HOME_PATH = '/mock';
window.MENU_URL = './mock/menu';
window.LOGIN_URL = './mock/login'


// window.HOME_PATH = 'http://113.6.252.23:6688';
// window.MENU_URL = 'http://113.6.252.23:6688/ndrcs/menus';
// window.LOGIN_URL = 'http://113.6.252.23:6688/ndrcs/testlogin';


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
    return console.info(input);
}

window.j = (json) => {
    return JSON.stringify(json);
}

window.c = (input) => {
    console.log(JSON.stringify(input, null, 4));
}



window.FileAPI = {cors: true, debug: true};


router.beforeEach((to, from, next) => {
    // 排除404 和 login, 不验证token
    // 暂时不验证了 2017-02-22 10:56
    if(-1 == ['view404', 'loginView'].indexOf(to.name)){
        // console.log(store.state.accessToken)
        if('' == store.state.accessToken) {
            // next({path: '/login'});
        }
    } else {
        
    }
    next();
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
