<script setup>
// Import {VueComponent as Readme} from '../../README.md';
import Readme from '../../README.md';
import ScratchApp from '../scratch/ScratchApp.vue';
</script>

<template>
  <div class="exercise">
    <div class="exerciseDescription scrollbar-hide">
      <Readme />
    </div>
    <div>
      <ScratchApp />
    </div>
  </div>
</template>
