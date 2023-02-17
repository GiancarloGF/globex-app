export function toLower(string: string): string {
	return string.toLowerCase();
}

export function toUpper(string: string): string {
	return string.toUpperCase();
}

export function toFirstUpper(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
