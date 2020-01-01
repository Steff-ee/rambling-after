import { History } from 'history'
import { useContext, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { PageRoutes } from '../helpers/routes'
import { OpenPostsContext } from './openPosts'
import { IPost, PivotRoutes } from './post.types'
import { firstPostByPage, getNextPost, getPostFromId, getPrevPost, latestPostByPage } from './posts'

export interface IUsePostsNavReturns {
	currentPost: IPost
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const navigateToPost = (
	history: History<any>,
	postId: number,
	pivot: string,
	page: string
): void => {
	history.push(`/${page}/${pivot}/${postId}`)
}

const getPostFromRoute = (postIdFromRoute: string | undefined, page: string): IPost | undefined => {
	if (postIdFromRoute) {
		const postId = parseInt(postIdFromRoute, 10)
		const postFromRoute = getPostFromId(postId)
		if (postFromRoute && page !== postFromRoute.route) {
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
	pivot: PivotRoutes,
	skip = false
): IUsePostsNavReturns => {
	const { postId: postIdFromRoute } = useParams()
	const history = useHistory()
	const location = useLocation()
	const { getLastOpenPost, setLastOpenPost } = useContext(OpenPostsContext)
	const firstPost = firstPostByPage[page]
	const latestPost = latestPostByPage[page]
	const postFromRoute = getPostFromRoute(postIdFromRoute, page)

	const currentPost: IPost = postFromRoute || getLastOpenPost(page, pivot) || latestPost

	useEffect(() => {
		// if the new route was valid, store it in the last-open-posts provider
		if (!!postFromRoute) {
			setLastOpenPost(page, pivot, currentPost)
		}
	}, [location.pathname])

	if (skip) {
		return { currentPost }
	}

	const prevPost = getPrevPost(currentPost)
	const nextPost = getNextPost(currentPost)

	let backClick
	if (prevPost) {
		backClick = (): void => navigateToPost(history, prevPost.id, pivot, page)
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => navigateToPost(history, nextPost.id, pivot, page)
	}

	// if we're already at the first or second post, no need to show "<<"
	let firstClick
	if (prevPost && getNextPost(firstPost)!.id !== currentPost.id) {
		firstClick = (): void => navigateToPost(history, firstPost.id, pivot, page)
	}

	// if we're already at the latest or next-to-latest post, no need to show ">>"
	let latestClick
	if (nextPost && getPrevPost(latestPost)!.id !== currentPost.id) {
		latestClick = (): void => navigateToPost(history, latestPost.id, pivot, page)
	}

	return {
		currentPost,
		backClick,
		nextClick,
		firstClick,
		latestClick,
	}
}
