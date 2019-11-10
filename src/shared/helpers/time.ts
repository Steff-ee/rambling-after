const { getSunrise, getSunset } = require('sunrise-sunset-js')

export const latitude = 47.6696481
export const longitude = -122.1995027

export const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}

export const minutesOfDay = (date: Date): number => {
	return date.getHours() * 60 + date.getSeconds()
}

// returns the number of minutes until the sun sets, or zero if it's already happened
export const getMinutesToNight = (): number => {
	const currentTime = minutesOfDay(new Date())
	const sunsetTime = minutesOfDay(getSunset(latitude, longitude))

	const distance = sunsetTime - currentTime
	if (distance < 0) {
		return 0
	}

	return distance
}

// returns the number of minutes since sunrise, or zero if hasn't happened yet
export const getMinutesFromNight = (): number => {
	const currentTime = minutesOfDay(new Date())
	const sunriseTime = minutesOfDay(getSunrise(latitude, longitude))

	const distance = currentTime - sunriseTime
	if (distance < 0) {
		return 0
	}

	return distance
}

export const getNightDistance = (): number => {
	return Math.min(getMinutesToNight(), getMinutesFromNight())
}

export enum CircadianMood {
	Day,
	Night,
	Twilight,
}

export const getCircadianMood = (): CircadianMood => {
	const transitionPeriod = 30
	const nightDistance = getNightDistance()
	if (nightDistance <= 0) {
		return CircadianMood.Night
	} else if (nightDistance <= transitionPeriod) {
		return CircadianMood.Twilight
	}

	return CircadianMood.Day
}
