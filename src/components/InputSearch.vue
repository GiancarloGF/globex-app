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
			class="input"
		/>
		<v-icon name="hi-search" class="icon icon__search" />
		<v-icon
			v-if="inputValue"
			@click="inputValue = ''"
			name="io-close"
			scale="1.5"
			class="icon icon__close"
		/>
	</div>
</template>
<style scoped>
.group {
	display: flex;
	/* line-height: 28px; */
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
	padding: 0 3rem;
	width: 100%;
}

.input::placeholder {
	color: var(--c-border-card);
}

.icon {
	color: var(--c-border-card);
	position: absolute;
}

.icon__search {
	left: 1rem;
}
.icon__close {
	right: 1rem;
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
