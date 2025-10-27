import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../screens/HomeView.vue';
import BrowseView from '../screens/BrowseView.vue';
import SimulationPrepView from '../screens/SimulationPrepView.vue';
import SimulationView from '../screens/SimulationView.vue';
import NewsView from '../screens/NewsView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/browse',
            name: 'browse',
            component: BrowseView,
        },
        {
            path: '/simulation-prep',
            name: 'simulation-prep',
            component: SimulationPrepView,
        },
        {
            path: '/simulation',
            name: 'simulation',
            component: SimulationView,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
    ],
});

export default router;
