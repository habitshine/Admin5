import { APP_CONFIRM, APP_NOTIFY, APP_ALERT, APP_PROMPT } from '../mutation-types.js'
const state = {
    [APP_NOTIFY]: [
        // {type: 'success', text: '恭喜您,成功了!', holdTime: 3000},
        // {type: 'default', text: 'default!', holdTime: 3000},
        // {type: 'primary', text: 'primary!', holdTime: 3000},
        // {type: 'info', text: 'info!', holdTime: 3000},
        // {type: 'danger', text: 'danger!', holdTime: 3000},
        // {type: 'warning', text: 'warning!', holdTime: 3000}
    ],

    [APP_CONFIRM]: {
        title: '提示?',
        show: false,
        holdTime: -1,
        width: null,
        ok() {},
        afterClose() {}
    },

    [APP_ALERT]: {
        title: '提示',
        show: false,
        holdTime: -1,
        width: null,
        ok() {},
        afterClose() {}
    },

    [APP_PROMPT]: {
        show: true
    }
};

// mutations
const mutations = {
    /**
     * notify
     */
    notify(state, options) {
        state.notifyList.push(options);
    },
    /**
     * alert
     */
    alert(state, options) {
        state.alert = {...state.alert, ...options };
    },
    /**
     * confirem
     */
    confirm(state, options) {
        state.confirm = {...state.confirm, ...options };
    },
};

export default {
    state,
    mutations
};
