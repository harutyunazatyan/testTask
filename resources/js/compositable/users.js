import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default function useSubjects() {
    const user = ref([]);
    const errors = ref('');
    const store = useStore();
    const router = useRouter();

    const getUser = async () => {
        user.value = store.getters.getUser
    };

    const submitForm = async (form) => {
        axios.post('api/login', form, {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        })
            .then(({data}) => {
                if (data.success) {
                    Toast.fire({
                        icon: 'success',
                        title: data.data.message
                    });
                    store.commit('setUser', data.data.user);
                    store.commit('setLoggedIn', true);
                    router.push('/dashboard')
                } else {
                    errors.value = data.data.message;
                    Toast.fire({
                        icon: 'error',
                        title: data.data.message
                    });
                }
            });
    }
    const logoutForm = async () => {
        await axios.post('api/logout')
            .then(({data}) => {
                if (data.success) {
                    Toast.fire({
                        icon: 'success',
                        title: data.message
                    });
                    store.commit('setUser', null);
                    store.commit('setLoggedIn', false);
                    router.push('/login')
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: data.message
                    });
                }
            });
    }

    return {
        errors,
        user,
        getUser,
        submitForm,
        logoutForm
    }
}
