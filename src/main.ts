import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { HiChevronDown, HiChevronUp } from 'oh-vue-icons/icons';

addIcons(HiChevronDown, HiChevronUp);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('v-icon', OhVueIcon);
app.mount('#app');
