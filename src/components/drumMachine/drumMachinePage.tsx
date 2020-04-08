import React, { useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { SeasonalPageTemplate } from '../../modes/classic/seasonalPageTemplate'
import { DrumMachineDisplay } from './drumMachineDisplay'
import {
	DefaultSequenceOptions,
	DropdownOptions,
	LengthButtons,
	minLength,
	PlayButton,
} from './drumMachinePage.helpers'
import { BeatUnit } from './music.types'

export function DrumMachinePage(): JSX.Element {
	const [smallestBeatUnit, setSmallestBeatUnit] = useState<BeatUnit | undefined>()
	const [isPlaying, setIsPlaying] = useState(false)
	const [length, setLength] = useState(minLength)
	// (TODO) implement pattern selection
	const [sequenceIndex, setSequenceIndex] = useState<number | undefined>()
	const sequence = sequenceIndex === undefined ? undefined : DefaultSequenceOptions[sequenceIndex]

	// automatically choose smallest beat unit of any track in the sequence
	// (TODO) use least common multiple to determine barLength
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

	return (
		<SeasonalPageTemplate
			Content={
				<div style={{ backgroundColor: 'black', color: 'white', padding: '16px 20px' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingBottom: '5px',
							height: '40px',
							lineHeight: '40px',
						}}
					>
						<PlayButton
							isEnabled={!!sequence}
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
						/>
						<Dropdown
							width={'210px'}
							selection={true}
							simple={true}
							options={DropdownOptions}
							placeholder={'Choose sequence'}
							onChange={(e, { value }): void => setSequenceIndex(value as number)}
						/>
						<LengthButtons
							isEnabled={!!sequence}
							length={length}
							setLength={setLength}
						/>
					</div>
					{smallestBeatUnit && sequence && (
						<DrumMachineDisplay
							sequence={sequence}
							beatUnit={smallestBeatUnit}
							length={length}
							barLength={4}
							isPlaying={isPlaying}
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
