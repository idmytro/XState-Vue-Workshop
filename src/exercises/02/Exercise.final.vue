<script setup>
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import ProgressCircle from '../../components/ProgressCircle.vue';

import {useMachine} from '@xstate/vue';
import {timerMachine} from './timerMachine.final';

const {state, send} = useMachine(timerMachine);

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
			--duration: ${duration};
			--elapsed: ${elapsed};
			--interval: ${interval};
		`"
	>
		<header>
			<h1>Exercise 02 Solution</h1>
		</header>

		<ProgressCircle />

		<div class="display">
			<div class="label">
				{{ state.value }}
			</div>

			<div
				class="elapsed"
				@click="send({ type: 'TOGGLE' })"
			>
				{{ Math.ceil(duration - elapsed) }}
			</div>

			<div class="controls">
				<button
					:class="state.value === 'paused' ? '' : 'invisible'"
					@click="send({ type: 'RESET' })"
				>
					Reset
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
				@click="send({ type: 'TOGGLE' })"
			>
				<FontAwesomeIcon :icon="faPlay" />
			</button>
		</div>
	</div>
</template>
