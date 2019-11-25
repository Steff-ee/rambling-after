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
