import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'


import users from '@/router/routes/users'
import sales from '@/router/routes/sales'
import statistic from '@/router/routes/statistic'

import Settings from '../views/Settings.vue'

const routes = [

    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            title: 'Пользователи'
        }
    },

    ...users,
    ...statistic,
    ...sales,
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: {
            title: 'Настройки'
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router