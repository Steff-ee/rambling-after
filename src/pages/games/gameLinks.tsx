import React from 'react'
import { LinkFrame } from '../../shared/presentational/components/linkFrame'

export const GameLinks: React.FunctionComponent = (): JSX.Element => {
	return (
		<div>
			<LinkFrame
				title={'Noclip'}
				link={'https://www.youtube.com/c/NoclipVideo/videos'}
				description={'Wonderful documentary videos about videogame development'}
			/>
			<LinkFrame
				title={'Jason Schreier'}
				link={'https://jasonschreier.com/features-2/'}
				description={'Articles about troubled videogame development'}
				rightShadow={true}
			/>
			<LinkFrame
				title={'Errant Signal'}
				link={'https://www.youtube.com/c/ErrantSignal/videos'}
				description={`My favorite videogame reviewer who isn't Yahtzee`}
			/>
			<LinkFrame
				title={'Top of the Table'}
				link={'https://www.gameinformer.com/topofthetable'}
				description={
					<>
						Matt Miller of GameInformer informs on the <i>other</i> kind of game
					</>
				}
				rightShadow={true}
			/>
		</div>
	)
}
