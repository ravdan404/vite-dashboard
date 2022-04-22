import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Table from '../components/Table.vue'
import Login from '../components/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/table',
        name: 'Table',
        component: Table
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router