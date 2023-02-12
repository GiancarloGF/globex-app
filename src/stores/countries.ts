import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import countriesData from '@/assets/data.json';

export const useCountriesStore = defineStore('countries', () => {
	// state
	const countries = ref<any[]>(countriesData.slice(0, 20));
	const countrySelected = ref<any>(null);
	// computed
	// actions
	function selectCountry(country: any) {
		countrySelected.value = country;
	}
	function unselectCountry() {
		countrySelected.value = null;
	}

	return { countries, countrySelected, selectCountry, unselectCountry };
});
