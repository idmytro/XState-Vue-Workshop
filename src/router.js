import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
import Exercise from './components/Exercise.vue';

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
