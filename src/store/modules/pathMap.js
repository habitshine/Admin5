const state = {
    map: {}
}

const mutations = {
    setPathMap(state, options) {
        state.map = options;
    }
}

export default {
    state,
    mutations
}
