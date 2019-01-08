import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));
        commit('setToken', query.access_token);
        window.localStorage.getItem('imgur_token', query.access_token);
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
