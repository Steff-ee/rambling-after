import { showPostsNavForConjecture } from '../../pages/conjectures/conjecture.helpers'
import { ConjecturePivots } from '../../pages/conjectures/conjectures.types'
import { showPostsNavForGame } from '../../pages/games/game.helpers'
import { GamePivots } from '../../pages/games/games.types'
import { showPostsNavForHome } from '../../pages/home/home.helpers'
import { HomePivots } from '../../pages/home/home.types'
import { showPostsNavForStories } from '../../pages/stories/stories.helpers'
import { StoryPivots } from '../../pages/stories/stories.types'
import { IOpenPostsContext } from '../posts/openPosts'
import { PivotRoutes } from '../posts/post.types'
import { getLatestPost } from '../posts/posts'
import { doesItemExistInIterable } from './genericHelpers'
import { IRouteContext, PageRoutes } from './routes'

export const getHomePath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	if (!doesItemExistInIterable(pivot, HomePivots)) {
		pivot = undefined
	}

	// (TODO) handle default pivots and posts elsewhere in a common area
	const homePivot = pivot || (prevPivots && (prevPivots[PageRoutes.Home] as HomePivots))

	if (!showPostsNavForHome(homePivot)) {
		return `/#/${PageRoutes.Home}/${homePivot}`
	}

	const currentPost =
		getLastOpenPost(PageRoutes.Home, homePivot) || getLatestPost(PageRoutes.Home, homePivot)

	return `/#/${PageRoutes.Home}/${homePivot}/${currentPost.id}`
}

export const getStoriesPath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	if (!doesItemExistInIterable(pivot, StoryPivots)) {
		pivot = undefined
	}

	const storiesPivot = pivot || (prevPivots && (prevPivots[PageRoutes.Stories] as StoryPivots))

	if (!showPostsNavForStories(storiesPivot)) {
		return `/#/${PageRoutes.Stories}/${storiesPivot}`
	}

	const currentPost =
		getLastOpenPost(PageRoutes.Stories, storiesPivot) ||
		getLatestPost(PageRoutes.Stories, storiesPivot)

	return `/#/${PageRoutes.Stories}/${storiesPivot}/${currentPost.id}`
}

export const getGamesPath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	if (!doesItemExistInIterable(pivot, GamePivots)) {
		pivot = undefined
	}

	const gamesPivot = pivot || (prevPivots && (prevPivots[PageRoutes.Games] as GamePivots))

	if (!showPostsNavForGame(gamesPivot)) {
		return `/#/${PageRoutes.Games}/${gamesPivot}`
	}

	const currentPost =
		getLastOpenPost(PageRoutes.Games, gamesPivot) || getLatestPost(PageRoutes.Games, gamesPivot)

	return `/#/${PageRoutes.Games}/${gamesPivot}/${currentPost.id}`
}

export const getConjecturePath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	if (!doesItemExistInIterable(pivot, ConjecturePivots)) {
		pivot = undefined
	}

	const conjecturePivot =
		pivot || (prevPivots && (prevPivots[PageRoutes.Conjecture] as ConjecturePivots))

	if (!showPostsNavForConjecture(conjecturePivot)) {
		return `/#/${PageRoutes.Conjecture}/${conjecturePivot}`
	}

	const currentPost =
		getLastOpenPost(PageRoutes.Conjecture, conjecturePivot) ||
		getLatestPost(PageRoutes.Conjecture, conjecturePivot)

	return `/#/${PageRoutes.Conjecture}/${conjecturePivot}/${currentPost.id}`
}

export const getAnyPagePath = (
	page: string,
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	switch (page) {
		case PageRoutes.Stories:
			return getStoriesPath(getLastOpenPost, prevPivots, pivot)
		case PageRoutes.Games:
			return getGamesPath(getLastOpenPost, prevPivots, pivot)
		case PageRoutes.Conjecture:
			return getConjecturePath(getLastOpenPost, prevPivots, pivot)
		case PageRoutes.Home:
		default:
			return getHomePath(getLastOpenPost, prevPivots, pivot)
	}
}
