import React, { createContext, PropsWithChildren, useContext } from 'react'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { Colors } from '../../helpers/constants'
import { IColors } from './useColors.types'

const classicColors: IColors = {
	primary: Colors.LightSand,
	border: 'black',
	text: 'black',
	subtitle: Colors.FadedBlack,
}

const winterColors: IColors = {
	primary: Colors.SeaFoam,
	border: 'black',
	text: 'white',
	subtitle: Colors.DarkGray,
}

const springColors: IColors = {
	primary: '',
	border: '',
	text: '',
	subtitle: '',
}

const summerColors: IColors = {
	primary: '',
	border: '',
	text: '',
	subtitle: '',
}

const autumnColors: IColors = {
	primary: '',
	border: '',
	text: '',
	subtitle: '',
}

export const ColorsContext = createContext<IColors>(classicColors)

export const useColors = (): IColors => {
	return useContext(ColorsContext)
}

export const ColorsProvider: React.FunctionComponent<PropsWithChildren<{}>> = (
	props: PropsWithChildren<{}>
): JSX.Element => {
	const { children } = props
	const { season } = useContext(SeasonsContext)
	let colors: IColors
	switch (season) {
		case Seasons.Winter:
			colors = winterColors
			break
		case Seasons.Spring:
			colors = springColors
			break
		case Seasons.Summer:
			colors = summerColors
			break
		case Seasons.Autumn:
			colors = autumnColors
			break
		case Seasons.None:
		default:
			colors = classicColors
	}

	return <ColorsContext.Provider value={colors}>{children}</ColorsContext.Provider>
}
