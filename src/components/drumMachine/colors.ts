export interface IColor {
	R: number
	G: number
	B: number
	T: number
}

export function getRandomColor(): IColor {
	const degree = 52

	return {
		R: Math.floor(Math.random() * degree) * 5,
		G: Math.floor(Math.random() * degree) * 5,
		B: Math.floor(Math.random() * degree) * 5,
		T: 1,
	}
}

export function getColorString(color: IColor): string {
	const { R, G, B, T } = color

	return `rgb(${R}, ${G}, ${B}, ${T})`
}
