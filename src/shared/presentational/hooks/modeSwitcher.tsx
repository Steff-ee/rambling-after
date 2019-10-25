import React from 'react'

export enum Modes {
	Classic,
	Seasons,
}

interface IModesContext {
	mode: Modes
	setMode: (season: Modes) => void
}

export const ModesContext = React.createContext<IModesContext>({
	mode: Modes.Classic,
	setMode: (mode: Modes): void => {
		return
	},
})
