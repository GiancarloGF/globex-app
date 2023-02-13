<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries';
import { useRouter } from 'vue-router';
import type { ICountry } from '@/types';

const countriesStore = useCountriesStore();
const router = useRouter();
const props = defineProps<{
	data: ICountry;
}>();

const onSelectCountry = () => {
	countriesStore.country = props.data;
	router.push({
		name: 'country',
		params: {
			countryId: props.data.name,
		},
	});
};
</script>
<template>
	<article class="country" @click="onSelectCountry">
		<img
			:src="props.data.flag"
			:alt="`${props.data.flag} flag`"
			class="country__flag"
		/>
		<div class="country__info">
			<h4 class="country__name">{{ props.data.name }}</h4>
			<p class="country__detail">
				<strong>Population: </strong>{{ props.data.population }}
			</p>
			<p class="country__detail">
				<strong>Region: </strong>{{ props.data.region }}
			</p>
			<p class="country__detail">
				<strong>Capital: </strong>{{ props.data.capital }}
			</p>
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
	justify-content: flex-start;
	overflow: hidden;
	transition: var(--t-color-bg);
	cursor: pointer;
	/* transition: var(--t-main); */
}

.country__flag {
	width: 100%;
	background-color: var(--c-border-card);
	height: 180px;
	object-fit: cover;
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
	line-height: 1;
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
