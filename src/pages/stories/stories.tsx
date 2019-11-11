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
	const skipPostNavs = pivotName !== StoryPivots.Posts
	const { currentPost, firstClick, backClick, nextClick, latestClick } = usePostsNav(
		storiesFirstPost,
		storiesLatestPost,
		skipPostNavs
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
			const pageContentCount = 30
			const pageContents = []
			for (let i = 0; i < pageContentCount; i++) {
				pageContents.push(
					<p>
						Curabitur tempus venenatis tortor. Ut rutrum enim elit, interdum ornare
						lectus condimentum quis. Sed dapibus tincidunt urna a feugiat. Phasellus
						molestie commodo risus, sed semper neque convallis eu. Morbi sagittis
						malesuada dui a aliquam. Aliquam vel commodo libero, quis vehicula lectus.
						Cras tempus nulla in mauris vehicula aliquet. Nunc ac nisl neque. Aliquam
						efficitur velit ligula, sed rutrum odio molestie eu. Pellentesque id
						condimentum enim, in lacinia nisi. Etiam luctus nisl a neque placerat, non
						aliquet elit facilisis. Nam vel cursus purus.
					</p>
				)
			}
			pageContent = <>{pageContents}</>
			break
		case StoryPivots.Links:
		default:
			pageContent = <>Big Ideas</>
	}

	return (
		<Page
			headerBackgroundImage={booksImg}
			titleText={storiesTitle}
			Pivots={pivots}
			Content={pageContent}
			showPostsNav={pivotName === StoryPivots.Posts}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
		/>
	)
}
