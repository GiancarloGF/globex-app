<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries';
import { useRouter, useRoute } from 'vue-router';
const props = defineProps<{
	flag: string;
	name: string;
	population: number;
	region: string;
	capital: string;
}>();

const countriesStore = useCountriesStore();
const router = useRouter();

const onSelectCountry = () => {
	countriesStore.country = props;
	router.push({
		name: 'country',
		params: {
			countryId: props.name,
		},
	});
};
</script>
<template>
	<article class="country" @click="onSelectCountry">
		<img :src="flag" :alt="`${flag} flag`" class="country__flag" />
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
	border-radius: var(--br-general);
	border: 3px solid var(--c-border-card);
	color: var(--c-text);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	transition: var(--t-color-bg);
	cursor: pointer;
	/* transition: var(--t-main); */
}

.country__flag {
	width: 100%;
	background-color: var(--c-border-card);
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

/* when country is hovered */
.country:hover {
	border-color: var(--c-text);
	transform: scale(1.025);
	transition: transform 0.1s ease-in-out;
	/* transition: var(--t-main); */
}

.country:hover .country__flag {
	/* background-color: var(--c-text); */
}
</style>
