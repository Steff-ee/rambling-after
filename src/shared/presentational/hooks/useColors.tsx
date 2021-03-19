import React, { createContext, useContext } from 'react'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { Colors } from '../../helpers/constants'
import { IColors } from './useColors.types'

const classicColors: IColors = {
	headerTitleText: Colors.LightSand,
	navbarText: Colors.LightSand,
	background: Colors.LightSand,
	border: 'black',
	text: 'black',
	subtitle: Colors.FadedBlack,
}

const winterColors: IColors = {
	headerTitleText: Colors.IceBlue,
	navbarText: Colors.IceBlue,
	background: Colors.DarkBlue,
	border: 'black',
	text: Colors.IceBlue,
	subtitle: 'white',
}

const springColors: IColors = {
	headerTitleText: Colors.IceWhite,
	navbarText: Colors.DarkViolet,
	background: Colors.ClaretWine,
	border: Colors.IceWhite,
	text: Colors.IceWhite,
	subtitle: Colors.GentleSand,
}

const summerColors: IColors = {
	headerTitleText: Colors.LightYellow,
	navbarText: Colors.LightYellow,
	background: Colors.LightYellow,
	border: 'black',
	text: 'black',
	subtitle: Colors.LightYellow,
}

const autumnColors: IColors = {
	headerTitleText: '#f2afa1',
	navbarText: '#f2afa1',
	background: '#351811',
	border: 'black',
	text: '#f2afa1',
	subtitle: '#f2afa1',
}

export const ColorsContext = createContext<IColors>(classicColors)

export const useColors = (): IColors => {
	return useContext(ColorsContext)
}

export const ColorsProvider: React.FunctionComponent = (props) => {
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
