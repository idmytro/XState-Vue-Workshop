<script setup>
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {useMachine} from '@xstate/vue';
import ProgressCircle from '../../components/ProgressCircle.vue';
import {timerMachine} from './timerMachine02';

const {state, send} = useMachine(timerMachine);

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
			<h1>Exercise 02</h1>
		</header>

		<ProgressCircle />

		<div class="display">
			<div class="label">
				{{ state.value }}
			</div>

			<div
				class="elapsed"
				@click="send"
			>
				{{ Math.ceil(duration - elapsed) }}
			</div>

			<div class="controls">
				<button
					v-if="state !== 'running'"
					@click="send('RESET')"
				>
					Reset
				</button>

				<button
					@click="send"
				>
					+ 1:00
				</button>
			</div>
		</div>

		<div class="actions">
			<button
				v-if="state.value === 'running'"
				title="Pause timer"
				@click="send({ type: 'TOGGLE' })"
			>
				<FontAwesomeIcon :icon="faPause" />
			</button>

			<button
				v-if="state.value === 'paused' || state.value === 'idle'"
				title="Start timer"
				@click="send"
			>
				<FontAwesomeIcon :icon="faPlay" />
			</button>
		</div>
	</div>
</template>
