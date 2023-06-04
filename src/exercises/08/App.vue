<script setup lang="ts">
import {ref} from 'vue';
import {timerAppMachine} from './timerAppMachine';

const activeName = ref('clock');
</script>

<template>
	<!-- <Tabs
		as="main"
		class-name="app"
		data-state="{state.toStrings().join('"
		')}
		default-index="{1}"
	>
		<TabList class-name="app-tabs">
			<Tab class-name="app-tab">
				Clock
			</Tab>

			<Tab class-name="app-tab">
				Timer
			</Tab>
		</TabList>

		<TabPanels class-name="app-panels">
			<TabPanel class-name="app-panel">
				<Clock />
			</TabPanel>

			<TabPanel class-name="app-panel">
				<NewTimer
					on-submit="{(duration)"
					=
				>
					{
					send({ type: 'ADD', duration });
					}}
					onCancel={
					timers.length
					? () => {
					send('CANCEL');
					}
					: undefined
					}
					key={state.toStrings().join(' ')}
					/>
					<div
						className="timers"
						hidden="{!state.matches('timer')}"
					>
						{state.context.timers.map((timer, i) => {
						return (
						<Timer
							key="{timer.id}"
							timer-ref="{timer}"
							on-delete="{()"
							=
						>
							{
							send('DELETE');
							}}
							onAdd={() => {
							send('CREATE');
							}}
							data-active={i === state.context.currentTimer || undefined}
							/>
							);
							})}
						</timer>
					</div>

					<div
						className="dots"
						hidden="{!state.matches('timer')}"
					>
						{state.context.timers.map((_, index) => {
						return (
						<div
							key="{index}"
							className="dot"
							data-active="{"
							index="=="
							state.context.currentTimer
							||
							undefined
							}
							onClick="{()"
							=
						>
							{
							send({ type: 'SWITCH', index: index });
							}}
							>
						</div>
						);
						})}
					</div>
				</newtimer>
			</TabPanel>
		</TabPanels>
	</Tabs> -->

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
