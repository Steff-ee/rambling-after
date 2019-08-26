import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'

export enum HomePivots {
	About = 'About',
	Blog = 'Blog',
	Latest = 'Latest Post',
}

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about this site
	[HomePivots.About, 'This', 'Site'],
	// all blog posts
	['All', HomePivots.Blog, 'Posts'],
	// just the latest post
	['Just', 'The', HomePivots.Latest],
]

const titleMap = makeTitleMap(homePivotTitlePhrases)

const styles: Partial<IPivotStyles> = {
	text: [
		{
			width: '96px',
		},
	],
}

export const Home: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots, setPivot } = usePivots(
		homePivotTitlePhrases,
		HomePivots.Blog,
		titleMap
	)

	const pivotHeader = (
		<Pivot selectedKey={pivotName} onLinkClick={setPivot} styles={styles}>
			{pivots.map((pivotProps) => (
				<PivotItem {...pivotProps} />
			))}
		</Pivot>
	)

	let pageContent
	switch (pivotName) {
		case HomePivots.About:
			pageContent = <>This is Steffee's website</>
			break
		case HomePivots.Blog:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case HomePivots.Latest:
			pageContent = <>BLOG POST ONE</>
	}

	return (
		<>
			{pivotHeader}
			{pageContent}
		</>
	)
}
