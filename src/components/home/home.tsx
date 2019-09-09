import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Blog = 'blog',
	Recent = 'recent',
}

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about this site
	[HomePivots.About, 'this', 'site'],
	// all blog posts
	['all', HomePivots.Blog, 'posts'],
	// only most recent
	['only', 'most', HomePivots.Recent],
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

	const header = <h2>{homeTitle}</h2>

	let pageContent
	switch (pivotName) {
		case HomePivots.About:
			pageContent = <>This is Steffee's website</>
			break
		case HomePivots.Blog:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case HomePivots.Recent:
			pageContent = <>BLOG POST ONE</>
	}

	return (
		<>
			{header}
			{pivotHeader}
			{pageContent}
		</>
	)
}

export default Home
