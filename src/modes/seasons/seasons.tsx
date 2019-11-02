import sarrailhAutumnImg0 from 'Assets/images/sarrailh_autumn_0.png'
import sarrailhAutumnImg1 from 'Assets/images/sarrailh_autumn_1.png'
import React, { useState } from 'react'
import { Colors } from '../../shared/helpers/constants'
import {
	BackgroundsContext,
	IBackground,
	IBackgroundsContext,
	useBackgrounds,
} from '../../shared/presentational/hooks/useBackgrounds'
import {
	ColorsContext,
	IColorsContext,
	IUseColorProps,
	useColors,
} from '../../shared/presentational/hooks/useColors'
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
const Riebe = { artistName: 'Paul Riebe', artistLink: 'https://www.artstation.com/paulriebe' }
const Grivet = { artistName: 'Bastien Grivet', artistLink: 'https://www.artstation.com/grivetart' }
const JoeyJazz = { artistName: 'JoeyJazz', artistLink: 'https://www.deviantart.com/joeyjazz' }
const Rapt = { artistName: 'Rapt', artistLink: 'https://raptjp.tumblr.com/' }
const Liu = { artistName: 'Chao Liu', artistLink: 'https://www.artstation.com/chaoliu' }
const Fadeev = { artistName: 'Anton Fadeev', artistLink: 'https://www.artstation.com/shant' }
const alartstudio = {
	artistName: 'alartstudio',
	artistLink: 'https://www.deviantart.com/alartstudio',
}

// to find the original link, grab XXXX from "wallhaven-XXXX.jpg" and insert into https://wallhaven.cc/w/XXXX
const springBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8yr1j.jpg', ...Liu },
	{ src: 'https://w.wallhaven.cc/full/qd/wallhaven-qdpx2r.jpg', ...Rapt },
	{ src: 'https://w.wallhaven.cc/full/md/wallhaven-mdo9o8.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8j3g3.jpg', ...JoeyJazz },
	{ src: 'https://w.wallhaven.cc/full/4o/wallhaven-4opl79.jpg', ...Gercken },
]
const summerBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/96/wallhaven-96km7k.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g817ve.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/r2/wallhaven-r2ed5w.png', ...Sarrailh },
]
const autumnBackgrounds: IBackground[] = [
	{ src: sarrailhAutumnImg0, ...Sarrailh },
	{ src: sarrailhAutumnImg1, ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/76/wallhaven-76pv3v.jpg', ...Grivet },
	{ src: 'https://w.wallhaven.cc/full/4y/wallhaven-4y8p9l.jpg', ...Gercken },
]
const winterBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g8ml1q.jpg', ...Riebe },
	{ src: 'https://i.imgur.com/41J50g7.jpg', ...Fadeev },
	{ src: 'https://w.wallhaven.cc/full/lq/wallhaven-lqdrdy.jpg', ...alartstudio },
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
