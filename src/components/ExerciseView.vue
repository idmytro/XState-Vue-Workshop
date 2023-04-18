<script setup>
import {useRoute} from 'vue-router';
import Readme00 from '../exercises/00/README.md';
import Readme01 from '../exercises/01/README.md';
import Readme02 from '../exercises/02/README.md';
import Excercise00 from '../exercises/00/Exercise.vue';
import Excercise01 from '../exercises/01/Exercise.vue';
import Excercise02 from '../exercises/02/Exercise.vue';

const readmes = {
	'00': Readme00,
	'01': Readme01,
	'02': Readme02,
};

const exercises = {
	'00': Excercise00,
	'01': Excercise01,
	'02': Excercise02,
};

const {id} = useRoute().params;

const Readme = readmes[id];
const Excercise = exercises[id];
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
