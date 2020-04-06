import foggyTown from 'Assets/images/foggy_town.jpg'
import React, { useEffect, useState } from 'react'
import { ClassicPageTemplate } from '../../modes/classic/classicPageTemplate'
import { classicBackgroundTextureStyle } from '../../shared/helpers/styles'
import { DrumMachineDisplay } from './drumMachineDisplay'
import { createPercussionInstrument } from './helpers'
import { BeatUnit, IPercussionSequence } from './music.types'

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

const DifferentBeatUnits: IPercussionSequence = {
	author: 'Steffee',
	tracks: [
		{
			instrument: Kick,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 1, 0],
		},
		{
			instrument: Snare,
			smallestBeatUnit: 16,
			length: 16,
			pattern: [0, 0, 0, 0, 1, 0, 1],
		},
		{
			instrument: OpenHat,
			smallestBeatUnit: 32,
			length: 4,
			pattern: [0, 0, 1],
		},
		{
			instrument: ClosedHat,
			smallestBeatUnit: 16,
			length: 3,
			pattern: [1, 0, 0],
		},
	],
}

export function DrumMachinePage(): JSX.Element {
	const [smallestBeatUnit, setSmallestBeatUnit] = useState<BeatUnit | undefined>()
	// (TODO) implement pattern selection
	const [sequence, setSequence] = useState<IPercussionSequence>(DifferentBeatUnits)

	// automatically choose smallest beat unit of any track in the sequence
	// (TODO) use least common multiple to determine barLength
	useEffect(() => {
		let newSmallestBeatUnit: BeatUnit = 1
		for (const track of sequence.tracks) {
			if (track.smallestBeatUnit > newSmallestBeatUnit) {
				newSmallestBeatUnit = track.smallestBeatUnit
			}
		}
		if (newSmallestBeatUnit !== smallestBeatUnit) {
			setSmallestBeatUnit(newSmallestBeatUnit)
		}
	}, [sequence])

	return (
		<ClassicPageTemplate
			Content={
				<div>
					{smallestBeatUnit && (
						<DrumMachineDisplay
							sequence={sequence}
							beatUnit={smallestBeatUnit}
							length={16}
							barLength={4}
						/>
					)}
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
