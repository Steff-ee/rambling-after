import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const ConjectureLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={
					<a href="https://fivethirtyeight.com/" target="_blank">
						FiveThirtyEight
					</a>
				}
				link={'https://fivethirtyeight.com/'}
				description={`Statistician Nate Silver's news blog`}
			/>
			<LinkFrame
				title={
					<a href="https://slatestarcodex.com/" target="_blank">
						Slate Star Codex
					</a>
				}
				link={'https://slatestarcodex.com/'}
				description={`Scott Alexander (author of Unsong)'s "rational" blog`}
				rightShadow={true}
			/>
			<LinkFrame
				title={
					<a
						href="https://www.youtube.com/channel/UC0JB7TSe49lg56u6qH8y_MQ/videos"
						target="_blank"
					>
						GDC
					</a>
				}
				link={'https://www.youtube.com/channel/UC0JB7TSe49lg56u6qH8y_MQ/videos'}
				description={'Game Developer Conference presentations'}
			/>
		</div>
	)
}
