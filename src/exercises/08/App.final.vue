<script setup lang="ts">
import {ref} from 'vue';
import {timerAppMachine} from './timerAppMachine.final';

const activeName = ref('clock');
</script>

<template>
	<el-tabs
		v-model="activeName"
		class="exercise-08"
	>
		<el-tab-pane
			label="Clock"
			name="clock"
		>
			Clock
		</el-tab-pane>

		<el-tab-pane
			label="Timer"
			name="timer"
		>
			Timer
		</el-tab-pane>
	</el-tabs>
</template>

<style lang="scss">
.exercise-08 {
	.el-tabs__nav {
		width: 100%;
	}

	.el-tabs__item {
		width: 50%;
		transition: all 0.3s;
	}
}
</style>
