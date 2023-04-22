<script setup>
import {computed, watch} from 'vue';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {useMachine} from '@xstate/vue';
import ProgressCircle from '../../components/ProgressCircle.vue';
import {delay} from '../../utils/delay';
import {timerMachine} from './timerMachine06';

const {state, send} = useMachine(timerMachine);
const {interval} = state.value.context;
const duration = computed(() => state.value.context.duration);
const elapsed = computed(() => state.value.context.elapsed);

watch(
	() => [elapsed.value, state.value.value],
	async () => {
		if (state.value.value !== 'running') {
			return;
		}

		await delay(interval * 1000);
		send('TICK');
	},
	{immediate: true},
);
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
			<h1>Exercise 06</h1>
		</header>

		<ProgressCircle />

		<div class="display">
			<div class="label">
				{{ state.value }}
			</div>

			<div
				class="elapsed"
				@click="send('TOGGLE')"
			>
				{{ Math.ceil(duration - elapsed) }}
			</div>

			<div class="controls">
				<button
					v-if="state.value !== 'running'"
					@click="send('RESET')"
				>
					Reset
				</button>

				<button
					v-if="state.value === 'running'"
					@click="send('ADD_MINUTE')"
				>
					+ 1:00
				</button>
			</div>
		</div>

		<div class="actions">
			<button
				v-if="state.value === 'running'"
				title="Pause timer"
				@click="send('TOGGLE')"
			>
				<FontAwesomeIcon :icon="faPause" />
			</button>

			<button
				v-if="state.value === 'paused' || state.value === 'idle'"
				title="Start timer"
				@click="send('TOGGLE')"
			>
				<FontAwesomeIcon :icon="faPlay" />
			</button>
		</div>
	</div>
</template>
