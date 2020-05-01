import { StoryPivots } from '../../pages/stories/stories.types'
import { PageRoutes } from '../helpers/routes'
import { IPost, PivotRoutes } from './post.types'
import { POST_00100 } from './store/POST_00100'
import { POST_00102 } from './store/POST_00102'
import { POST_00103 } from './store/POST_00103'
import { POST_00104 } from './store/POST_00104'
import { POST_00106 } from './store/POST_00106'
import { POST_00108 } from './store/POST_00108'
import { POST_00110 } from './store/POST_00110'
import { POST_00112 } from './store/POST_00112'
import { POST_00114 } from './store/POST_00114'
import { POST_00116 } from './store/POST_00116'
import { POST_00118 } from './store/POST_00118'
import { POST_00120 } from './store/POST_00120'
import { POST_00122 } from './store/POST_00122'
import { POST_00124 } from './store/POST_00124'

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
	POST_00114,
	POST_00116,
	POST_00118,
	POST_00120,
	POST_00122,
	POST_00124,
]

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

const allStoryPosts = allPostsByPage[PageRoutes.Stories]
export const postsAboutStories: IPost[] = allStoryPosts.filter(
	(post) => post.pivot === StoryPivots.Posts
)
export const stories: IPost[] = allStoryPosts.filter((post) => post.pivot === StoryPivots.Stories)

const postsAboutStoriesDictionary: { [id: number]: number } = {}
postsAboutStories.forEach((post, index) => {
	postsAboutStoriesDictionary[post.id] = index
})

const storiesDictionary: { [id: number]: number } = {}
stories.forEach((post, index) => {
	storiesDictionary[post.id] = index
})

/* GAMES */

export const gamesPosts: IPost[] = allPostsByPage[PageRoutes.Games]

const gamesPostsDictionary: { [id: number]: number } = {}
gamesPosts.forEach((post, index) => {
	gamesPostsDictionary[post.id] = index
})

/* CONJECTURE */

export const conjecturePosts: IPost[] = allPostsByPage[PageRoutes.Conjecture]

const conjecturePostsDictionary: { [id: number]: number } = {}
conjecturePosts.forEach((post, index) => {
	conjecturePostsDictionary[post.id] = index
})

/* NAVIGATION */

const getPageList = (page: PageRoutes, pivot: PivotRoutes | undefined): IPost[] => {
	switch (page) {
		case PageRoutes.Home:
			return allPosts
		case PageRoutes.Stories:
			if (pivot === StoryPivots.Stories) {
				return stories
			}

			return postsAboutStories
		case PageRoutes.Games:
			return gamesPosts
		case PageRoutes.Conjecture:
			return conjecturePosts
	}
}

const getPageListIndexOfPost = (
	postId: number,
	page: PageRoutes,
	pivot: PivotRoutes | undefined
): number => {
	switch (page) {
		case PageRoutes.Home:
			return allPostsDictionary[postId]
		case PageRoutes.Stories:
			if (pivot === StoryPivots.Stories) {
				return storiesDictionary[postId]
			}

			return postsAboutStoriesDictionary[postId]
		case PageRoutes.Games:
			return gamesPostsDictionary[postId]
		case PageRoutes.Conjecture:
			return conjecturePostsDictionary[postId]
	}

	return -1
}

export const getPostFromId = (postId: number): IPost | undefined => {
	const pageListIndex = allPostsDictionary[postId]

	return allPosts[pageListIndex]
}

export const getNextPost = (
	post: IPost,
	page: PageRoutes,
	pivot: PivotRoutes | undefined
): IPost | undefined => {
	const index = getPageListIndexOfPost(post.id, page, pivot) + 1
	const pageList = getPageList(page, pivot)

	if (pageList.length > index) {
		return pageList[index]
	}

	return undefined
}

export const getPrevPost = (
	post: IPost,
	page: PageRoutes,
	pivot: PivotRoutes | undefined
): IPost | undefined => {
	const index = getPageListIndexOfPost(post.id, page, pivot) - 1
	const pageList = getPageList(page, pivot)

	if (index >= 0) {
		return pageList[index]
	}

	return undefined
}

export const getFirstPost = (page: PageRoutes, pivot: PivotRoutes | undefined): IPost => {
	switch (page) {
		case PageRoutes.Home:
			return allPosts[0]
		case PageRoutes.Stories:
			if (pivot === StoryPivots.Stories) {
				return stories[0]
			}

			return postsAboutStories[0]
		case PageRoutes.Games:
			return gamesPosts[0]
		case PageRoutes.Conjecture:
			return conjecturePosts[0]
	}
}

export const getLatestPost = (page: PageRoutes, pivot: PivotRoutes | undefined): IPost => {
	switch (page) {
		case PageRoutes.Home:
			return allPosts[allPosts.length - 1]
		case PageRoutes.Stories:
			if (pivot === StoryPivots.Stories) {
				return stories[stories.length - 1]
			}

			return postsAboutStories[postsAboutStories.length - 1]
		case PageRoutes.Games:
			return gamesPosts[gamesPosts.length - 1]
		case PageRoutes.Conjecture:
			return conjecturePosts[conjecturePosts.length - 1]
	}
}
