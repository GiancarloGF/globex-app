<script setup lang="ts">
import CountryCard from '@/components/CardCountry.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useQuery } from '@tanstack/vue-query';
import { getCountries } from '@/services/countries';

const { isLoading, isError, data } = useQuery({
	queryKey: ['countries'],
	queryFn: getCountries,
});
</script>

<template>
	<SearchBar />
	<div v-if="isLoading">Loading...</div>
	<div v-if="isError">An error has ocurred</div>
	<section v-if="data" class="countries">
		<CountryCard
			v-for="country in data"
			class="country"
			:key="country.name.common"
			:data="country"
		/>
	</section>
	<!-- <div v-if="data && data.length === 0" class="not-found">
		Sorry, no countries were found ☹️
	</div> -->
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
