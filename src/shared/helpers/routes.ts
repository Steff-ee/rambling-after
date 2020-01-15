import React from 'react'
import { PivotRoutes } from '../posts/post.types'

export enum PageRoutes {
	Home = 'home',
	Stories = 'stories',
	Games = 'games',
	Conjecture = 'conjecture',
}

export interface IRouteParams {
	page: PageRoutes
	pivot: PivotRoutes
}

export const getPrimaryRoute = (pathName: string): string => {
	const subroutes = pathName.split('/')

	if (subroutes.length < 2) {
		return PageRoutes.Home
	}

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

export const getPath = (
	page: string,
	pivot: string | undefined,
	postId?: string | number
): string => {
	if (postId !== undefined) {
		return `/#/${page}/${pivot}/${postId}`
	}

	return `/#/${page}/${pivot}`
}

export const redirectTo = (path: string): void => {
	if (window.location.href !== path) {
		window.location.replace(path)
	}
}
