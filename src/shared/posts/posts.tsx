import { PageRoutes } from '../helpers/routes'
import { IPost } from './post.types'
import { POST_00100 } from './store/POST_00100'
import { POST_00102 } from './store/POST_00102'
import { POST_00103 } from './store/POST_00103'
import { POST_00104 } from './store/POST_00104'
import { POST_00106 } from './store/POST_00106'
import { POST_00108 } from './store/POST_00108'
import { POST_00110 } from './store/POST_00110'
import { POST_00112 } from './store/POST_00112'

/* ALL POSTS */

// ordered in ascending order, from oldest to most recent
export const allPosts: IPost[] = [
	POST_00100,
	POST_00102,
	POST_00103,
	POST_00104,
	POST_00106,
	POST_00108,
	POST_00110,
	POST_00112,
]

export const latestPostByPage: { [page: string]: IPost } = {}
export const firstPostByPage: { [page: string]: IPost } = {}
export const allPostsByPage: { [page: string]: IPost[] } = {}

Object.keys(PageRoutes).forEach((key: string) => {
	const pageKey = key as keyof typeof PageRoutes
	allPostsByPage[PageRoutes[pageKey]] = []
})

const allPostsDictionary: { [id: number]: number } = {}
allPosts.forEach((post, index) => {
	allPostsDictionary[post.id] = index
	allPostsByPage[post.route].push(post)
})

/* STORIES */

export const storiesPosts: IPost[] = allPostsByPage[PageRoutes.Stories]
firstPostByPage[PageRoutes.Stories] = storiesPosts[0]
latestPostByPage[PageRoutes.Stories] = storiesPosts[storiesPosts.length - 1]

const storiesPostsDictionary: { [id: number]: number } = {}
storiesPosts.forEach((post, index) => {
	storiesPostsDictionary[post.id] = index
})

/* GAMES */

export const gamesPosts: IPost[] = allPostsByPage[PageRoutes.Games]
firstPostByPage[PageRoutes.Games] = gamesPosts[0]
latestPostByPage[PageRoutes.Games] = gamesPosts[gamesPosts.length - 1]

const gamesPostsDictionary: { [id: number]: number } = {}
gamesPosts.forEach((post, index) => {
	gamesPostsDictionary[post.id] = index
})

/* CONJECTURE */

export const conjecturePosts: IPost[] = allPostsByPage[PageRoutes.Conjecture]
firstPostByPage[PageRoutes.Conjecture] = conjecturePosts[0]
latestPostByPage[PageRoutes.Conjecture] = conjecturePosts[conjecturePosts.length - 1]

const conjecturePostsDictionary: { [id: number]: number } = {}
conjecturePosts.forEach((post, index) => {
	conjecturePostsDictionary[post.id] = index
})

/* NAVIGATION */

const getPageListFromPost = (post: IPost): IPost[] => {
	switch (post.route) {
		case PageRoutes.Home:
			return allPosts
		case PageRoutes.Stories:
			return storiesPosts
		case PageRoutes.Games:
			return gamesPosts
		case PageRoutes.Conjecture:
			return conjecturePosts
	}
}

const getPageListIndexOfPost = (post: IPost): number => {
	switch (post.route) {
		case PageRoutes.Home:
			return allPostsDictionary[post.id]
		case PageRoutes.Stories:
			return storiesPostsDictionary[post.id]
		case PageRoutes.Games:
			return gamesPostsDictionary[post.id]
		case PageRoutes.Conjecture:
			return conjecturePostsDictionary[post.id]
	}
}

export const getPostFromId = (postId: number): IPost | undefined => {
	const pageListIndex = allPostsDictionary[postId]

	return allPosts[pageListIndex]
}

export const getNextPost = (post: IPost): IPost | undefined => {
	const index = getPageListIndexOfPost(post) + 1
	const pageList = getPageListFromPost(post)

	if (pageList.length > index) {
		return pageList[index]
	}

	return undefined
}

export const getPrevPost = (post: IPost): IPost | undefined => {
	const index = getPageListIndexOfPost(post) - 1
	const pageList = getPageListFromPost(post)

	if (index >= 0) {
		return pageList[index]
	}

	return undefined
}
