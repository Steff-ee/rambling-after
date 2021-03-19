import React, { useState } from 'react'
import { Seasons } from './seasonsHelpers'

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

export const SeasonsProvider: React.FunctionComponent = (props) => {
	const { children } = props
	const [season, setSeason] = useState<Seasons>(Seasons.None)

	return (
		<SeasonsContext.Provider value={{ season, setSeason }}>{children}</SeasonsContext.Provider>
	)
}
