import foggyTown from 'Assets/images/foggy_town.jpg'
import React from 'react'
import { ClassicPageTemplate } from '../../modes/classic/classicPageTemplate'
import { classicBackgroundTextureStyle } from '../../shared/helpers/styles'
import { DrumMachineDisplay } from './drumMachineDisplay'
import { createPercussionInstrument } from './helpers'
import { IPercussionSequence } from './music.types'

const Kick = createPercussionInstrument('Kick')
const Snare = createPercussionInstrument('Snare')
const ClosedHat = createPercussionInstrument('ClosedHat')
const OpenHat = createPercussionInstrument('OpenHat')

const FourOnTheFloor: IPercussionSequence = {
	author: 'Splice',
	tracks: [
		{
			instrument: Kick,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 0, 0],
		},
		{
			instrument: Snare,
			smallestBeatUnit: 4,
			length: 16,
			pattern: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
		},
		{
			instrument: OpenHat,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [0, 0, 1, 0],
		},
		{
			instrument: ClosedHat,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 0, 0],
		},
	],
}

export function DrumMachinePage(): JSX.Element {
	return (
		<ClassicPageTemplate
			Content={
				<div>
					<DrumMachineDisplay
						sequence={FourOnTheFloor}
						beatUnit={4}
						length={16}
						barLength={4}
					/>
				</div>
			}
			headerBackgroundImage={foggyTown}
			backgroundStyle={classicBackgroundTextureStyle}
			selectedPivotTitle={''}
			setPivot={(): void => {
				return
			}}
			pivotsItems={[]}
			showPostsNav={false}
			artistName={'an unknown photographer'}
			artistLink={'https://best-wallpaper.net/'}
		/>
	)
}
