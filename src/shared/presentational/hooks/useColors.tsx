import Color from 'color-js'
import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'

interface IColors {
	primary: string
	/* All colors other than primary are derived from the primary and the hue distance */
	secondary: string
	accent: string
}

export interface IColorsContext extends IColors {
	hueDistance: number
	setPrimary: (primary: string) => void
	setHueDistance: (distance: number) => void
}

const deriveColors = (primary: string, hueDistance: number): IColors => {
	const scheme = Color(primary).schemeFromDegrees([hueDistance, hueDistance * 2])

	return { primary, secondary: scheme[0].toCSS(), accent: scheme[1].toCSS() }
}

export const ColorsContext = React.createContext<IColorsContext>({
	primary: Colors.Black,
	secondary: Colors.Black,
	accent: Colors.Black,
	hueDistance: 15,
	setPrimary: (primary: string): void => {
		return
	},
	setHueDistance: (distance: number): void => {
		return
	},
})

export const useColors = (defaultPrimary: string, defaultHueDistance: number): IColorsContext => {
	const [primary, setPrimary] = useState<string>(defaultPrimary)
	const [hueDistance, setHueDistance] = useState<number>(defaultHueDistance)

	const colors = deriveColors(primary, hueDistance)

	return { ...colors, hueDistance, setPrimary, setHueDistance }
}
