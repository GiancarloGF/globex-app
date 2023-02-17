<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import type { ICountry } from '@/types';
const route = useRoute();
const router = useRouter();
const countriesStore = useCountriesStore();
const { countries } = storeToRefs(countriesStore);
const country = computed<ICountry | undefined>(() =>
	countries.value.find((i) => i.name === route.params.countryId)
);
const countryBordersCompleted = computed<ICountry[] | undefined>(() => {
	const countryBorders = country?.value?.borders;
	return countries.value?.filter((i) => countryBorders?.includes(i.alpha3Code));
});

const countryDetails = computed<any>(() => [
	{
		label: 'Native name',
		value: country?.value?.name || '',
	},
	{
		label: 'Population',
		value: country?.value?.population || '',
	},
	{
		label: 'Region',
		value: country?.value?.region || '',
	},
	{
		label: 'Sub region',
		value: country?.value?.subregion || '',
	},
	{
		label: 'Capital',
		value: country?.value?.capital || '',
	},
	{
		label: 'Top level domain',
		value: country?.value?.topLevelDomain.join(', ') || '',
	},
	{
		label: 'Currencies',
		value: country?.value?.currencies.map((i) => i.code).join(', ') || '',
	},
	{
		label: 'Languages',
		value: country?.value?.languages.map((i) => i.name).join(', ') || '',
	},
]);
</script>
<template>
	<RouterLink to="/" class="button-back">
		<v-icon name="md-keyboardbackspace-round" class="button-back__icon" />
		<span class="button-back__label">Go to countries</span>
	</RouterLink>
	<div v-if="country" class="country">
		<img
			:src="country.flag"
			:alt="`${country.flag} flag`"
			class="country__flag"
		/>
		<div class="country__info">
			<h1 class="country__name">{{ country.name }}</h1>
			<div class="country__details">
				<p
					v-for="detail in countryDetails"
					:key="detail.label"
					class="country__detail"
				>
					<strong>{{ detail.label }}: </strong>{{ detail.value }}
				</p>
				<div v-if="country.borders" class="country__detail detail__borders">
					<strong>Border countries: </strong>
					<div class="borders">
						<div
							v-for="border in countryBordersCompleted"
							:key="border.name"
							class="border"
							@click="
								router.push({ name: 'country', params: { countryId: border.name } })
							"
						>
							{{ border.name }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.button-back {
	width: fit-content;
	padding: 0.2rem 1rem;
	border-radius: var(--br-general);
	text-decoration: none;
	color: var(--c-text);
	border: 2px solid var(--c-text);
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin: 4rem 0;
}
.button-back__icon {
	color: var(--c-text);
}

.button-back__label {
	color: var(--c-text);
}

.country {
	width: 100%;
	display: grid;
	grid-template-columns: 2fr 1fr;
	column-gap: 4rem;
}

.country__info {
}

.country__name {
	font-size: 3rem;
	font-weight: bold;
	line-height: 1;
	margin-bottom: 2rem;
}
.country__flag {
	width: 100%;
	height: auto;
	border-radius: var(--br-general);
}

.country__detail {
	margin: 0.3rem 0;
}

.country__detail strong {
	font-weight: bold;
	margin-right: 0.5rem;
}

.detail__borders {
	display: flex;
	flex-direction: column;
	/* flex-wrap: wrap; */
	justify-content: center;
	gap: 0.5rem;
	margin: 1rem 0;
}

.borders {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.border {
	border: 1px solid var(--c-text);
	font-size: 1rem;
	padding: 0.2rem 0.5rem;
	border-radius: 5px;
	cursor: pointer;
}
@media (max-width: 425px) {
	.country {
		grid-template-columns: 1fr;
		row-gap: 2rem;
	}

	.country__info {
		padding: 0.5rem;
	}

	.button-back {
		margin: 2rem 0;
	}
}
/* @media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
} */
</style>
