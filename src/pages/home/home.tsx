import { IPivotItemProps, Pivot, PivotItem } from 'office-ui-fabric-react/lib'
import React from 'react'
import { usePivotKey } from '../../shared/presentational/hooks/usePivotKey'

// also double as keys, so keep these unique
export enum HomePivotNames {
	Blog = 'Blog',
	About = 'About Page',
}

export const homePivots: IPivotItemProps[] = [
	{
		headerText: HomePivotNames.Blog,
		itemKey: HomePivotNames.Blog,
	},
	{
		headerText: HomePivotNames.About,
		itemKey: HomePivotNames.About,
	},
]

export const Home: React.FunctionComponent = (): JSX.Element => {
	const { pivotKey, setPivot } = usePivotKey<HomePivotNames>(HomePivotNames.Blog)

	return (
		<Pivot selectedKey={pivotKey} onLinkClick={setPivot}>
			{homePivots.map((pivotProps) => (
				<PivotItem {...pivotProps} />
			))}
		</Pivot>
	)
}
