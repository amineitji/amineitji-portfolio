import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap CSS
import 'bootstrap'; // Importation de Bootstrap JS

createApp(App).use(router).mount('#app');