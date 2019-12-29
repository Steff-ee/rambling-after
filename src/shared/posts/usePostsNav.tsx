import { useContext } from 'react'
import { PageRoutes } from '../helpers/routes'
import { OpenPostsContext } from './openPosts'
import { IPost, PivotRoutes } from './post.types'
import { firstPostByPage, getNextPost, getPrevPost, latestPostByPage } from './posts'

export interface IUsePostsNavReturns {
	currentPost: IPost
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const usePostsNav = (
	page: PageRoutes,
	pivot: PivotRoutes,
	skip = false
): IUsePostsNavReturns => {
	const { getLastOpenPost, setLastOpenPost } = useContext(OpenPostsContext)
	const firstPost = firstPostByPage[page]
	const latestPost = latestPostByPage[page]
	const currentPost = getLastOpenPost(page, pivot) || latestPost

	if (skip) {
		return { currentPost }
	}

	const prevPost = getPrevPost(currentPost)
	const nextPost = getNextPost(currentPost)

	let backClick
	if (prevPost) {
		backClick = (): void => setLastOpenPost(page, pivot, prevPost)
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => setLastOpenPost(page, pivot, nextPost)
	}

	// if we're already at the first or second post, no need to show "<<"
	let firstClick
	if (prevPost && getNextPost(firstPost)!.id !== currentPost.id) {
		firstClick = (): void => setLastOpenPost(page, pivot, firstPost)
	}

	// if we're already at the latest or next-to-latest post, no need to show ">>"
	let latestClick
	if (nextPost && getPrevPost(latestPost)!.id !== currentPost.id) {
		latestClick = (): void => setLastOpenPost(page, pivot, latestPost)
	}

	return {
		currentPost,
		backClick,
		nextClick,
		firstClick,
		latestClick,
	}
}
