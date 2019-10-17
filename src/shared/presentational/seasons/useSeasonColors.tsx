import { useContext } from 'react'
import { Colors } from '../../helpers/constants'
import { IColorsContext, IUseColorProps, useColors } from '../hooks/useColors'
import { Seasons, SeasonsContext } from './seasons'

export const useSeasonColors = (): IColorsContext => {
	const season = useContext(SeasonsContext)

	let colorProps: IUseColorProps
	if (season === Seasons.Autumn) {
		colorProps = {
			defaultPrimary: Colors.WarmSand,
			defaultSecondHueDistance: 330,
			defaultThirdHueDistance: 20,
		}
	} else if (season === Seasons.Winter) {
		colorProps = {
			defaultPrimary: Colors.SeaFoam,
			defaultSecondHueDistance: 15,
			defaultThirdHueDistance: 15,
		}
	} else if (season === Seasons.Spring) {
		colorProps = {
			defaultPrimary: '#BCBC66',
			defaultSecondHueDistance: 15,
			defaultThirdHueDistance: 15,
		}
	} else {
		colorProps = {
			defaultPrimary: '#66BC66',
			defaultSecondHueDistance: 15,
			defaultThirdHueDistance: 15,
		}
	}

	return useColors(colorProps)
}
