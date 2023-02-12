import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import countriesData from '@/assets/data.json';
import type { ICountry } from '@/types';

export const useCountriesStore = defineStore('countries', () => {
	// state
	const countries = ref<ICountry[]>(countriesData as ICountry[]);
	const country = ref<ICountry | null>(null);
	// computed
	// actions
	function selectCountry(country: any) {
		country.value = country;
	}
	function unselectCountry() {
		country.value = null;
	}

	return { countries, country, selectCountry, unselectCountry };
});
