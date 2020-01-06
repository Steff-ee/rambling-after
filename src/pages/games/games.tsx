import lightbulbsImg from 'Assets/images/lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { GamePivots, gamePivotTitlePhrases, gamesTitle } from './games.types'

const titleMap = makeTitleMap(gamePivotTitlePhrases)

export const Games: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectTo: redirectTo1 } = usePivots(
		gamePivotTitlePhrases,
		GamePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = selectedPivotTitle === GamePivots.Posts
	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectTo: redirectTo2,
	} = usePostsNav(
		PageRoutes.Games,
		selectedPivotTitle as PivotRoutes, // (TODO) remove cast
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(2))
	}, [])

	const redirectTo = redirectTo1 || redirectTo2
	if (redirectTo) {
		return redirectTo
	}

	let pageContent
	switch (selectedPivotTitle) {
		case GamePivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case GamePivots.Games:
			pageContent = <>Penultima</>
			break
		case GamePivots.Links:
		default:
			pageContent = <>GDC</>
	}

	return (
		<Page
			headerBackgroundImage={lightbulbsImg}
			titleText={gamesTitle}
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
