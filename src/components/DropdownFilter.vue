<script setup lang="ts">
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
const isOpen = ref(false);
const toggleDropdown = useToggle(isOpen);
const menuItems = ['Europa', 'Asia', 'America', 'Oceania'];

const onSelectItem = (item)=> {
	console.log(item);
	// toggleDropdown();
};
</script>
<template>
	<div class="dropdown" @click="toggleDropdown()">
		<span class="dropdown__label"
			>Filter by Region</span
		>
		<div class="dropdown__icon">
			<v-icon v-if="isOpen" name="hi-chevron-up" class="chevron" />
			<v-icon v-else name="hi-chevron-down" class="chevron" />
		</div>
		<ul id="menu" class="menu" :class="{ open: isOpen }">
			<li class="menu__item" v-for="item in menuItems" :key="item" @click.stop="onSelectItem(item)">
				<span class="material-symbols-outlined">{{ item }}</span>
			</li>
		</ul>
	</div>
</template>
<style scoped>
.dropdown {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	width: fit-content;
	background: var(--c-elements);
	box-shadow: var(--bs-card);
	border-radius: 8px;
	color: var(--c-text);
	font-family: var(--ff-poppins);
	gap: 0.5rem;
	cursor: pointer;
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
	overflow: hidden;
	position: absolute;
	left: 0;
	top: 68px;
	z-index: 1;
	width: 100%;
	translate: -30px 0;
	opacity: 0;
	visibility: hidden;
	border-radius: 8px;
	background: var(--c-elements);
	box-shadow: var(--bs-card);
	transition: 0.4s;
	padding: 0.5rem;
}

.menu.open {
	translate: 0 0;
	opacity: 1;
	visibility: visible;
}

.menu > .menu__item {
	gap: 10px;
	border: 0;
	border-radius: 0;
	width: 100%;
	padding: 0.5rem;
	list-style: none;
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
