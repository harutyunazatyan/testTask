<template>
    <div class="container">
        <h1>Welcome {{user.name}}   <a href="#" @click.prevent="logout">Logout</a></h1>
    </div>

    <table class="table" v-if="subjects && subjects.length">
        <thead>
        <tr>
            <th scope="col">Subject ID#</th>
            <th scope="col">Subject Name</th>
            <th scope="col">User name</th>
            <th scope="col">User ID</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="subject in subjects">
            <th scope="row">{{subject.subject_id}}</th>
            <td>{{subject.subject.name}}</td>
            <td>{{subject.user.name}}</td>
            <td>{{subject.user.id}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {}
        },
        mounted() {
            this.$store.dispatch('getUsersWithSubjectsAction')
        },
        methods: {
            logout()  {
                axios.post('api/logout')
                    .then(({data}) => {
                        if (data.success) {
                            Toast.fire({
                                icon: 'success',
                                title: data.message
                            });
                            this.$store.commit('setUser', null);
                            this.$store.commit('setLoggedIn', false);
                            this.$router.push('/login')
                        } else {
                            Toast.fire({
                                icon: 'error',
                                title: data.message
                            });
                        }
                    });
            },
            getSubjects() {
              return   this.$store.getters.getSubjects;
            }
        },
        computed: {
            user() {
                return this.$store.getters.getUser;
            },
            subjects() {
                return this.$store.getters.getSubjects;
            }
        }
    }
</script>
