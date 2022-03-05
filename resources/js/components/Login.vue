<template>
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
        <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                form: new Form({
                    email: null,
                    password: null,
                })
            }
        },
        methods: {
            submitForm() {
                axios.post('api/login', this.form.data(), {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                })
                    .then(({data}) => {
                        if (data.success) {
                            Toast.fire({
                                icon: 'success',
                                title: data.data.message
                            });
                            this.$store.commit('setUser', data.data.user);
                            this.$store.commit('setLoggedIn', true);
                            this.$router.push('/dashboard')
                        } else {
                            Toast.fire({
                                icon: 'error',
                                title: data.data.message
                            });
                        }
                    });
            }
        }
    }
</script>
