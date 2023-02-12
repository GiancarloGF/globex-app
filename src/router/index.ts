import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory('/'),
	routes: [
		{
			path: '/',
			name: 'home',
			sensitive: true,
			component: HomeView,
		},
		{
			path: '/country/:countryId',
			name: 'country',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/CountryView.vue'),
		},
		{
			path: '/country',
			redirect: (to) => {
				return { path: '/' };
			},
		},
	],
});

export default router;
