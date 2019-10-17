import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { getNextSeason, SeasonsContext } from '../../shared/presentational/seasons/seasons'
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
	const { pivotName, pivots } = usePivots(gamePivotTitlePhrases, GamePivots.Posts, titleMap)

	let pageContent
	switch (pivotName) {
		case GamePivots.Posts:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case GamePivots.Games:
			pageContent = <>Penultima</>
			break
		case GamePivots.Links:
		default:
			pageContent = <>GDC</>
	}

	return (
		<SeasonsContext.Provider value={getNextSeason(2)}>
			<Page titleText={gamesTitle} Pivots={pivots} Content={pageContent} />
		</SeasonsContext.Provider>
	)
}
