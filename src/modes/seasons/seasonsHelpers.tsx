export enum Seasons {
	Winter,
	Spring,
	Summer,
	Autumn,
	None,
}

const enum Month {
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

/**
 * Based on my own subjective experience of Washington weather
 * The cutoff points are 3/10, 5/20, 9/10, 11/20
 */
export const getSeason = (date: Date): Seasons => {
	const day = date.getDate()
	const month = date.getMonth()
	const earlyDayBoundary = 10
	const lateDayBoundary = 20

	if (month === Month.March) {
		if (day >= earlyDayBoundary) {
			return Seasons.Spring
		}
	} else if (month < Month.May) {
		return Seasons.Spring
	} else if (month === Month.May) {
		if (day < lateDayBoundary) {
			return Seasons.Spring
		}
	} else if (month < Month.September) {
		return Seasons.Summer
	} else if (month === Month.September) {
		if (day <= earlyDayBoundary) {
			return Seasons.Summer
		}
	} else if (month < Month.November) {
		return Seasons.Autumn
	} else if (month === Month.November) {
		if (day < lateDayBoundary) {
			return Seasons.Autumn
		}
	}

	return Seasons.Winter
}

// precondition: the Seasons enum goes in order of Winter to Autumn
export const getNextSeason = (seasonsAhead: number = 1): Seasons => {
	const currentSeason = getSeason(new Date())
	const nextSeason = (currentSeason + seasonsAhead) % 4
	if (nextSeason === 0) {
		return Seasons.Winter
	} else if (nextSeason === 1) {
		return Seasons.Spring
	} else if (nextSeason === 2) {
		return Seasons.Summer
	}

	return Seasons.Autumn
}
