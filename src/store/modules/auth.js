import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) =>  {
        !!state.token //!! turns a value into a boolean
    }
};

const actions = {
    login: () => {
        api.login();
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        // commit is used instead of mutations.setToken
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state, // here we include key: value -> since key=state and value=state(state:state), just include state,
    getters,
    actions,
    mutations
};
