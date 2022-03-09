<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>

    <div class="container" style="margin-top:25px">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1"
                   aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="loginUser">Submit</button>
    </div>
</template>

<script>
    import { onMounted } from 'vue';
    import useUsers from "../compositable/users";
    import { reactive } from 'vue'

    export default {
        setup() {
            const form = reactive({
                email: '',
                password: '',
            });

            const { errors, user, submitForm } = useUsers();

            const loginUser = async () => {
                console.log(123)
                await submitForm({...form})
            };

            return {
                form,
                errors,
                user,
                loginUser
            }
        }
    }
</script>
