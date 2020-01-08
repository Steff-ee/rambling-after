import React from 'react'
import { DetailFrame } from '../../shared/presentational/components/detailFrame'

// (TODO) Styling
export const StoryLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<DetailFrame
				title={<a href="http://ramblingafter.thecomicseries.com/">Rambling After</a>}
				description={'My old comics'}
			/>
			<DetailFrame
				title={<a href="https://whatever.scalzi.com/category/big-idea/">The Big Idea</a>}
				description={'Authors describing their inspirations, collected by John Scalzi'}
			/>
			<DetailFrame
				title={
					<a href="http://jetreidliterary.blogspot.com/">Janet Reid, Literary Agent</a>
				}
				description={
					<>
						The Query Shark's <i>other</i> blog
					</>
				}
			/>
		</div>
	)
}
