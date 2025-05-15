
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './route.js';

const app = createApp(App);
app.mount('#app');
app.use(router);
