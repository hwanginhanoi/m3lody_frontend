import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {path: '/', redirect: '/index'},
    {
        path: '/index',
        name: 'Dashboard',
        components:
            {
                default: () => import('../views/Index.vue'),
                nav: () => import('../components/NavDrawer.vue')
            }
    },
    {
        path: '/wallet',
        name: 'Wallet',
        components:
            {
                default: () => import('../views/Wallet.vue'),
                nav: () => import('../components/NavDrawer.vue')
            }
    },
    {
        path: '/account',
        name: 'Account',
        components:
            {
                default: () => import('../views/Account.vue'),
                nav: () => import('../components/NavDrawer.vue')
            }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        components:
            {
                default: () => import('../views/Marketplace.vue'),
                nav: () => import('../components/NavDrawer.vue')
            }
    },
    {
        path: '/watchlist',
        name: 'Watchlist',
        components:
            {
                default: () => import('../views/Watchlist.vue'),
                nav: () => import('../components/NavDrawer.vue')
            }
    },
    {
        path: '/exchange',
        name: 'Exchange',
        components:
            {
                default: () => import('../views/Exchange.vue'),
                nav: () => import('../components/NavDrawer.vue')
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
        path: '/product',
        name: 'Product',
        component: () => import('../views/Product.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/[[ Error 404 ]].vue')
    },
];
//
// export const routes = [
//     { path: '/', redirect: '/dashboard' },
//     {
//         path: '/',
//         component: () => import('@/layouts/default.vue'),
//         children: [
//             {
//                 path: 'dashboard',
//                 component: () => import('@/pages/dashboard.vue'),
//             },
//             {
//                 path: 'account-settings',
//                 component: () => import('@/pages/account-settings.vue'),
//             },
//             {
//                 path: 'typography',
//                 component: () => import('@/pages/typography.vue'),
//             },
//             {
//                 path: 'icons',
//                 component: () => import('@/pages/icons.vue'),
//             },
//             {
//                 path: 'cards',
//                 component: () => import('@/pages/cards.vue'),
//             },
//             {
//                 path: 'tables',
//                 component: () => import('@/pages/tables.vue'),
//             },
//             {
//                 path: 'form-layouts',
//                 component: () => import('@/pages/form-layouts.vue'),
//             },
//         ],
//     },
//     {
//         path: '/',
//         component: () => import('@/layouts/blank.vue'),
//         children: [
//             {
//                 path: 'login',
//                 component: () => import('@/pages/login.vue'),
//             },
//             {
//                 path: 'register',
//                 component: () => import('@/pages/register.vue'),
//             },
//             {
//                 path: '/:pathMatch(.*)*',
//                 component: () => import('@/pages/[...error].vue'),
//             },
//         ],
//     },
// ]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
