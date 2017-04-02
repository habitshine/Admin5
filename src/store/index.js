import Vue from 'vue'
import Vuex from 'vuex'

// actions
import actions from './actions.js'

// 模块
import loginModule from './modules/login.js'
import dialogModule from './modules/dialog.js'

Vue.use(Vuex);
export default new Vuex.Store({
	actions,

    modules: {
        loginModule,
        dialogModule
    }
});
