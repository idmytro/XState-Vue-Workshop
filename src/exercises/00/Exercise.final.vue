<script setup>
import {useReducer} from '../../composables/useReducer';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import ProgressCircle from '../../components/ProgressCircle.vue';
import {timerMachine, timerMachineConfig} from './timerMachine.final';

const [state, dispatch] = useReducer(
	timerMachine,
	timerMachineConfig.initial,
);

const {duration, elapsed, interval} = {
	duration: 60,
	elapsed: 0,
	interval: 0.1,
};
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
      <h1>Exercise 00 Solution</h1>
    </header>

    <ProgressCircle />

    <div class="display">
      <div class="label">{{ state }}</div>
      <div
        class="elapsed"
        @click="dispatch({type: 'TOGGLE'})"
      >
        {{ Math.ceil(duration - elapsed) }}
      </div>
      <div class="controls">
        <button
          :class="state === 'paused' ? '' : 'invisible'"
          @click="dispatch({type: 'RESET'})"
        >
          Reset
        </button>
      </div>
    </div>
    <div class="actions">
      <button
        v-if="state === 'running'"
        title="Pause timer"
        @click="dispatch({type: 'TOGGLE'})"
      >
        <FontAwesomeIcon :icon="faPause" />
      </button>

      <button
        v-if="state === 'idle' || state === 'paused'"
        title="Start timer"
        @click="dispatch({type: 'TOGGLE'})"
      >
        <FontAwesomeIcon :icon="faPlay" />
      </button>
    </div>
  </div>
</template>
