import React from 'react'
import { DetailFrame } from '../../shared/presentational/components/detailFrame'

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
			<DetailFrame
				title={
					<a href="https://www.youtube.com/channel/UCyNtlmLB73-7gtlBz00XOQQ/videos">
						Folding Ideas
					</a>
				}
				description={'YouTube essays about pop culture'}
			/>
		</div>
	)
}
