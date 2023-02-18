// import { useSearchStore } from './search';
import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import countriesData from '@/assets/data.json';
import type { ICountry } from '@/types/country';
import { toLower } from '@/utils';

export const useCountriesStore = defineStore('countries', () => {
	// const searchStore = useSearchStore();
	// const { filters, inputValueDebounced } = storeToRefs(searchStore);
	// state
	// const countries = ref<ICountry[]>(countriesData as ICountry[]);
	const country = ref<ICountry | null>(null);
	// computed
	// const countriesByFilters = computed(() => {
	// 	if (filters.value.length > 0)
	// 		return countries.value.filter((i) =>
	// 			filters.value.includes(toLower(i.region))
	// 		);
	// 	return countries.value;
	// });
	// const countriesByText = computed(() => {
	// 	if (inputValueDebounced.value !== '')
	// 		return countriesByFilters.value.filter((i) =>
	// 			toLower(i.name).includes(toLower(inputValueDebounced.value))
	// 		);
	// 	return countriesByFilters.value;
	// });
	// actions
	function selectCountry(country: any) {
		country.value = country;
	}
	function unselectCountry() {
		country.value = null;
	}

	return {
		// countries,
		// countriesSearched: countriesByText,
		country,
		selectCountry,
		unselectCountry,
	};
});
