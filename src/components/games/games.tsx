import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'

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

const styles: Partial<IPivotStyles> = {
	text: [
		{
			width: '96px',
		},
	],
}

export const Games: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots, setPivot } = usePivots(
		gamePivotTitlePhrases,
		GamePivots.Posts,
		titleMap
	)

	const pivotHeader = (
		<Pivot selectedKey={pivotName} onLinkClick={setPivot} styles={styles}>
			{pivots.map((pivotProps) => (
				<PivotItem {...pivotProps} />
			))}
		</Pivot>
	)

	const header = <h2>{gamesTitle}</h2>

	let pageContent
	switch (pivotName) {
		case GamePivots.Posts:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case GamePivots.Games:
			pageContent = <>Penultima</>
			break
		case GamePivots.Links:
			pageContent = <>GDC</>
	}

	return (
		<>
			{header}
			{pivotHeader}
			{pageContent}
		</>
	)
}
