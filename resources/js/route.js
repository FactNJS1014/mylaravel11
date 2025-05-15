import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Services from './components/Services.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
