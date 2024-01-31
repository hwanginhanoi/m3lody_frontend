import {createRouter, createWebHashHistory} from 'vue-router';
import product from "../data.json"
const routes = [
    {path: '/', redirect: '/index'},
    {
        path: '/index',
        name: 'Dashboard',
        components:
            {
                default: () => import('../views/Index.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/wallet',
        name: 'Wallet',
        components:
            {
                default: () => import('../views/Wallet.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/account',
        name: 'Account',
        components:
            {
                default: () => import('../views/Account.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        components:
            {
                default: () => import('../views/Marketplace.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/watchlist',
        name: 'Watchlist',
        components:
            {
                default: () => import('../views/Watchlist.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/exchange',
        name: 'Exchange',
        components:
            {
                default: () => import('../views/Exchange.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/create',
        name: 'Create',
        components:
            {
                default: () => import('../views/Create.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
    {
        path: '/profile',
        name: 'Profile',
        components:
            {
                default: () => import('../views/Profile.vue'),
                nav: () => import('../components/Header.vue')
            }
    },
        {
        path: '/transaction',
        name: 'Transaction',
        components:
            {
                default: () => import('../views/Transaction.vue'),
                nav: () => import('../components/Header.vue')
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
        path: '/list',
        components: {
            default: () => import('../views/Create.vue'),
            nav: () => import('../components/Header.vue')
        }
    },
    {
        path: '/product/:id',
        name: 'Product',
        components: {
            default: () => import('../views/Product.vue'),
            nav: () => import('../components/Header.vue')
        },
        beforeRouteEnter(to) {
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
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/[[ Error 404 ]].vue')
    },
    {
        path: '/test',
        name: 'TEST',
        component: () => import('../views/testslidecard.vue')
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
