import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', () => {
	// state
	const value = ref<string>('');
	const filters = ref<string[]>([]);
	// computed
	const filtersString = computed<string>(() => filters.value.join(', '));
	// actions

	return { value, filters, filtersString };
});
