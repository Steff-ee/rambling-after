import { useState } from 'react'
import { IPost } from './post.types'

export interface IUsePostsNavReturns {
	currentPost: IPost
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const usePostsNav = (
	firstPost: IPost,
	latestPost: IPost,
	skip = false
): IUsePostsNavReturns => {
	const [currentPost, setCurrentPost] = useState<IPost>(latestPost)

	if (skip) {
		return { currentPost }
	}

	const { prevPostByRoute: prevPost, nextPostByRoute: nextPost } = currentPost

	let backClick
	if (prevPost) {
		backClick = (): void => setCurrentPost(prevPost)
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => setCurrentPost(nextPost)
	}

	// if we're already at the first or second post, no need to show "<<"
	let firstClick
	if (prevPost && firstPost.nextPostByRoute!.id !== currentPost.id) {
		firstClick = (): void => setCurrentPost(firstPost)
	}

	// if we're already at the latest or next-to-latest post, no need to show ">>"
	let latestClick
	if (nextPost && latestPost.prevPostByRoute!.id !== currentPost.id) {
		latestClick = (): void => setCurrentPost(latestPost)
	}

	return {
		currentPost,
		backClick,
		nextClick,
		firstClick,
		latestClick,
	}
}
