import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'
import { BackgroundsContext, IBackgroundsContext, useBackgrounds } from '../hooks/useBackgrounds'
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

const springBackgrounds = ['https://w.wallhaven.cc/full/8x/wallhaven-8x3w8k.jpg']
const summerBackgrounds = ['https://w.wallhaven.cc/full/r2/wallhaven-r2ed5w.png']
const autumnBackgrounds = ['https://w.wallhaven.cc/full/g8/wallhaven-g8171e.png']
const winterBackgrounds = [
	'https://w.wallhaven.cc/full/4l/wallhaven-4llmp2.jpg',
	'https://w.wallhaven.cc/full/4x/wallhaven-4xrl5l.jpg',
	'https://w.wallhaven.cc/full/nk/wallhaven-nkdqp7.jpg',
]

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

	/* Backgrounds */
	let backgrounds: IBackgroundsContext
	const springBackgroundsContext = useBackgrounds(springBackgrounds)
	const summerBackgroundsContext = useBackgrounds(summerBackgrounds)
	const autumnBackgroundsContext = useBackgrounds(autumnBackgrounds)
	const winterBackgroundsContext = useBackgrounds(winterBackgrounds)

	switch (season) {
		case Seasons.Spring:
			colors = springColors
			backgrounds = springBackgroundsContext
			break
		case Seasons.Summer:
			colors = summerColors
			backgrounds = summerBackgroundsContext
			break
		case Seasons.Autumn:
			colors = autumnColors
			backgrounds = autumnBackgroundsContext
			break
		case Seasons.Winter:
		default:
			colors = winterColors
			backgrounds = winterBackgroundsContext
	}

	return (
		<SeasonsContext.Provider value={{ season, setSeason }}>
			<ColorsContext.Provider value={colors}>
				<BackgroundsContext.Provider value={backgrounds}>
					{children}
				</BackgroundsContext.Provider>
			</ColorsContext.Provider>
		</SeasonsContext.Provider>
	)
}
