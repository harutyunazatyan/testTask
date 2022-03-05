import axios from 'axios'

export default {
    state:{
        subjects: []
    },
    mutations:{
        setSubjects(state, payload){
            state.subjects = payload;
        }
    },
    getters:{
        getSubjects(state){
            return state.subjects;
        }
    },
    actions: {
        getUsersWithSubjectsAction(content) {
            axios.get('api/subjects').then((res) => {
                content.commit('setSubjects', res.data.data)
            })
        }
    }
}
