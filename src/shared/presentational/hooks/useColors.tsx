import Color from 'color-js'
import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'

interface IColors {
	primary: string
	/* All colors other than primary are derived from the primary and the ratio */
	secondary: string
	accent: string
}

export interface IColorsContext extends IColors {
	ratio: ColorRatios
	setPrimary: (primary: string) => void
	setRatio: (ratio: ColorRatios) => void
}

export enum ColorRatios {
	SplitComplementary,
	SplitComplementaryCW,
	SplitComplementaryCCW,
	Triadic,
}

const deriveSplitComplementaryColors = (primary: string): IColors => {
	const scheme = Color(primary).splitComplementaryScheme()

	return { primary, secondary: scheme[1].toCSS(), accent: scheme[2].toCSS() }
}

const deriveSplitComplementaryCWColors = (primary: string): IColors => {
	const scheme = Color(primary).splitComplementaryCWScheme()

	return { primary, secondary: scheme[1].toCSS(), accent: scheme[2].toCSS() }
}

const deriveSplitComplementaryCCWColors = (primary: string): IColors => {
	const scheme = Color(primary).splitComplementaryCCWScheme()

	return { primary, secondary: scheme[1].toCSS(), accent: scheme[2].toCSS() }
}

const deriveTriadicColors = (primary: string): IColors => {
	const scheme = Color(primary).triadicScheme()

	return { primary, secondary: scheme[1].toCSS(), accent: scheme[2].toCSS() }
}

const deriveColors = (primary: string, ratio: ColorRatios): IColors => {
	switch (ratio) {
		case ColorRatios.SplitComplementary:
			return deriveSplitComplementaryColors(primary)

		case ColorRatios.SplitComplementaryCW:
			return deriveSplitComplementaryCWColors(primary)
		case ColorRatios.SplitComplementaryCCW:
			return deriveSplitComplementaryCCWColors(primary)

		case ColorRatios.Triadic:
			return deriveTriadicColors(primary)
	}
}

export const ColorsContext = React.createContext<IColorsContext>({
	primary: Colors.Black,
	secondary: Colors.Black,
	accent: Colors.Black,
	ratio: ColorRatios.SplitComplementary,
	setPrimary: (primary: string): void => {
		return
	},
	setRatio: (ratio: ColorRatios): void => {
		return
	},
})

export const useColors = (defaultPrimary: string, defaultRatio: ColorRatios): IColorsContext => {
	const [primary, setPrimary] = useState<string>(defaultPrimary)
	const [ratio, setRatio] = useState<ColorRatios>(defaultRatio)

	const colors = deriveColors(primary, ratio)

	return { ...colors, ratio, setPrimary, setRatio }
}
