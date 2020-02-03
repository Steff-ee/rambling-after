export const capitalize = (str: string): string => {
	if (str.length < 1) {
		return str
	}

	return str[0].toUpperCase() + str.substr(1)
}
