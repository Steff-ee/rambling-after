import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import { Colors } from '../../shared/helpers/constants'
import { ColorsContext, useColors } from '../../shared/presentational/hooks/useColors'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'

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

	const colorsContext = useColors(Colors.SeaFoam, 15, 60)

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
			pageContent = (
				<>
					Dice icon used in the Nav bar courtesy of <i>my name is mud</i>. Book icon
					courtesy of <i>catyline_Icon</i>. Tea mug icon courstey of <i>y. onaldi</i>. All
					icons taken from the Noun Project.
				</>
			)
			break
		case HomePivots.Blog:
			pageContent = (
				<>
					<p>BLOG POST ONE</p>
					<p>and</p>
					<p>TWO</p>
					<p>and</p>
					<p>THREE</p>
					<p>and</p>
					<p>FOUR</p>
				</>
			)
			break
		case HomePivots.Recent:
		default:
			pageContent = <>BLOG POST ONE</>
	}

	return (
		<ColorsContext.Provider value={colorsContext}>
			<Page titleText={homeTitle} Pivots={pivotHeader} Content={pageContent} />
		</ColorsContext.Provider>
	)
}

export default Home
