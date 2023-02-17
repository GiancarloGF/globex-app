<script setup lang="ts">
import { REGIONS } from '@/constants';
import CheckboxRegion from './CheckboxRegion.vue';
import DropdownFilter from './DropdownFilter.vue';
import InputSearch from './InputSearch.vue';
</script>
<template>
	<div class="search-bar">
		<InputSearch />
		<div class="filter-tags">
			<CheckboxRegion
				v-for="region in REGIONS"
				:key="region.name"
				:name="region.name"
				:iconName="region.iconName"
			/>
		</div>
		<div class="filter-tags-mobile">
			<DropdownFilter />
		</div>
	</div>
</template>

<style scoped>
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

.filter-tags-mobile {
	display: none;
	width: 100%;
}

@media (max-width: 425px) {
	.search-bar {
		gap: 4rem;
	}

	.filter-tags {
		display: none;
	}
	.filter-tags-mobile {
		display: block;
	}
}
</style>
