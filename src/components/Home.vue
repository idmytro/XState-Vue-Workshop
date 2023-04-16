<script setup>
import Readme from '../README.md';
import Scratch from './Scratch.vue';
</script>

<template>
  <div class="exercise">
    <div class="exerciseDescription scrollbar-hide">
      <Readme />
    </div>
    <div>
      <Scratch />
    </div>
  </div>
</template>
