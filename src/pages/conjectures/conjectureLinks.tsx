import React from 'react'
import { DetailFrame } from '../../shared/presentational/components/detailFrame'

export const ConjectureLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<DetailFrame
				title={<a href="https://fivethirtyeight.com/">FiveThirtyEight</a>}
				description={`Statistician Nate Silver's news blog`}
			/>
			<DetailFrame
				title={<a href="https://slatestarcodex.com/">Slate Star Codex</a>}
				description={`Scott Alexander (author of Unsong)'s "rational" blog`}
			/>
			<DetailFrame
				title={
					<a href="https://www.youtube.com/channel/UC0JB7TSe49lg56u6qH8y_MQ/videos">
						GDC
					</a>
				}
				description={'Game Developer Conference presentations'}
			/>
		</div>
	)
}
