import Color from 'color-js'
import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'

interface IColors {
	primary: string
	/* All colors other than primary are derived from the primary and the hue distances */
	secondary: string
	accent: string
}

export interface IColorsContext extends IColors {
	secondHueDistance: number
	thirdHueDistance: number
	setPrimary: (primary: string) => void
	setSecondHueDistance: (distance: number) => void
	setThirdHueDistance: (distance: number) => void
}

const deriveColors = (
	primary: string,
	secondHueDistance: number,
	thirdHueDistance: number
): IColors => {
	const scheme = Color(primary).schemeFromDegrees([secondHueDistance, thirdHueDistance])

	return { primary, secondary: scheme[0].toCSS(), accent: scheme[1].toCSS() }
}

export const ColorsContext = React.createContext<IColorsContext>({
	primary: Colors.Black,
	secondary: Colors.Black,
	accent: Colors.Black,
	secondHueDistance: 0,
	thirdHueDistance: 0,
	setPrimary: (primary: string): void => {
		return
	},
	setSecondHueDistance: (distance: number): void => {
		return
	},
	setThirdHueDistance: (distance: number): void => {
		return
	},
})

export const useColors = (
	defaultPrimary: string,
	defaultSecondHueDistance: number,
	defaultThirdHueDistance: number
): IColorsContext => {
	const [primary, setPrimary] = useState<string>(defaultPrimary)
	const [secondHueDistance, setSecondHueDistance] = useState<number>(defaultSecondHueDistance)
	const [thirdHueDistance, setThirdHueDistance] = useState<number>(defaultThirdHueDistance)

	const colors = deriveColors(primary, secondHueDistance, thirdHueDistance)

	return {
		...colors,
		setPrimary,
		secondHueDistance,
		thirdHueDistance,
		setSecondHueDistance,
		setThirdHueDistance,
	}
}
