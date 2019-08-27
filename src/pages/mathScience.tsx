import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../shared/presentational/hooks/usePivots'

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

const styles: Partial<IPivotStyles> = {
	text: [
		{
			width: '96px',
		},
	],
}

const MathScience: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots, setPivot } = usePivots(
		mathSciencePivotTitlePhrases,
		MathSciencePivots.Posts,
		titleMap
	)

	const pivotHeader = (
		<Pivot selectedKey={pivotName} onLinkClick={setPivot} styles={styles}>
			{pivots.map((pivotProps) => (
				<PivotItem {...pivotProps} />
			))}
		</Pivot>
	)

	const header = <h2>{mathScienceTitle}</h2>

	let pageContent
	switch (pivotName) {
		case MathSciencePivots.Posts:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case MathSciencePivots.Code:
			pageContent = <>github, also check out TreeRing and PowerApps</>
			break
		case MathSciencePivots.Links:
			pageContent = <>538</>
	}

	return (
		<>
			{header}
			{pivotHeader}
			{pageContent}
		</>
	)
}

export default MathScience
