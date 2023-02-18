export function toLower(string: string): string {
	return string.toLowerCase();
}

export function toUpper(string: string): string {
	return string.toUpperCase();
}

export function toFirstUpper(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
export function formatNumberWithSuffix(number: number): string {
	const options = {
		minimumFractionDigits: 0,
		maximumFractionDigits: 1,
	};
	if (number >= 1000000)
		return (number / 1000000).toLocaleString('en-US', options) + 'M';
	else if (number >= 1000)
		return (number / 1000).toLocaleString('en-US', options) + 'K';
	else return number.toString();
}

export function formatNumberToKM(number: number): string {
	if (number >= 1000) return (number / 1000).toFixed(2) + ' ' + 'KM';
	else return number.toString();
}
