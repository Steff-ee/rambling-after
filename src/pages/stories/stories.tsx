import booksImg from 'Assets/images/books.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { Post } from '../../shared/posts/post'
import { storiesFirstPost, storiesLatestPost } from '../../shared/posts/posts'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'

export const storiesTitle = 'stories'

export enum StoryPivots {
	Posts = 'posts',
	Stories = 'stories',
	Links = 'links',
}

export const storyPivotTitlePhrases: IPivotTitlePhrases = [
	// posts about stories
	[StoryPivots.Posts, 'about', storiesTitle],
	// my stories written
	['my', StoryPivots.Stories, 'written'],
	// some interesting links
	['some', 'interesting', StoryPivots.Links],
]

const titleMap = makeTitleMap(storyPivotTitlePhrases)

export const Stories: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots } = usePivots(storyPivotTitlePhrases, StoryPivots.Posts, titleMap)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = pivotName === StoryPivots.Posts
	const { currentPost, firstClick, backClick, nextClick, latestClick } = usePostsNav(
		storiesFirstPost,
		storiesLatestPost,
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(1))
	}, [])

	let pageContent
	switch (pivotName) {
		case StoryPivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case StoryPivots.Stories:
			pageContent = (
				<>
					Links and descriptions of short stories here, until novel is complete. Maybe
					link to comics
				</>
			)
			break
		case StoryPivots.Links:
		default:
			pageContent = <>Big Ideas blog, Janet Reid's...</>
	}

	return (
		<Page
			headerBackgroundImage={booksImg}
			titleText={storiesTitle}
			Pivots={pivots}
			Content={pageContent}
			showPostsNav={showPostsNav}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
		/>
	)
}
