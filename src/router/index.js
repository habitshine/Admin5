import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import FrameLayout from '../components/layout/Frame'
import LoginView from '../views/LoginView'
import View404 from '../views/View404'
import TestView from '../views/TestView'


// 路由配置
const routes = [
    { path: '/', redirect: '/home/index/index' },
    { path: '/home', component: FrameLayout, children: require('./module.home.js').routes },
    { path: '/login', component: LoginView, name: 'loginView' },
    { path: '/test', component: TestView, name: 'testView' },
    { path: '*', component: View404, name: 'view404' },
];

// 初始化路由
export default new VueRouter({
    // mode: 'history',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    routes,
});
