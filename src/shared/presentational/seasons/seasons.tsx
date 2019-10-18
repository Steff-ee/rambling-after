import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'
import { ColorsContext, IColorsContext, IUseColorProps, useColors } from '../hooks/useColors'
import { getSeason, Seasons } from './seasonsHelpers'

const defaultSpringColors: IUseColorProps = {
	defaultPrimary: '#BCBC66',
	defaultSecondHueDistance: 15,
	defaultThirdHueDistance: 15,
}

const defaultSummerColors: IUseColorProps = {
	defaultPrimary: '#66BC66',
	defaultSecondHueDistance: 15,
	defaultThirdHueDistance: 15,
}

const defaultAutumnColors: IUseColorProps = {
	defaultPrimary: Colors.WarmSand,
	defaultSecondHueDistance: 330,
	defaultThirdHueDistance: 20,
}

const defaultWinterColors: IUseColorProps = {
	defaultPrimary: Colors.SeaFoam,
	defaultSecondHueDistance: 15,
	defaultThirdHueDistance: 15,
}

interface ISeasonsContext {
	season: Seasons
	setSeason: (season: Seasons) => void
}

export const SeasonsContext = React.createContext<ISeasonsContext>({
	season: Seasons.Autumn,
	setSeason: (season: Seasons): void => {
		return
	},
})

export const SeasonsProvider: React.FunctionComponent = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	const { children } = props
	const [season, setSeason] = useState<Seasons>(getSeason(new Date()))

	/* Colors */
	let colors: IColorsContext
	const springColors = useColors(defaultSpringColors)
	const summerColors = useColors(defaultSummerColors)
	const autumnColors = useColors(defaultAutumnColors)
	const winterColors = useColors(defaultWinterColors)

	switch (season) {
		case Seasons.Spring:
			colors = springColors
			break
		case Seasons.Summer:
			colors = summerColors
			break
		case Seasons.Autumn:
			colors = autumnColors
			break
		case Seasons.Winter:
		default:
			colors = winterColors
	}

	return (
		<SeasonsContext.Provider value={{ season, setSeason }}>
			<ColorsContext.Provider value={colors}>{children}</ColorsContext.Provider>
		</SeasonsContext.Provider>
	)
}
