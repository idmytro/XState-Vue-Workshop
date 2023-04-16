<template>
  <div class="scratch">
    <div class="alarm">
      <div class="alarmTime">
        {{new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}}
      </div>
      <div class="alarmToggle" data-active></div>
    </div>
  </div>
</template>
