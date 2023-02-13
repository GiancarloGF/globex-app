import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { refDebounced } from '@vueuse/core';
export const useSearchStore = defineStore('search', () => {
	// state
	const inputValue = ref<string>('');
	const inputValueDebounced = refDebounced(inputValue, 500);
	const filters = ref<string[]>([]);
	// computed
	const filtersString = computed<string>(() => filters.value.join(', '));
	// actions

	return { inputValue, inputValueDebounced, filters, filtersString };
});
