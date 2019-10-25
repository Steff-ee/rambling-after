import React, { useState } from 'react'
import { Colors } from '../../helpers/constants'

export interface IBackground {
	src: string
	artistName: string
	artistLink: string
	color?: string
}

export interface IBackgroundsContext {
	backgrounds: IBackground[]
	selectedIndex: number
	setSelectedIndex: (index: number) => void
}

export const BackgroundsContext = React.createContext<IBackgroundsContext>({
	backgrounds: [{ src: '', color: Colors.Black, artistName: '', artistLink: '' }],
	selectedIndex: 0,
	setSelectedIndex: (index: number): void => {
		return
	},
})

export const useBackgrounds = (backgrounds: IBackground[]): IBackgroundsContext => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0)

	return {
		backgrounds,
		selectedIndex,
		setSelectedIndex,
	}
}
