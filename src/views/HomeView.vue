<script setup lang="ts">
import CountryCard from '@/components/CardCountry.vue';
import { useCountriesStore } from '@/stores/countries';
import { storeToRefs } from 'pinia';
import SearchBar from '@/components/SearchBar.vue';
const countriesStore = useCountriesStore();
const { countriesSearched } = storeToRefs(countriesStore);
</script>

<template>
	<SearchBar />
	<section class="countries">
		<CountryCard
			v-for="country in countriesSearched"
			class="country"
			:key="country.name"
			:data="country"
		/>
	</section>
	<div v-if="countriesSearched.length === 0" class="not-found">
		Sorry, no countries were found ☹️
	</div>
</template>
<style scoped>
.countries {
	display: grid;
	gap: 1rem;
	grid-auto-flow: dense;
	grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
}

.not-found {
	text-align: center;
	font-size: 1.2rem;
}

@media (max-width: 425px) {
}
</style>
