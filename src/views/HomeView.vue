<script setup lang="ts">
import { ref } from 'vue';
import countriesData from '@/assets/data.json';
import CountryCard from '@/components/CardCountry.vue';
// import DropdownFilter from '@/components/DropdownFilter.vue';
import InputSearch from '@/components/InputSearch.vue';
import RegionCheckbox from '@/components/CheckboxRegion.vue';
import type { IRegion } from '@/types';

const countries = ref(countriesData.slice(0, 20));
const regions = ref<IRegion[]>([
	{
		name: 'americas',
		iconName: 'fa-globe-americas',
	},
	{
		name: 'asia',
		iconName: 'fa-globe-asia',
	},
	{
		name: 'africa',
		iconName: 'fa-globe-africa',
	},
	{
		name: 'europe',
		iconName: 'fa-globe-europe',
	},
	{
		name: 'oceania',
		iconName: 'gi-earth-asia-oceania',
	},
]);
</script>

<template>
	<div class="search-bar">
		<InputSearch />
		<div class="filter-tags">
			<RegionCheckbox
				v-for="region in regions"
				:key="region.name"
				:name="region.name"
				:iconName="region.iconName"
			/>
		</div>
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
	grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
}

.search-bar {
	margin-top: 2rem;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
}

.filter-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
</style>
