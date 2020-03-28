import sarrailhAutumnImg0 from 'Assets/images/sarrailh_autumn_0.png'
import sarrailhAutumnImg1 from 'Assets/images/sarrailh_autumn_1.png'
import React, { PropsWithChildren, useState } from 'react'
import { IBackground } from '../../shared/presentational/hooks/useBackgrounds'
import { Seasons } from './seasonsHelpers'

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
export const springBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8yr1j.jpg', ...Liu },
	{ src: 'https://w.wallhaven.cc/full/qd/wallhaven-qdpx2r.jpg', ...Rapt },
	{ src: 'https://w.wallhaven.cc/full/md/wallhaven-mdo9o8.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8j3g3.jpg', ...JoeyJazz },
	{ src: 'https://w.wallhaven.cc/full/4o/wallhaven-4opl79.jpg', ...Gercken },
]
export const summerBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/96/wallhaven-96km7k.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g817ve.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/r2/wallhaven-r2ed5w.png', ...Sarrailh },
]
export const autumnBackgrounds: IBackground[] = [
	{ src: sarrailhAutumnImg0, ...Sarrailh },
	{ src: sarrailhAutumnImg1, ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/76/wallhaven-76pv3v.jpg', ...Grivet },
	{ src: 'https://w.wallhaven.cc/full/4y/wallhaven-4y8p9l.jpg', ...Gercken },
]
export const winterBackgrounds: IBackground[] = [
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g8ml1q.jpg', ...Riebe },
	{ src: 'https://i.imgur.com/41J50g7.jpg', ...Fadeev },
	{ src: 'https://w.wallhaven.cc/full/lq/wallhaven-lqdrdy.jpg', ...alartstudio },
]

interface ISeasonsContext {
	season: Seasons
	setSeason: (season: Seasons) => void
}

export const SeasonsContext = React.createContext<ISeasonsContext>({
	season: Seasons.None,
	setSeason: (season: Seasons): void => {
		return
	},
})

export const SeasonsProvider: React.FunctionComponent<PropsWithChildren<{}>> = (
	props: PropsWithChildren<{}>
): JSX.Element => {
	const { children } = props
	const [season, setSeason] = useState<Seasons>(Seasons.None)

	return (
		<SeasonsContext.Provider value={{ season, setSeason }}>{children}</SeasonsContext.Provider>
	)
}
