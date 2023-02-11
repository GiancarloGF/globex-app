<script setup lang="ts">
defineProps<{
	flag: string;
	name: string;
	population: number;
	region: string;
	capital: string;
}>();
</script>
<template>
	<article class="country">
		<img :src="flag" alt="Germany flag" class="country__flag" />
		<div class="country__info">
			<h4 class="country__name">{{ name }}</h4>
			<p class="country__detail"><strong>Population: </strong>{{ population }}</p>
			<p class="country__detail"><strong>Region: </strong>{{ region }}</p>
			<p class="country__detail"><strong>Capital: </strong>{{ capital }}</p>
		</div>
	</article>
</template>
<style scoped>
.country {
	background-color: var(--c-elements);
	border-radius: 0.5rem;
	box-shadow: var(--bs-card);
	color: var(--c-text);
	overflow: hidden;
	transition: var(--t-color-bg);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.country__flag {
	width: 100%;
	/* max-height: 200px; */
}

.country__flag > img {
	width: 100%;
	height: auto;
}

.country__info {
	padding: 1rem;
}

.country__name {
	font-size: 1.5rem;
	font-weight: 900;
	margin-bottom: 0.5rem;
}

.country__detail {
	font-size: 1rem;
}
.country__detail strong {
	font-weight: 600;
}
</style>
