<script setup lang="ts">
import { computed, Transition } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import { getCountry } from '@/services/countries';
import { formatNumberWithSuffix, toLower, formatNumberToKM } from '@/utils';
import LoaderGlobe from '@/components/LoaderGlobe.vue';

const router = useRouter();
const route = useRoute();
const countryId = computed<string>(() => route.params.countryId as string);

const { isLoading, isError, data } = useQuery({
	queryKey: ['country', countryId],
	queryFn: () => getCountry(countryId.value),
});

const country = computed(() => data?.value?.[0]);
const currencies = computed(() => {
	if (!country.value?.currencies) return '';
	return Object.values(country.value?.currencies)
		.map((i) => i.name)
		.join(', ');
});

const languages = computed(() => {
	if (!country.value?.languages) return '';
	return Object.values(country.value?.languages).join(', ');
});

const countryDetails = computed<any>(() => [
	{
		label: 'Native name',
		value: country.value?.name.common || '',
	},
	{
		label: 'Population',
		value: country.value?.population
			? formatNumberWithSuffix(country.value?.population)
			: '',
	},
	{
		label: 'Region',
		value: country.value?.region || '',
	},
	{
		label: 'Sub region',
		value: country.value?.subregion || '',
	},
	{
		label: 'Capital',
		value: country.value?.capital?.[0] || '',
	},
	// {
	// 	label: 'Top level domain',
	// 	value: country.value?.topLevelDomain.join(', ') || '',
	// },
	{
		label: 'Currencies',
		value: currencies.value,
	},
	{
		label: 'Languages',
		value: languages.value,
	},
	{
		label: 'Area',
		value: country.value?.area ? formatNumberToKM(country.value?.area) : '',
	},
	{
		label: 'Demonyms',
		value: country.value
			? `${country.value.demonyms.eng.f}, ${country.value.demonyms.eng.m}`
			: '',
	},
	{
		label: 'Continents',
		value: country.value ? country.value.continents.join(', ') : '',
	},
]);

const onSelectBorder = (borderId: string) => {
	router.push({ name: 'country', params: { countryId: toLower(borderId) } });
};
</script>
<template>
	<RouterLink to="/" class="button-back">
		<v-icon name="md-keyboardbackspace-round" class="button-back__icon" />
		<span class="button-back__label">Go to countries</span>
	</RouterLink>
	<LoaderGlobe v-if="isLoading" />
	<div v-if="isError">Han error has ocurred</div>
	<Transition>
		<div v-if="data">
			<div v-for="country in data" :key="country.name.common" class="country">
				<img
					:src="country.flags.svg"
					:alt="`${country.flag} flag`"
					class="country__flag"
				/>
				<div class="country__info">
					<h1 class="country__name">{{ country.name.common }}</h1>
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
									v-for="border in country.borders"
									:key="border"
									class="border"
									@click="onSelectBorder(border)"
								>
									{{ border }}
								</div>
								<!-- <div v-for="border in country.borders" :key="border" class="border">
									{{ border }}
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Transition>
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

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
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
