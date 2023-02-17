import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { VueQueryPlugin } from '@tanstack/vue-query';
import type { VueQueryPluginOptions } from '@tanstack/vue-query';
import {
	HiChevronDown,
	HiChevronUp,
	HiSearch,
	FaGlobeAmericas,
	FaGlobeAfrica,
	FaGlobeEurope,
	FaGlobeAsia,
	GiEarthAsiaOceania,
	FcGlobe,
	MdKeyboardbackspaceRound,
	IoClose,
	BiExclamationCircle,
} from 'oh-vue-icons/icons';

addIcons(
	HiChevronDown,
	HiChevronUp,
	HiSearch,
	FaGlobeAmericas,
	FaGlobeAfrica,
	FaGlobeEurope,
	FaGlobeAsia,
	GiEarthAsiaOceania,
	FcGlobe,
	MdKeyboardbackspaceRound,
	IoClose,
	BiExclamationCircle
);
const vueQueryPluginOptions: VueQueryPluginOptions = {
	queryClientConfig: {
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	},
};
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.component('v-icon', OhVueIcon);
app.mount('#app');
