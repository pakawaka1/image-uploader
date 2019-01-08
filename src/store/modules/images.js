import api from '../../api/imgur';

const state = {
    images: []

};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        // rootState.auth.token;
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data) 
    }
};

const mutations = {
    setImages: (state, images) => {
    state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}