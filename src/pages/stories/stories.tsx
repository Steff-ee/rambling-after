import booksImg from 'Assets/images/books.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { storiesTitle, StoryPivots, storyPivotTitlePhrases } from './stories.types'

const titleMap = makeTitleMap(storyPivotTitlePhrases)

export const Stories: React.FunctionComponent = (): JSX.Element => {
	console.log('stories')
	const { selectedPivotTitle, setPivot, pivotsItems, redirectTo: redirectTo1 } = usePivots(
		storyPivotTitlePhrases,
		StoryPivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = selectedPivotTitle === StoryPivots.Posts
	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectTo: redirectTo12,
	} = usePostsNav(
		PageRoutes.Stories,
		selectedPivotTitle as PivotRoutes, // (TODO) remove cast
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(1))
	}, [])

	const redirectTo = redirectTo1 || redirectTo12
	if (redirectTo) {
		return redirectTo
	}

	let pageContent
	switch (selectedPivotTitle) {
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
			selectedPivotTitle={selectedPivotTitle}
			setPivot={setPivot}
			pivotsItems={pivotsItems}
			Content={pageContent}
			showPostsNav={showPostsNav}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
		/>
	)
}
