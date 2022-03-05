import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import store from '../store/store'
import axios from 'axios'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
