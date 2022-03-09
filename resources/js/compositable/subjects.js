import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useSubjects() {
    const subjects = ref([]);

    const errors = ref('');
    const store = useStore();

    const getSubjects = async () => {
        await store.dispatch('getUsersWithSubjectsAction');
        subjects.value = store.getters.getSubjects
    };



    return {
        errors,
        subjects,
        getSubjects,
    }
}
