import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import Exercise from './views/Exercise.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/:path(.*)',
		name: 'NotFound',
		component: NotFound,
	},
	{
		path: '/:id',
		name: 'Exercise',
		component: Exercise,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
