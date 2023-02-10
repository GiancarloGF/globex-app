<script setup lang="ts">
import { RouterView } from "vue-router";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
</script>

<template>
  <header>
    <h3 class="logo">Where in the world?</h3>
    <ThemeSwitcher />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* max-width: 100vh; */
}

.logo {
  font-size: 1.5rem;
}

.btn-theme-toggle {
  width: fit-content;
  height: fit-content;
}

@media (min-width: 1024px) {
}
</style>
