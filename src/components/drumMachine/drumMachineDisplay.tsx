import React, { useMemo, useState } from 'react'
import { cellLength, cellMargin, DrumMachineCell } from './drumMachineCell'
import { IDrumMachineDisplayProps } from './drumMachineDisplay.types'
import { getBeatTime } from './helpers'
import { BeatUnit, DrumMachineCells, IPercussionTrack } from './music.types'
import { useRhythm } from './useRhythm'

const InstrumentNameWidth = '125px'

export function getLoopedTrack(
	track: IPercussionTrack,
	beatUnit: BeatUnit,
	length: number
): DrumMachineCells {
	// track has incompatible beat units, so fill with rests
	if (beatUnit < track.smallestBeatUnit) {
		return new Array(length).fill(0)
	}

	// pattern must be slowed down (add rests) to match the beat unit
	const pattern = track.pattern.slice(0)
	if (beatUnit > track.smallestBeatUnit) {
		for (let i = 0; i < beatUnit / track.smallestBeatUnit; i++) {
			// multiply i times, e.g. 16 / 4 = 4
			for (let j = pattern.length; j >= 1; j -= 2) {
				// intersperse zeroes between each beat
				pattern.splice(j, 0, 0)
			}
		}
	}

	let cells: DrumMachineCells = pattern
	while (cells.length < length) {
		cells = cells.concat(pattern)
	}

	return cells.slice(0, length)
}

export function DrumMachineRow(props: {
	track: IPercussionTrack
	rowNumber: number
	length: number
	barLength: number
	isHighlighted: boolean
	beatUnit: BeatUnit
	currentHitBeat: number | undefined
}): JSX.Element {
	const { track, rowNumber, beatUnit, length, barLength, isHighlighted, currentHitBeat } = props
	const cells = useMemo(() => getLoopedTrack(track, beatUnit, length), [track, beatUnit, length])
	const isDisabled = !track.instrument || beatUnit < track.smallestBeatUnit
	const instrumentName = track.instrument?.name ?? ''

	// (TODO) implement icons

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ width: InstrumentNameWidth, overflow: 'hidden', whiteSpace: 'nowrap' }}>
				{instrumentName}
			</div>
			{cells.map((cell, index) => (
				<DrumMachineCell
					key={`cell-${rowNumber}-${index}`}
					canBeHit={!!cell}
					isHighlighted={isHighlighted}
					isOnBeat={index % barLength === 0}
					isBeingHit={index === currentHitBeat}
					instrumentColor={track.instrument?.color}
					isDisabled={isDisabled}
				/>
			))}
		</div>
	)
}

export function DrumMachineDisplay(props: IDrumMachineDisplayProps): JSX.Element {
	const { sequence, length, barLength, beatUnit, isPlaying, BPM } = props
	// (TODO) implement row selection
	const [highlightedRow, setHighlightedRow] = useState<number | undefined>()
	const currentHitBeat = useRhythm(isPlaying, getBeatTime(beatUnit, BPM), length)

	return (
		<div>
			{sequence.tracks.map((track, index) => (
				<DrumMachineRow
					key={`track-${index}`}
					track={track}
					rowNumber={index}
					beatUnit={beatUnit}
					length={length}
					barLength={barLength}
					isHighlighted={index === highlightedRow}
					currentHitBeat={isPlaying ? currentHitBeat : undefined}
				/>
			))}
			<div style={{ display: 'flex', paddingLeft: InstrumentNameWidth }}>
				{new Array(length).fill(0).map((unused, index) => {
					let color = 'lightgrey'
					if (index % barLength === 0) {
						color = 'white'
					}

					return (
						<div
							key={`index-${index}`}
							style={{
								width: cellLength,
								height: cellLength,
								margin: cellMargin,
								textAlign: 'center',
								color,
							}}
						>
							{index + 1}
						</div>
					)
				})}
			</div>
		</div>
	)
}
