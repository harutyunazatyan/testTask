require('./bootstrap');

import App from './components/App';
import router from './router/router';
import store from './store/store';
import { createApp } from 'vue';
import {Form, HasError, AlertError} from 'vform';

window.Form = Form;
// require('alpinejs');
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Swal = Swal;
window.Toast = Toast;

createApp({
    components: {
        App
    }
}).use(router).use(store).mount('#app')
