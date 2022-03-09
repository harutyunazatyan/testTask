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
    import { onMounted } from 'vue';
    import useSubjects from "../compositable/subjects";
    import useUsers from "../compositable/users";

    export default {
        setup() {
            const { subjects, getSubjects } = useSubjects();
            const { getUser, user , logoutForm} = useUsers();
            onMounted(() => {
                getSubjects();
                getUser();
            });


            const logout = async () => {
                await logoutForm();
            };

            return {
                subjects,
                logout,
                user
            }
        }
    }
</script>
