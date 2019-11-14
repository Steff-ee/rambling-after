import lightbulbsImg from 'Assets/images/lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { Post } from '../../shared/posts/post'
import { gamesFirstPost, gamesLatestPost } from '../../shared/posts/posts'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'

export const gamesTitle = 'games'

export enum GamePivots {
	Posts = 'posts',
	Games = 'games',
	Links = 'links',
}

export const gamePivotTitlePhrases: IPivotTitlePhrases = [
	// posts about games
	[GamePivots.Posts, 'about', gamesTitle],
	// my games made
	['my', GamePivots.Games, 'made'],
	// some interesting links
	['some', 'interesting', GamePivots.Links],
]

const titleMap = makeTitleMap(gamePivotTitlePhrases)

export const Games: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems } = usePivots(
		gamePivotTitlePhrases,
		GamePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = selectedPivotTitle === GamePivots.Posts
	const { currentPost, firstClick, backClick, nextClick, latestClick } = usePostsNav(
		gamesFirstPost,
		gamesLatestPost,
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(2))
	}, [])

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
