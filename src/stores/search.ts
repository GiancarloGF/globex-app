import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { refDebounced } from '@vueuse/core';

const useSearchStore = defineStore('search', () => {
	// state
	const inputValue = ref<string>('');
	const inputValueDebounced = refDebounced(inputValue, 500);
	const filters = ref<string[]>([]);
	const region = ref<string>('');

	const path = computed<string>(() => {
		if (inputValueDebounced.value) return `/name/${inputValueDebounced.value}`;
		else if (region.value) return `/region/${region.value}`;
		else return '/all';
	});

	return { inputValue, inputValueDebounced, filters, path, region };
});

export default useSearchStore;
