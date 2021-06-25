import { createApp } from 'vue';
import App from '@/App.vue';
import store from './store';

const app = createApp(App).use(store);
console.log(app);
const vm = app.mount('#app');
console.log(vm);

Proxy.revocable({}, {})