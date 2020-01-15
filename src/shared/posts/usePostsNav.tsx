import { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getPath, IRouteParams, PageRoutes, redirectTo } from '../helpers/routes'
import { OpenPostsContext } from './openPosts'
import { IPost, PivotRoutes } from './post.types'
import { getFirstPost, getLatestPost, getNextPost, getPostFromId, getPrevPost } from './posts'

export interface IUsePostsNavReturns {
	currentPost: IPost
	redirectPath?: string
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

const getPostFromRoute = (postIdFromRoute: string | undefined, page: string): IPost | undefined => {
	if (postIdFromRoute) {
		const postId = parseInt(postIdFromRoute, 10)
		const postFromRoute = getPostFromId(postId)
		if (postFromRoute && page !== postFromRoute.route && page !== PageRoutes.Home) {
			return undefined
		}

		return postFromRoute
	}

	return undefined
}

/**
 * Precondition: @param page is a valid page; TODO test this assumption!
 */
export const usePostsNav = (
	page: PageRoutes,
	pivot: PivotRoutes | undefined,
	skip = false
): IUsePostsNavReturns => {
	const { postId: postIdFromRoute } = useParams<IRouteParams>()
	console.log('postIdFromRoute', postIdFromRoute, 'page', page, 'pivot', pivot)
	const location = useLocation()
	const { getLastOpenPost, setLastOpenPost } = useContext(OpenPostsContext)
	const firstPost = getFirstPost(page, pivot)
	const latestPost = getLatestPost(page, pivot)
	const postFromRoute = getPostFromRoute(postIdFromRoute, page)
	console.log(
		'postFromRoute',
		postFromRoute,
		'getLastOpenPost(page, pivot)',
		getLastOpenPost(page, pivot),
		'latestPost',
		latestPost
	)

	const currentPost: IPost = postFromRoute || getLastOpenPost(page, pivot) || latestPost
	console.log('currentPost', currentPost)

	useEffect(() => {
		// if the new route was valid, store it in the last-open-posts provider
		if (!!postFromRoute && pivot) {
			setLastOpenPost(page, pivot, currentPost)
		}
	}, [location.pathname])

	if (!postFromRoute && currentPost) {
		return { currentPost, redirectPath: getPath(page, pivot, currentPost.id) }
	}

	if (skip) {
		return { currentPost }
	}

	const prevPost = getPrevPost(currentPost, page, pivot)
	const nextPost = getNextPost(currentPost, page, pivot)

	let backClick
	if (prevPost) {
		backClick = (): void => redirectTo(getPath(page, pivot, prevPost.id))
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => redirectTo(getPath(page, pivot, nextPost.id))
	}

	// if we're already at the first or second post, no need to show "<<"
	let firstClick
	if (prevPost && getNextPost(firstPost, page, pivot)!.id !== currentPost.id) {
		firstClick = (): void => redirectTo(getPath(page, pivot, firstPost.id))
	}

	// if we're already at the latest or next-to-latest post, no need to show ">>"
	let latestClick
	if (nextPost && getPrevPost(latestPost, page, pivot)!.id !== currentPost.id) {
		latestClick = (): void => redirectTo(getPath(page, pivot, latestPost.id))
	}

	return {
		currentPost,
		backClick,
		nextClick,
		firstClick,
		latestClick,
	}
}
