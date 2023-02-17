<script setup lang="ts">
// import { useCountriesStore } from '@/stores/countries';
import type { ICountry } from '@/types/country';
import { toLower } from '@/utils/strings';
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';

// const countriesStore = useCountriesStore();
const router = useRouter();
const props = defineProps<{
	data: ICountry;
}>();

const { name, flags, population, region, capital } = toRefs(props.data);

const onSelectCountry = () => {
	// countriesStore.country = props.data;
	router.push({
		name: 'country',
		params: {
			countryId: toLower(props.data.name.common),
		},
	});
};
</script>
<template>
	<article class="country" @click="onSelectCountry">
		<img :src="flags.png" :alt="`${name.common} flag`" class="country__flag" />
		<div class="country__info">
			<h4 class="country__name">{{ name.common }}</h4>
			<p class="country__detail"><strong>Population: </strong>{{ population }}</p>
			<p class="country__detail"><strong>Region: </strong>{{ region }}</p>
			<p v-if="capital" class="country__detail">
				<strong>Capital: </strong>{{ capital[0] }}
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
