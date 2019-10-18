import React, { useState } from 'react'

export interface IBackgroundsContext {
	backgrounds: string[]
	selectedIndex: number
	setSelectedIndex: (index: number) => void
}

export const BackgroundsContext = React.createContext<IBackgroundsContext>({
	backgrounds: [''],
	selectedIndex: 0,
	setSelectedIndex: (index: number): void => {
		return
	},
})

export const useBackgrounds = (backgrounds: string[]): IBackgroundsContext => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0)

	return {
		backgrounds,
		selectedIndex,
		setSelectedIndex,
	}
}
