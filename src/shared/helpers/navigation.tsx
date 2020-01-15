import { ConjecturePivots } from '../../pages/conjectures/conjectures.types'
import { GamePivots } from '../../pages/games/games.types'
import { HomePivots } from '../../pages/home/home.types'
import { StoryPivots } from '../../pages/stories/stories.types'
import { IOpenPostsContext } from '../posts/openPosts'
import { PivotRoutes } from '../posts/post.types'
import { getLatestPost } from '../posts/posts'
import { IRouteContext, PageRoutes } from './routes'

export const getHomePath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	// (TODO) handle default pivots and posts elsewhere in a common area
	const homePivot =
		pivot || (prevPivots && (prevPivots[PageRoutes.Home] as HomePivots)) || HomePivots.Posts
	const currentPost =
		getLastOpenPost(PageRoutes.Home, homePivot) || getLatestPost(PageRoutes.Home, homePivot)

	return `/#/${PageRoutes.Home}/${homePivot}/${currentPost.id}`
}

export const getStoriesPath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	const storiesPivot =
		pivot ||
		(prevPivots && (prevPivots[PageRoutes.Stories] as StoryPivots)) ||
		StoryPivots.Posts
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
	const gamesPivot =
		pivot || (prevPivots && (prevPivots[PageRoutes.Games] as GamePivots)) || GamePivots.Posts
	const currentPost =
		getLastOpenPost(PageRoutes.Games, gamesPivot) || getLatestPost(PageRoutes.Games, gamesPivot)

	return `/#/${PageRoutes.Games}/${gamesPivot}/${currentPost.id}`
}

export const getConjecturePath = (
	getLastOpenPost: IOpenPostsContext['getLastOpenPost'],
	prevPivots?: IRouteContext['prevPivots'],
	pivot?: PivotRoutes
): string => {
	const conjecturePivot =
		pivot ||
		(prevPivots && (prevPivots[PageRoutes.Conjecture] as ConjecturePivots)) ||
		ConjecturePivots.Posts
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
