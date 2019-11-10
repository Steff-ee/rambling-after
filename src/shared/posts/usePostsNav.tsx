import { useState } from 'react'
import { IPost } from './post.types'

export interface IUsePostsNavReturns {
	currentPost: IPost
	backClick: (() => void) | undefined
	nextClick: (() => void) | undefined
}

export const usePostsNav = (defaultPost: IPost): IUsePostsNavReturns => {
	const [currentPost, setCurrentPost] = useState<IPost>(defaultPost)
	const { prevPostByRoute: prevPost, nextPostByRoute: nextPost } = currentPost

	let backClick
	if (prevPost) {
		backClick = (): void => setCurrentPost(prevPost)
	}

	let nextClick
	if (nextPost) {
		nextClick = (): void => setCurrentPost(nextPost)
	}

	return {
		currentPost,
		backClick,
		nextClick,
	}
}
