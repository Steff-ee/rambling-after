export interface IColor {
	R: number
	G: number
	B: number
	A: number
}

/**
 * Simple algorithm to get a variety of random, bright colors
 */
export function getRandomInstrumentColor(): IColor {
	const intensities = [0, 0, 150, 255, 255]

	let randomIndex = Math.floor(Math.random() * intensities.length)
	const R = intensities.splice(randomIndex, 1)[0]
	randomIndex = Math.floor(Math.random() * intensities.length)
	const G = intensities.splice(randomIndex, 1)[0]
	randomIndex = Math.floor(Math.random() * intensities.length)
	let B = 255
	if (R !== 255 || G !== 255) {
		B = intensities.splice(randomIndex, 1)[0]
	}

	return {
		R,
		G,
		B,
		A: 1,
	}
}

export function getColorString(color: IColor): string {
	const { R, G, B, A } = color

	return `rgb(${R}, ${G}, ${B}, ${A})`
}
