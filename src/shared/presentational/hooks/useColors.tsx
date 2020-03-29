import React, { createContext, PropsWithChildren, useContext } from 'react'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { Colors } from '../../helpers/constants'
import { IColors } from './useColors.types'

const classicColors: IColors = {
	headerText: Colors.LightSand,
	background: Colors.LightSand,
	border: 'black',
	text: 'black',
	subtitle: Colors.FadedBlack,
}

const winterColors: IColors = {
	headerText: Colors.IceBlue,
	background: Colors.DarkBlue,
	border: 'black',
	text: Colors.IceBlue,
	subtitle: 'white',
}

const springColors: IColors = {
	headerText: 'white',
	background: Colors.CherryBlossom,
	border: 'black',
	text: 'black',
	subtitle: 'black',
}

const summerColors: IColors = {
	headerText: Colors.LightYellow,
	background: Colors.LightYellow,
	border: 'black',
	text: 'black',
	subtitle: Colors.LightYellow,
}

const autumnColors: IColors = {
	headerText: '#f2afa1',
	background: '#351811',
	border: 'black',
	text: '#f2afa1',
	subtitle: '#f2afa1',
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
