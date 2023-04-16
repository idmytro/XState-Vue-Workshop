import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';
import ExerciseView from './components/ExerciseView.vue';

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
		name: 'ExerciseView',
		component: ExerciseView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
