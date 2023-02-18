<script setup lang="ts">
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import CheckboxRegion from '@/components/CheckboxRegion.vue';
import { REGIONS } from '@/constants';
const isOpen = ref(false);
const toggleDropdown = useToggle(isOpen);
</script>
<template>
	<div class="dropdown" @click="toggleDropdown()">
		<span class="dropdown__label">Filter by region</span>
		<div class="dropdown__icon">
			<v-icon v-if="isOpen" name="hi-chevron-up" class="chevron" />
			<v-icon v-else name="hi-chevron-down" class="chevron" />
		</div>
		<div id="menu" class="menu" :class="{ open: isOpen }">
			<CheckboxRegion
				v-for="region in REGIONS"
				:key="region.name"
				:name="region.name"
				:iconName="region.iconName"
			/>
		</div>
	</div>
</template>
<style scoped>
.dropdown {
	align-items: center;
	border-radius: var(--br-general);
	border: 2px solid var(--c-border-card);
	background-color: transparent;
	color: var(--c-border-card);
	cursor: pointer;
	display: flex;
	font-family: var(--ff-poppins);
	font-size: 0.9rem;
	gap: 0.5rem;
	height: 60px;
	justify-content: space-between;
	position: relative;
	width: 100%;
}

button {
	display: flex;
	align-items: center;
	height: 100%;
	border: 0;
	cursor: pointer;
	font-size: 16px;
}

.menu {
	background: var(--c-background);
	border-radius: var(--br-general);
	border: 2px solid var(--c-border-card);
	left: 0;
	opacity: 0;
	overflow: hidden;
	padding: 0.5rem;
	position: absolute;
	top: 68px;
	transition: 0.4s;
	translate: -30px 0;
	visibility: hidden;
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.menu.open {
	translate: 0 0;
	opacity: 1;
	visibility: visible;
}

.menu > .menu__item {
	border-radius: 0;
	border: 0;
	gap: 10px;
	list-style: none;
	padding: 0.5rem;
	width: 100%;
}

.menu > .menu__item:hover {
}

.dropdown__label {
	padding: 0 0.5rem 0 1rem;
}
.dropdown__icon {
	padding: 0 1rem 0 0.5rem;
}

.chevron {
	margin: auto;
}
</style>
