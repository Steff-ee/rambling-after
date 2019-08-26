import { Pivot, PivotItem } from 'office-ui-fabric-react/lib'
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

export const Home: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots, setPivot } = usePivots(
		homePivotTitlePhrases,
		HomePivots.Blog,
		titleMap
	)

	return (
		<Pivot selectedKey={pivotName} onLinkClick={setPivot}>
			{pivots.map((pivotProps) => (
				<PivotItem {...pivotProps} />
			))}
		</Pivot>
	)
}
