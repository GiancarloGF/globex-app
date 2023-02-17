import { COUNTRIES_BASE_URL } from '@/constants';
import type { ICountry } from '@/types/country';

export const getCountries = async (): Promise<ICountry[]> => {
	const response = await fetch(`${COUNTRIES_BASE_URL}/all`);
	return response.json();
};

export const getCountry = async (id: string): Promise<ICountry[]> => {
	const response = await fetch(`${COUNTRIES_BASE_URL}/name/${id}?fullText=true`);
	return response.json();
};
