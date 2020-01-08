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
import { StoryLinks } from './storyLinks'

const titleMap = makeTitleMap(storyPivotTitlePhrases)

export const Stories: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectTo: redirectTo1 } = usePivots(
		storyPivotTitlePhrases,
		StoryPivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = selectedPivotTitle !== StoryPivots.Links
	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectTo: redirectTo2,
	} = usePostsNav(
		PageRoutes.Stories,
		selectedPivotTitle as PivotRoutes, // (TODO) remove cast
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(1))
	}, [])

	const redirectTo = redirectTo1 || redirectTo2
	if (redirectTo) {
		return redirectTo
	}

	let pageContent
	switch (selectedPivotTitle) {
		case StoryPivots.Posts:
		case StoryPivots.Stories:
			pageContent = <Post post={currentPost} />
			break
		case StoryPivots.Links:
		default:
			pageContent = <StoryLinks />
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
