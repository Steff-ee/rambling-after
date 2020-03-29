import sarrailhAutumnImg1 from 'Assets/images/sarrailh_autumn_1.png'

export interface IPicture {
	src: string
	artistName: string
	artistLink: string
}

export const Sarrailh = {
	artistName: 'Sylvain Sarrailh',
	artistLink: 'https://tohad.artstation.com/',
}
export const Gercken = {
	artistName: 'Graham Gercken',
	artistLink: 'https://graham-gercken.pixels.com/',
}
export const Riebe = {
	artistName: 'Paul Riebe',
	artistLink: 'https://www.artstation.com/paulriebe',
}
export const Grivet = {
	artistName: 'Bastien Grivet',
	artistLink: 'https://www.artstation.com/grivetart',
}
export const JoeyJazz = {
	artistName: 'JoeyJazz',
	artistLink: 'https://www.deviantart.com/joeyjazz',
}
export const Mertun = {
	artistName: 'ömer tunç',
	artistLink: 'https://www.artstation.com/mertun',
}
export const Rapt = { artistName: 'Rapt', artistLink: 'https://raptjp.tumblr.com/' }
export const Liu = { artistName: 'Chao Liu', artistLink: 'https://www.artstation.com/chaoliu' }
export const Fadeev = { artistName: 'Anton Fadeev', artistLink: 'https://www.artstation.com/shant' }
export const Schilde = {
	artistName: 'Maxime Schilde',
	artistLink: 'https://www.artstation.com/maximeschilde',
}

// "Royalty Free"
export const wallpaperFlare = {
	artistName: 'Wallpaper Flare',
	artistLink: 'https://www.wallpaperflare.com/',
}

// to find the original link, grab XXXX from "wallhaven-XXXX.jpg" and insert into https://wallhaven.cc/w/XXXX
export const springBackgrounds: IPicture[] = [
	{ src: 'https://w.wallhaven.cc/full/qd/wallhaven-qdpx2r.jpg', ...Rapt },
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8yr1j.jpg', ...Liu },
	{ src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8j3g3.jpg', ...JoeyJazz },
	{ src: 'https://w.wallhaven.cc/full/4o/wallhaven-4opl79.jpg', ...Gercken },
]
export const summerBackgrounds: IPicture[] = [
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g817ve.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/r2/wallhaven-r2ed5w.png', ...Sarrailh },
	{ src: 'https://w.wallhaven.cc/full/96/wallhaven-96km7k.png', ...Sarrailh },
	{
		src:
			'https://cdna.artstation.com/p/assets/images/images/018/561/748/large/sylvain-sarrailh-melodiousbreeze02.jpg',
		...Sarrailh,
	},
]
export const autumnBackgrounds: IPicture[] = [
	{ src: sarrailhAutumnImg1, ...Sarrailh },
	{
		src:
			'https://cdnb.artstation.com/p/assets/images/images/013/185/961/large/maxime-schilde-autumn-winds-04.jpg',
		...Schilde,
	},
	{ src: 'https://w.wallhaven.cc/full/76/wallhaven-76pv3v.jpg', ...Grivet },
	{ src: 'https://w.wallhaven.cc/full/4y/wallhaven-4y8p9l.jpg', ...Gercken },
]
export const winterBackgrounds: IPicture[] = [
	{ src: 'https://w.wallhaven.cc/full/g8/wallhaven-g8ml1q.jpg', ...Riebe },
	{ src: 'https://i.imgur.com/41J50g7.jpg', ...Fadeev },
	{ src: 'https://w.wallhaven.cc/full/96/wallhaven-96zxjw.jpg', ...Mertun },
	{ src: 'https://w.wallhaven.cc/full/76/wallhaven-7671ey.png', ...wallpaperFlare },
]
