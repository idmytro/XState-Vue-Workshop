<script setup>
import {useRoute} from 'vue-router';
import Readme00 from '../exercises/00/README.md';
import Readme01 from '../exercises/01/README.md';
import Readme02 from '../exercises/02/README.md';
import Readme03 from '../exercises/03/README.md';

import Excercise00 from '../exercises/00/Timer00.vue';
import Excercise01 from '../exercises/01/Timer01.vue';
import Excercise02 from '../exercises/02/Timer02.vue';
import Excercise03 from '../exercises/03/Timer03.vue';

import Solution00 from '../exercises/00/Timer00.final.vue';
import Solution01 from '../exercises/01/Timer01.final.vue';
import Solution02 from '../exercises/02/Timer02.final.vue';
import Solution03 from '../exercises/03/Timer03.final.vue';

const readmes = {
	'00': Readme00,
	'01': Readme01,
	'02': Readme02,
	'03': Readme03,
};

const exercises = {
	'00': Excercise00,
	'01': Excercise01,
	'02': Excercise02,
	'03': Excercise03,
};

const solutions = {
	'00': Solution00,
	'01': Solution01,
	'02': Solution02,
	'03': Solution03,
};

const route = useRoute();
const {name} = route;
const {id} = route.params;

const Readme = readmes[id];
const Excercise = name === 'ExerciseView' ? exercises[id] : solutions[id];
</script>

<template>
	<div class="exercise">
		<div class="exerciseDescription scrollbar-hide">
			<p class="back-link">
				<RouterLink to="/">
					← Home
				</RouterLink>
			</p>

			<Readme />
		</div>

		<Excercise />
	</div>
</template>
