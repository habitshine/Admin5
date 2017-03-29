const state = {
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
        ok() {},
        afterClose() {}
    },

    alert: {
        title: '提示',
        show: false,
        holdTime: -1,
        width: null,
        ok() {},
        afterClose() {}
    },

    prompt: {
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
