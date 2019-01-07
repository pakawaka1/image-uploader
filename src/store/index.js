import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth
    }
});

//Store is the overall collections of Vuex modules, includings states, mutations, etc.)
