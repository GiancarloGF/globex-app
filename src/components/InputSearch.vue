<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
const searchStore = useSearchStore();
const { inputValue } = storeToRefs(searchStore);
</script>
<template>
	<div class="group">
		<input
			v-model="inputValue"
			placeholder="Search for a country..."
			type="search"
			class="input"
		/>
		<v-icon name="hi-search" class="icon" />
	</div>
</template>
<style scoped>
.group {
	display: flex;
	line-height: 28px;
	align-items: center;
	position: relative;
	width: 100%;
	max-width: 500px;
}

.input {
	background-color: transparent;
	border-radius: var(--br-general);
	border: 2px solid var(--c-border-card);
	color: var(--c-text);
	font-family: var(--ff-poppins);
	font-size: 1rem;
	height: 60px;
	outline: none;
	padding: 0 1rem 0 3rem;
	width: 100%;
}

.input::placeholder {
	color: var(--c-border-card);
}

.icon {
	position: absolute;
	left: 1rem;
	color: var(--c-border-card);
}
.input:focus {
	border-color: var(--c-text);
	transition: var(--t-main);
}

.input:focus ~ .icon {
	color: var(--c-text);
	/* transition: var(--t-main); */
}
</style>
