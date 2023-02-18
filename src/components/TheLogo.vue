<script setup lang="ts">
// import { useSearchStore } from '@/stores/search';
// import { storeToRefs } from 'pinia';
// const searchStore = useSearchStore();
// const { value } = storeToRefs(searchStore);
</script>
<template>
	<div class="logo">
		<h3 class="logo__text">Globex</h3>
		<!-- <v-icon class="logo__icon" name="fc-globe" scale="2" /> -->
		<lord-icon
			src="https://cdn.lordicon.com/rsvjbeuw.json"
			trigger="hover"
			style="width: 80px; height: 80px"
		>
		</lord-icon>
	</div>
</template>
<style scoped>
.logo {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}
</style>
