import user from './modules/user'
import subject from './modules/subject'
import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

const store = createStore({
    modules: {
        user,
        subject,
    },
    plugins: [
        createPersistedState(),
    ],
});

export default store;
