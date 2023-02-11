export type IRegionNames =
	| 'americas'
	| 'europe'
	| 'oceania'
	| 'asia'
	| 'africa';
export interface IRegion {
	name: IRegionNames;
	iconName: string;
}
