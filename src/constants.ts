interface IRegion {
	name: string;
	iconName: string;
}
export const REGIONS: IRegion[] = [
	{
		name: 'americas',
		iconName: 'fa-globe-americas',
	},
	{
		name: 'asia',
		iconName: 'fa-globe-asia',
	},
	{
		name: 'africa',
		iconName: 'fa-globe-africa',
	},
	{
		name: 'europe',
		iconName: 'fa-globe-europe',
	},
	{
		name: 'oceania',
		iconName: 'gi-earth-asia-oceania',
	},
];

export const COUNTRIES_BASE_URL = 'https://restcountries.com/v3.1';
