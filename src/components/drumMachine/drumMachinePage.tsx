import React, { useEffect, useState } from 'react'
import { SeasonalPageTemplate } from '../../modes/classic/seasonalPageTemplate'
import { DrumMachineDisplay } from './drumMachineDisplay'
import {
	BPMInput,
	DefaultSequenceOptions,
	LengthButtons,
	minLength,
	PlayButton,
	SequenceSelect,
} from './drumMachinePage.helpers'
import { defaultBPM } from './helpers'
import { BeatUnit } from './music.types'

export function DrumMachinePage(): JSX.Element {
	const [smallestBeatUnit, setSmallestBeatUnit] = useState<BeatUnit | undefined>()
	const [isPlaying, setIsPlaying] = useState(false)
	const [length, setLength] = useState(minLength)
	const [BPM, setBPM] = useState(defaultBPM)
	const [sequenceIndex, setSequenceIndex] = useState<number | undefined>()
	const sequence = sequenceIndex === undefined ? undefined : DefaultSequenceOptions[sequenceIndex]

	// automatically choose smallest beat unit of any track in the sequence
	// (TODO) use least common multiple to determine barLength
	const barLength = 4
	useEffect(() => {
		if (sequence) {
			let newSmallestBeatUnit: BeatUnit = 1
			for (const track of sequence.tracks) {
				if (track.smallestBeatUnit > newSmallestBeatUnit) {
					newSmallestBeatUnit = track.smallestBeatUnit
				}
			}
			if (newSmallestBeatUnit !== smallestBeatUnit) {
				setSmallestBeatUnit(newSmallestBeatUnit)
			}
		}
	}, [sequence])

	const isSequenceSelected = !!sequence

	return (
		<SeasonalPageTemplate
			Content={
				<div style={{ backgroundColor: 'black', color: 'white', padding: '16px 20px' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingBottom: '10px',
							height: '40px',
							lineHeight: '40px',
						}}
					>
						{isSequenceSelected && (
							<PlayButton
								isEnabled={true}
								isPlaying={isPlaying}
								setIsPlaying={setIsPlaying}
							/>
						)}
						{isSequenceSelected && <BPMInput BPM={BPM} setBPM={setBPM} />}
						<SequenceSelect
							sequenceIndex={sequenceIndex}
							setSequenceIndex={setSequenceIndex}
						/>
						{isSequenceSelected && (
							<LengthButtons isEnabled={true} length={length} setLength={setLength} />
						)}
					</div>
					{smallestBeatUnit && sequence && (
						<DrumMachineDisplay
							sequence={sequence}
							beatUnit={smallestBeatUnit}
							length={length}
							barLength={barLength}
							isPlaying={isPlaying}
							BPM={BPM}
						/>
					)}
				</div>
			}
			selectedPivotTitle={''}
			setPivot={(): void => {
				return
			}}
			pivotsItems={[]}
			showPostsNav={false}
		/>
	)
}
