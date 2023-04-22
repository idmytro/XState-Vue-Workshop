<script setup>
import {useRoute} from 'vue-router';
import Readme00 from '../exercises/00/README.md';
import Readme01 from '../exercises/01/README.md';
import Readme02 from '../exercises/02/README.md';
import Readme03 from '../exercises/03/README.md';
import Readme04 from '../exercises/04/README.md';
import Readme05 from '../exercises/05/README.md';
import Readme06 from '../exercises/06/README.md';

import Excercise00 from '../exercises/00/Timer00.vue';
import Excercise01 from '../exercises/01/Timer01.vue';
import Excercise02 from '../exercises/02/Timer02.vue';
import Excercise03 from '../exercises/03/Timer03.vue';
import Excercise04 from '../exercises/04/Timer04.vue';
import Excercise05 from '../exercises/05/Timer05.vue';
import Excercise06 from '../exercises/06/Timer06.vue';

import Solution00 from '../exercises/00/Timer00.final.vue';
import Solution01 from '../exercises/01/Timer01.final.vue';
import Solution02 from '../exercises/02/Timer02.final.vue';
import Solution03 from '../exercises/03/Timer03.final.vue';
import Solution04 from '../exercises/04/Timer04.final.vue';
import Solution05 from '../exercises/05/Timer05.final.vue';
import Solution06 from '../exercises/06/Timer06.final.vue';

const readmes = {
	'00': Readme00,
	'01': Readme01,
	'02': Readme02,
	'03': Readme03,
	'04': Readme04,
	'05': Readme05,
	'06': Readme06,
};

const exercises = {
	'00': Excercise00,
	'01': Excercise01,
	'02': Excercise02,
	'03': Excercise03,
	'04': Excercise04,
	'05': Excercise05,
	'06': Excercise06,
};

const solutions = {
	'00': Solution00,
	'01': Solution01,
	'02': Solution02,
	'03': Solution03,
	'04': Solution04,
	'05': Solution05,
	'06': Solution06,
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
