<script setup>
</script>

<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>  |
      <router-link to="/not-found">Not found</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
