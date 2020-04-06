import React from 'react'
import { DrumMachineDisplay } from './drumMachineDisplay'
import { IPercussionInstrument, IPercussionSequence } from './music.types'

const Kick: IPercussionInstrument = {
	name: 'Kick',
	isPercussion: true,
}

const Snare: IPercussionInstrument = {
	name: 'Snare',
	isPercussion: true,
}

const OpenHat: IPercussionInstrument = {
	name: 'OpenHat',
	isPercussion: true,
}

const ClosedHat: IPercussionInstrument = {
	name: 'ClosedHat',
	isPercussion: true,
}

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
		<div>
			<DrumMachineDisplay sequence={FourOnTheFloor} beatUnit={4} length={16} barLength={4} />
		</div>
	)
}
