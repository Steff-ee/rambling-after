import React, { useState } from 'react'

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
	Analogous,
	Complementary,
	Triadic,
	Compound,
}

const deriveAnalagousColors = (primary: string): IColors => {
	return { primary, secondary: '', accent: '' }
}

const deriveComplementaryColors = (primary: string): IColors => {
	return { primary, secondary: '', accent: '' }
}

const deriveTriadicColors = (primary: string): IColors => {
	return { primary, secondary: '', accent: '' }
}

const deriveCompoundColors = (primary: string): IColors => {
	return { primary, secondary: '', accent: '' }
}

const deriveColors = (primary: string, ratio: ColorRatios): IColors => {
	switch (ratio) {
		case ColorRatios.Analogous:
			return deriveAnalagousColors(primary)

		case ColorRatios.Complementary:
			return deriveComplementaryColors(primary)

		case ColorRatios.Triadic:
			return deriveTriadicColors(primary)

		case ColorRatios.Compound:
			return deriveCompoundColors(primary)
	}
}

export const ColorsContext = React.createContext<IColorsContext | undefined>(undefined)

export const useColors = (defaultPrimary: string, defaultRatio: ColorRatios): IColorsContext => {
	const [primary, setPrimary] = useState<string>(defaultPrimary)
	const [ratio, setRatio] = useState<ColorRatios>(defaultRatio)

	const colors = deriveColors(primary, ratio)

	return { ...colors, ratio, setPrimary, setRatio }
}
