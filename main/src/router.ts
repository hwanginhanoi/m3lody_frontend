import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: () => import('./views/Index.vue') },
    { path: '/wallet', component: () => import('./views/Wallet.vue') },
    { path: '/account', component: () => import('./views/Account.vue') },
    { path: '/marketplace', component: () => import('./views/Marketplace.vue') },
    { path: '/watchlist', component: () => import('./views/Watchlist.vue') },
    { path: '/exchange', component: () => import('./views/Exchange.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;