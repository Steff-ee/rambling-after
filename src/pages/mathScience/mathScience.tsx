import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { getNextSeason, SeasonsContext } from '../../shared/presentational/seasons/seasons'
import { Page } from '../page'

export const mathScienceTitle = 'math & science'

export enum MathSciencePivots {
	Posts = 'posts',
	Code = 'code',
	Links = 'links',
}

export const mathSciencePivotTitlePhrases: IPivotTitlePhrases = [
	// posts about math & science
	[MathSciencePivots.Posts, 'about', mathScienceTitle],
	// my code hub
	['my', MathSciencePivots.Code, 'hub'],
	// some interesting links
	['some', 'interesting', MathSciencePivots.Links],
]

const titleMap = makeTitleMap(mathSciencePivotTitlePhrases)

export const MathScience: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots } = usePivots(
		mathSciencePivotTitlePhrases,
		MathSciencePivots.Posts,
		titleMap
	)

	let pageContent
	switch (pivotName) {
		case MathSciencePivots.Posts:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case MathSciencePivots.Code:
			pageContent = <>github, also check out TreeRing and PowerApps</>
			break
		case MathSciencePivots.Links:
		default:
			pageContent = <>538</>
	}

	return (
		<SeasonsContext.Provider value={getNextSeason(3)}>
			<Page titleText={mathScienceTitle} Pivots={pivots} Content={pageContent} />
		</SeasonsContext.Provider>
	)
}
