import { createFetch } from '@vueuse/core';

export const useFetch = createFetch({
	baseUrl: 'https://restcountries.com/v3.1',
	// options: {
	// 	async beforeFetch({ options }) {
	// 		const myToken = await getMyToken();
	// 		options.headers.Authorization = `Bearer ${myToken}`;

	// 		return { options };
	// 	},
	// },
	fetchOptions: {
		mode: 'cors',
	},
});

// export function useFetch(path: string) {
// 	const { isFetching, error, data } = useConfigFetch(path);

// 	return { isFetching, error, data };
// }
