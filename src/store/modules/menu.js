import axios from 'axios';
import qs from 'qs';
// initial state
const state = {
    status: 0,
    data: {
        menu: []
    }
};

// actions
const actions = {
    getMenuList({ commit, state }, accessToken) {
        return new Promise((resolve, reject) => {
            axios.get(MENU_URL, {params: {
                    accessToken
                }})
                .then((response) => {
                    if (1 == response.data.status) {

                    }
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};

// mutations
const mutations = {
    /**
     * 存储accessToken
     */
    saveAccessToken(state, accessToken) {
        state.accessToken = accessToken;
        localStorage.setItem('accessToken', accessToken);
    }
};

export default {
    state,
    actions,
    mutations
};
