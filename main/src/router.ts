import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: () => import('./views/Index.vue') },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;