<template>
	<div>
		Developed by
		<a href="https://personal-portfolio-swart-phi.vercel.app/" target="_blank"
			>Giancarlo Guerra</a
		>
		with ❤️
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
div {
	padding: 2rem;
	margin-top: 3rem;
	text-align: center;
}

a {
	color: #00cdce;
	text-decoration: none;
	font-weight: bold;
	font-size: 1.2rem;
}

@media (max-width: 425px) {
	div {
		padding: 1rem;
	}

	a {
		font-size: 1rem;
	}
}
</style>
