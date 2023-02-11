<script setup lang="ts">
import { ref } from 'vue';
import countriesData from '@/assets/data.json';
import CountryCard from '@/components/CountryCard.vue';
import DropdownFilter from '@/components/DropdownFilter.vue';
const countries = ref(countriesData.slice(0, 10));
console.log(countries.value);
</script>

<template>
	<div class="search-bar">
		<div class="input-search"></div>
		<DropdownFilter />
	</div>
	<section class="countries">
		<CountryCard
			v-for="country in countries"
			class="country"
			:key="country.name"
			:name="country.name"
			:flag="country.flag"
			:population="country.population"
			:region="country.region"
			:capital="(country.capital as string)"
		/>
	</section>
</template>
<style scoped>
.countries {
	display: grid;
	gap: 1rem;
	grid-auto-flow: dense;
	/* grid-auto-rows: 22rem; */
	grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
}

.search-bar {
	height: 100px;
	margin: 2rem 0;
}
</style>
