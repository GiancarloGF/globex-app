<script setup lang="ts">
import type { IRegionNames } from '@/types';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';
import { toFirstUpper } from '@/utils/strings';
const searchStore = useSearchStore();
const { filters } = storeToRefs(searchStore);
defineProps<{
	name: IRegionNames;
	iconName: string;
}>();
</script>
<template>
	<div class="box">
		<input
			type="checkbox"
			name="regions"
			class="checkbox"
			:value="name"
			v-model="filters"
		/>
		<div class="box__content">
			<v-icon :name="iconName" class="box__icon" scale="1.8" />
			<span class="box__label">{{ toFirstUpper(name) }}</span>
		</div>
	</div>
</template>
<style scoped>
.box {
	position: relative;
	/* margin: 20px; */
}
.checkbox {
	position: absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
	appearance: none;
	-webkit-appearance: none;
	z-index: 20;
}

.box__content {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: var(--c-border-card);
	gap: 0.5rem;
	width: 100%;
	height: 100%;
	padding: 0.5rem 1rem;
	border: 2px solid var(--c-border-card);
	border-radius: var(--br-general);
}

.box__icon {
	position: relative;
	color: var(--c-border-card);
}

.box__label {
	font-size: 1.2rem;
}

/* when checkbox checked */
.checkbox:checked ~ .box__content {
	border-color: var(--c-text);
	/* transition: var(--t-main); */
}

.checkbox:checked ~ .box__content .box__icon {
	color: var(--c-text);
	/* transition: var(--t-main); */
}
.checkbox:checked ~ .box__content .box__label {
	color: var(--c-text);
	/* transition: var(--t-main); */
}
</style>
