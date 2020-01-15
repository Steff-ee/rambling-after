import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const ConjectureLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={'FiveThirtyEight'}
				link={'https://fivethirtyeight.com/'}
				description={`Statistician Nate Silver's news blog`}
			/>
			<LinkFrame
				title={'Slate Star Codex'}
				link={'https://slatestarcodex.com/'}
				description={`Scott Alexander (author of Unsong)'s "rational" blog`}
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
