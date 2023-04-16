<script setup>
import {useRoute} from 'vue-router';
import Readme00 from '../exercises/00/README.md';
import Excercise00 from '../exercises/00/index.vue';

const readmes = {
	'00': Readme00,
};

const exercises = {
	'00': Excercise00,
};

const {id} = useRoute().params;

const Readme = readmes[id];
const Excercise = exercises[id];
</script>

<template>
  <div class="exercise">
    <div class="exerciseDescription scrollbar-hide">
      <RouterLink to="/">← Home</RouterLink>
      <Readme />
    </div>
    <div>
      <Excercise />
    </div>
  </div>
</template>
