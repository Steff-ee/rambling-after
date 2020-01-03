import { History } from 'history'
import React, { useContext, useEffect } from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import { getPath, PageRoutes } from '../helpers/routes'
import { OpenPostsContext } from './openPosts'
import { IPost, PivotRoutes } from './post.types'
import { firstPostByPage, getNextPost, getPostFromId, getPrevPost, latestPostByPage } from './posts'

export interface IUsePostsNavReturns {
	currentPost: IPost
	redirectTo?: JSX.Element
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

	if (!postFromRoute && currentPost) {
		return { currentPost, redirectTo: <Redirect to={getPath(page, pivot, currentPost.id)} /> }
	}

	if (skip) {
		return { currentPost }
	}

	const prevPost = getPrevPost(currentPost)
	const nextPost = getNextPost(currentPost)

	let backClick
	if (prevPost) {
		backClick = (): void => history.push(getPath(page, pivot, prevPost.id))
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => history.push(getPath(page, pivot, nextPost.id))
	}

	// if we're already at the first or second post, no need to show "<<"
	let firstClick
	if (prevPost && getNextPost(firstPost)!.id !== currentPost.id) {
		firstClick = (): void => history.push(getPath(page, pivot, firstPost.id))
	}

	// if we're already at the latest or next-to-latest post, no need to show ">>"
	let latestClick
	if (nextPost && getPrevPost(latestPost)!.id !== currentPost.id) {
		latestClick = (): void => history.push(getPath(page, pivot, latestPost.id))
	}

	return {
		currentPost,
		backClick,
		nextClick,
		firstClick,
		latestClick,
	}
}
