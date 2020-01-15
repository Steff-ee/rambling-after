import booksImg from 'Assets/images/books.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes, redirectTo } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { storiesTitle, StoryPivots, storyPivotTitlePhrases } from './stories.types'
import { StoryLinks } from './storyLinks'

const titleMap = makeTitleMap(storyPivotTitlePhrases)

export const Stories: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectPath: redirectPath1 } = usePivots(
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
		redirectPath: redirectPath2,
	} = usePostsNav(PageRoutes.Stories, selectedPivotTitle, !showPostsNav)

	useEffect(() => {
		setSeason(getNextSeason(1))
	}, [])

	const redirectPath = redirectPath1 || redirectPath2
	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
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
