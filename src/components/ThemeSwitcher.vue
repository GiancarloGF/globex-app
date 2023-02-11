<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark({
	selector: 'body',
	attribute: 'theme',
	valueDark: 'custom-dark',
	valueLight: 'custom-light',
});
const toggleDark = useToggle(isDark);
</script>
<template>
	<label class="switch">
		<input type="checkbox" @change="toggleDark()" :checked="isDark" />
		<span class="slider"></span>
	</label>
</template>
<style scoped>
/* The switch - the box around the slider */
.switch {
	font-size: 17px;
	position: relative;
	display: inline-block;
	width: 2.5em;
	height: 1.5em;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 30px;
	box-shadow: 0 0 0 2px var(--c-theme-switcher);
	border: 4px solid transparent;
	overflow: hidden;
	transition: 0.4s;
	background: transparent;
}

.slider:before {
	position: absolute;
	content: '';
	width: 100%;
	height: 100%;
	border-radius: 30px;
	background-color: var(--c-theme-switcher);
	transform: translateX(-50%);
	transition: 0.4s;
}

/* input:checked + .slider {
  box-shadow: 0 0 0 2px hsl(0, 0%, 100%);
} */

/* input:focus:checked + .slider {
  box-shadow: 0 0 0 2px #f32f21, 0 0 4px #777;
} */

input:checked + .slider:before {
	transform: translateX(50%);
	/* background-color: hsl(0, 0%, 100%); */
}
</style>
