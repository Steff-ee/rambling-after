import React from 'react'

export enum PageRoutes {
	Home = 'home',
	Stories = 'stories',
	Games = 'games',
	Conjecture = 'conjecture',
}

export const getPrimaryRoute = (pathName: string): string => {
	const subroutes = pathName.split('/')

	return subroutes[1]
}

export interface IRouteContext {
	prevPivots: { [page: string]: string | undefined }
	setPrevPivot: (page: string, pivot: string) => void
}

export const RouteContext = React.createContext<IRouteContext>({
	prevPivots: {},
	setPrevPivot: (): void => {
		return
	},
})
