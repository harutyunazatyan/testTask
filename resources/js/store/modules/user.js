export default {
    state: {
        user: null,
        isLoggedIn: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setLoggedIn(state, payload) {
            state.isLoggedIn = payload;
        }
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getLoggedIn(state) {
            return state.isLoggedIn;
        },
    },
}
