import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'
import {
	BackgroundsContext,
	IBackground,
	IBackgroundsContext,
	useBackgrounds,
} from '../hooks/useBackgrounds'
import { ColorsContext, IColorsContext, IUseColorProps, useColors } from '../hooks/useColors'
import { getSeason, Seasons } from './seasonsHelpers'

const defaultSpringColors: IUseColorProps = {
	defaultPrimary: Colors.Salmon,
	defaultSecondHueDistance: 295,
	defaultThirdHueDistance: 170,
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

const Sarrailh = { artistName: 'Sylvain Sarrailh', artistLink: 'https://tohad.artstation.com/' }
const Gercken = { artistName: 'Graham Gercken', artistLink: 'https://graham-gercken.pixels.com/' }

// to find the original link, grab XXXX from "wallhaven-XXXX.jpg" and insert into https://wallhaven.cc/w/XXXX
const springBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/md/wallhaven-mdo9o8.png', ...Sarrailh },
	{
		src: 'https://w.wallhaven.cc/full/49/wallhaven-49p298.jpg',
		artistName: 'TODO',
		artistLink: '',
	},
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8j3g3.jpg', artistName: '', artistLink: '' },
	{ src: 'https://w.wallhaven.cc/full/4o/wallhaven-4opl79.jpg', ...Gercken },
]
const summerBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/96/wallhaven-96km7k.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g817ve.png', ...Sarrailh },
	{
		src: 'https://w.wallhaven.cc/full/r2/wallhaven-r2ed5w.png',
		artistName: 'TODO',
		artistLink: '',
	},
	{
		src: 'https://w.wallhaven.cc/full/qd/wallhaven-qdy527.png',
		artistName: 'TODO',
		artistLink: '',
	},
]
const autumnBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g8171e.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/wy/wallhaven-wy3qwx.png', ...Sarrailh },
	{
		src: 'https://w.wallhaven.cc/full/76/wallhaven-76pv3v.jpg',
		artistName: 'TODO',
		artistLink: '',
	},
	{ src: 'https://w.wallhaven.cc/full/4y/wallhaven-4y8p9l.jpg', ...Gercken },
]
const winterBackgrounds: IBackground[] = [
	{
		src: 'https://w.wallhaven.cc/full/g8/wallhaven-g8ml1q.jpg',
		artistName: 'TODO',
		artistLink: '',
	},
	{
		src: 'https://w.wallhaven.cc/full/4y/wallhaven-4yyrwd.jpg',
		artistName: 'TODO',
		artistLink: '',
	},
	{
		src: 'https://w.wallhaven.cc/full/lq/wallhaven-lqdrdy.jpg',
		artistName: 'TODO',
		artistLink: '',
	},
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
