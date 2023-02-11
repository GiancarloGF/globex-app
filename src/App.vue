<script setup lang="ts">
import { RouterView } from 'vue-router';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import TheLogo from './components/TheLogo.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
	<header>
		<TheLogo />
		<ThemeSwitcher />
	</header>
	<main>
		<RouterView />
	</main>
	<footer>
		<TheFooter />
	</footer>
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
	font-size: 2rem;
}

.btn-theme-toggle {
	width: fit-content;
	height: fit-content;
}

@media (min-width: 1024px) {
}
</style>
