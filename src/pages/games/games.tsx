import lightbulbsImg from 'Assets/images/lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes, redirectTo } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { GamePivots, gamePivotTitlePhrases, gamesTitle } from './games.types'
import { Penultima } from './penultima'

const titleMap = makeTitleMap(gamePivotTitlePhrases)

export const Games: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectPath: redirectPath1 } = usePivots(
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
		redirectPath: redirectPath2,
	} = usePostsNav(PageRoutes.Games, selectedPivotTitle, !showPostsNav)

	useEffect(() => {
		setSeason(getNextSeason(2))
	}, [])

	const redirectPath = redirectPath1 || redirectPath2
	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
	}

	let pageContent
	switch (selectedPivotTitle) {
		case GamePivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case GamePivots.Games:
		default:
			pageContent = <Penultima />
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
