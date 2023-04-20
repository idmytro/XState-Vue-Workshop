<script setup>
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import ProgressCircle from '../../components/ProgressCircle.vue';

// import { useMachine } from '@xstate/vue';
// import {timerMachine} from './timerMachine';

const [state, send] = [{}, () => {}];

const {duration, elapsed, interval} = {
	duration: 60,
	elapsed: 0,
	interval: 0.1,
};
</script>

<template>
	<div
		:data-state="state.value"
		class="timer"
		:style="`
			--duration: ${duration};
			--elapsed: ${elapsed};
			--interval: ${interval};
		`"
	>
		<header>
			<h1>Exercise 01</h1>
		</header>

		<ProgressCircle />

		<div class="display">
			<div class="label">
				{{ state }}
			</div>

			<div
				class="elapsed"
				@click="send"
			>
				{{ Math.ceil(duration - elapsed) }}
			</div>

			<div class="controls">
				<button
					:class="state === 'paused' ? '' : 'invisible'"
					@click="send"
				>
					Reset
				</button>
			</div>
		</div>

		<div class="actions">
			<button
				title="Pause timer"
				:class="state === 'running' ? '' : 'invisible'"
				@click="send"
			>
				<FontAwesomeIcon :icon="faPause" />
			</button>

			<button
				title="Start timer"
				@click="send"
			>
				<FontAwesomeIcon :icon="faPlay" />
			</button>
		</div>
	</div>
</template>
