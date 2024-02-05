import {createRouter, createWebHashHistory} from 'vue-router';
import product from "../data.json"

//declare routes
const routes = [
    {path: '/', redirect: '/index'}, //index page
    {
        path: '/index',
        name: 'Index',
        components:
            {
                default: () => import('../views/Index.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
        {
        path: '/dashboard',
        name: 'Dashboard',
        components:
            {
                default: () => import('../views/Dashboard.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
    {
        path: '/account',
        name: 'Account',
        components:
            {
                default: () => import('../views/Account.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        components:
            {
                default: () => import('../views/Marketplace.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
    {
        path: '/create',
        name: 'Create',
        components:
            {
                default: () => import('../views/Create.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
    {
        path: '/profile',
        name: 'Profile',
        components:
            {
                default: () => import('../views/Profile.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
        {
        path: '/transaction',
        name: 'Transaction',
        components:
            {
                default: () => import('../views/Transaction.vue'),
                header: () => import('../components/Header.vue'),
                footer: () => import('../components/Footer.vue')
            }
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/product/:id',     //product page base on id
        name: 'Product',
        components: {
            default: () => import('../views/Product.vue'),
            header: () => import('../components/Header.vue'),
            footer: () => import('../components/Footer.vue')
        },
        beforeRouteEnter(to : any) {
            const id = parseInt(to.params.id);
            const data = product;
            const exists = data.some((item) => item.id === id)
            if (!exists) return {
                name: 'not-found',
                params: {pathMatch: to.path.substring(1).split("/")},
                query: to.query,
                hash: to.hash,
            }
        }
    },
    {
        path: '/:pathMatch(.*)*', //error page
        name: 'not-found',
        component: () => import('../views/[[ Error 404 ]].vue')
    },
];


const router = createRouter({
    history: createWebHashHistory(), //create history
    routes,
});

export default router; //export routes
