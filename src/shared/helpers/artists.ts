import booksImg from 'Assets/images/books.jpg'
import bookshelfImg from 'Assets/images/bookshelf_lightbulbs.jpg'
import cartographyImg from 'Assets/images/cartography.jpg'
import lightbulbsImg from 'Assets/images/lightbulbs.jpg'

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
export const Sankowski = {
	artistName: 'Dariusz Sankowski',
	artistLink: 'https://unsplash.com/@dariuszsankowski',
}
export const Coffman = {
	artistName: 'Drew Coffman',
	artistLink: 'https://unsplash.com/@drewcoffman',
}
export const Shea = {
	artistName: 'Kari Shea',
	artistLink: 'https://unsplash.com/@karishea',
}
export const Janko = {
	artistName: 'Janko Ferlič',
	artistLink: 'https://unsplash.com/@itfeelslikefilm',
}

// "Royalty Free"
export const wallpaperFlare = {
	artistName: 'Wallpaper Flare',
	artistLink: 'https://www.wallpaperflare.com/',
}

export const classicBackgrounds = {
	home: { src: cartographyImg, ...Sankowski },
	stories: { src: booksImg, ...Coffman },
	games: { src: lightbulbsImg, ...Shea },
	conjecture: { src: bookshelfImg, ...Janko },
}

// to find the original link, grab XXXX from "wallhaven-XXXX.jpg" and insert into https://wallhaven.cc/w/XXXX
export const springBackgrounds = {
	home: { src: 'https://w.wallhaven.cc/full/qd/wallhaven-qdpx2r.jpg', ...Rapt },
	stories: { src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8yr1j.jpg', ...Liu },
	games: { src: 'https://w.wallhaven.cc/full/p8/wallhaven-p8j3g3.jpg', ...JoeyJazz },
	conjecture: { src: 'https://w.wallhaven.cc/full/4o/wallhaven-4opl79.jpg', ...Gercken },
}

export const summerBackgrounds = {
	home: { src: 'https://w.wallhaven.cc/full/g8/wallhaven-g817ve.png', ...Sarrailh },
	stories: { src: 'https://w.wallhaven.cc/full/r2/wallhaven-r2ed5w.png', ...Sarrailh },
	games: { src: 'https://w.wallhaven.cc/full/96/wallhaven-96km7k.png', ...Sarrailh },
	conjecture: {
		src:
			'https://cdna.artstation.com/p/assets/images/images/018/561/748/large/sylvain-sarrailh-melodiousbreeze02.jpg',
		...Sarrailh,
	},
}

export const autumnBackgrounds = {
	home: {
		src:
			'https://cdna.artstation.com/p/assets/images/images/007/838/882/large/sylvain-sarrailh-wandering.jpg',
		...Sarrailh,
	},
	stories: {
		src:
			'https://cdnb.artstation.com/p/assets/images/images/013/185/961/large/maxime-schilde-autumn-winds-04.jpg',
		...Schilde,
	},
	games: { src: 'https://w.wallhaven.cc/full/76/wallhaven-76pv3v.jpg', ...Grivet },
	conjecture: { src: 'https://w.wallhaven.cc/full/4y/wallhaven-4y8p9l.jpg', ...Gercken },
}

export const winterBackgrounds = {
	home: { src: 'https://w.wallhaven.cc/full/g8/wallhaven-g8ml1q.jpg', ...Riebe },
	stories: { src: 'https://i.imgur.com/41J50g7.jpg', ...Fadeev },
	games: { src: 'https://w.wallhaven.cc/full/96/wallhaven-96zxjw.jpg', ...Mertun },
	conjecture: { src: 'https://w.wallhaven.cc/full/76/wallhaven-7671ey.png', ...wallpaperFlare },
}
