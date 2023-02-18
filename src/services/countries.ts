import { COUNTRIES_BASE_URL } from '@/constants';
import type { ICountry } from '@/types/country';

export const getCountries = async (path: string): Promise<ICountry[]> => {
	const response = await fetch(`${COUNTRIES_BASE_URL}${path}`);
	return response.json();
};

export const getCountry = async (id: string): Promise<ICountry[]> => {
	const response = await fetch(`${COUNTRIES_BASE_URL}/alpha/${id}`);
	return response.json();
};
