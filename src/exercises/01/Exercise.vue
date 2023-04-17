<script setup>
import {useReducer} from '../../composables/useReducer';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import ProgressCircle from '../../components/ProgressCircle.vue';

// Import the timer machine and its initial state:
// import { ... } from './timerMachine';

const {duration, elapsed, interval} = {
	duration: 60,
	elapsed: 0,
	interval: 0.1,
};

const state = ''; // delete me - useReducer instead!
function dispatch () {} // delete me - useReducer instead!
</script>

<template>
  <div
    :data-state="state"
    class="timer"
    :style="`
      --duration: ${duration},
      --elapsed: ${elapsed},
      --interval: ${interval},
    `"
  >
    <header>
      <h1>Exercise 01</h1>
    </header>

    <ProgressCircle />

    <div class="display">
      <div class="label">{{ state }}</div>
      <div
        class="elapsed"
        @click="dispatch"
      >
        {{ Math.ceil(duration - elapsed) }}
      </div>
      <div class="controls">
        <button
        @click="dispatch"
        >
          Reset
        </button>
      </div>
    </div>
    <div class="actions">
      <button
        @click="dispatch"
        title="Pause timer"
      >
        <FontAwesomeIcon :icon="faPause" />
      </button>

      <button
        @click="handler"
        title="Start timer"
      >
        <FontAwesomeIcon :icon="faPlay" />
      </button>
    </div>
  </div>
</template>
