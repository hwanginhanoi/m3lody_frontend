import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: () => import('./views/Index.vue') },
    { path: '/wallet', component: () => import('./views/Wallet.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;