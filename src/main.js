import { createApp } from 'vue'
import App from './App.vue';
import './styles/index.css';

// configure router
import router from './router/DashboardRoutes';

createApp(App)
.use(router)
.mount('#app')
