<script setup>
import {watchEffect} from 'vue';
import {faPlay, faPause, faStop} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {useMachine} from '@xstate/vue';
import ProgressCircle from '../../components/ProgressCircle.vue';
import {timerMachine} from './timerMachine06.final';

const {state, send} = useMachine(timerMachine);

watchEffect(
	onCleanup => {
		const intervalId = setInterval(() => {
			send('TICK');
		}, state.value.context.interval * 1000);

		onCleanup(() => clearInterval(intervalId));
	},
);
</script>

<template>
	<div
		:data-state="state.value"
		class="timer"
		:style="`
			--duration: ${state.context.duration};
			--elapsed: ${state.context.elapsed};
			--interval: ${state.context.interval};
		`"
	>
		<header>
			<h1>Exercise 06 Solution</h1>
		</header>

		<ProgressCircle />

		<div class="display">
			<div class="label">
				{{ state.toStrings().slice(-1).toString() }}
			</div>

			<div
				class="elapsed"
				@click="send('TOGGLE')"
			>
				{{ Math.ceil(state.context.duration - state.context.elapsed) }}
			</div>

			<div class="controls">
				<button
					v-if="!state.matches({ running: 'normal' })"
					@click="send('RESET')"
				>
					Reset
				</button>

				<button
					v-else
					@click="send('ADD_MINUTE')"
				>
					+ 1:00
				</button>
			</div>
		</div>

		<div class="actions">
			<button
				v-if="state.matches({ running: 'normal' })"
				title="Pause timer"
				@click="send('TOGGLE')"
			>
				<FontAwesomeIcon :icon="faPause" />
			</button>

			<button
				v-if="state.matches({ running: 'overtime' })"
				title="Reset timer"
				@click="send('RESET')"
			>
				<FontAwesomeIcon :icon="faStop" />
			</button>

			<button
				v-if="state.matches('paused') || state.matches('idle')"
				title="Start timer"
				@click="send('TOGGLE')"
			>
				<FontAwesomeIcon :icon="faPlay" />
			</button>
		</div>
	</div>
</template>
