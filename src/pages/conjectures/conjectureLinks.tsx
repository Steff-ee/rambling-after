import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const ConjectureLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={'FiveThirtyEight'}
				link={'https://fivethirtyeight.com/'}
				description={`Statistically inclined news, founded by Nate Silver`}
			/>
			<LinkFrame
				title={'Slate Star Codex'}
				link={'https://slatestarcodex.com/'}
				description={`Scott Alexander (author of Unsong)'s fascinating "rational" blog`}
				rightShadow={true}
			/>
			<LinkFrame
				title={'The Margins'}
				link={'https://themargins.substack.com/'}
				description={`Ranjan Roy & Can Duruk on technology and business`}
				rightShadow={true}
			/>
			<LinkFrame
				title={'Marginal Revolution'}
				link={'https://marginalrevolution.com/'}
				description={`Tyler Cowen & Alexander Tabarrok on economics with great link roundups`}
				rightShadow={true}
			/>
			<LinkFrame
				title={'GDC'}
				link={'https://www.youtube.com/channel/UC0JB7TSe49lg56u6qH8y_MQ/videos'}
				description={'Game Developer Conference presentations'}
			/>
		</div>
	)
}
