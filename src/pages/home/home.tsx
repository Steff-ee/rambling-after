import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import { Colors } from '../../shared/helpers/constants'
import { ColorRatios, ColorsContext, useColors } from '../../shared/presentational/hooks/useColors'
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

	const colorsContext = useColors(Colors.SeaFoam, ColorRatios.SplitComplementary)

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
			pageContent = (
				<>
					Dice icon used in the Nav bar courtesy of <i>my name is mud</i>. Book icon
					courtesy of <i>catyline_Icon</i>. Tea mug icon courstey of <i>y. onaldi</i>. All
					icons taken from the Noun Project.
				</>
			)
			break
		case HomePivots.Blog:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case HomePivots.Recent:
		default:
			pageContent = <>BLOG POST ONE</>
	}

	return (
		<ColorsContext.Provider value={colorsContext}>
			<Page Header={header} Pivots={pivotHeader} Content={pageContent} />
		</ColorsContext.Provider>
	)
}

export default Home
