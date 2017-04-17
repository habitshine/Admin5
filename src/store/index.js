import Vue from 'vue'
import Vuex from 'vuex'

// actions
import actions from './actions.js'

// 模块
import loginModule from './modules/login.js'

Vue.use(Vuex);
export default new Vuex.Store({
	actions,

    modules: {
        loginModule
    }
});

