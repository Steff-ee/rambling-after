import React, { useState } from 'react'
import { DrumMachineCell } from './drumMachineCell'
import { IDrumMachineDisplayProps } from './drumMachineDisplay.types'
import { getBeatTime } from './helpers'
import { DrumMachineCells, IPercussionTrack } from './music.types'
import { useRhythm } from './useRhythm'

export function getLoopedTrack(
	pattern: IPercussionTrack['pattern'],
	length: number
): DrumMachineCells {
	let cells: DrumMachineCells = pattern.slice(0)
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
	currentHitBeat: number | undefined
}): JSX.Element {
	const { track, rowNumber, length, barLength, isHighlighted, currentHitBeat } = props
	const cells = getLoopedTrack(track.pattern, length)

	// (TODO V2) implement icons

	return (
		<div style={{ display: 'flex' }}>
			{cells.map((cell, index) => (
				<DrumMachineCell
					key={`cell-${rowNumber}-${index}`}
					canBeHit={!!cell}
					isHighlighted={isHighlighted}
					isOnBeat={index % barLength === 0}
					isBeingHit={index === currentHitBeat}
					instrument={track.instrument}
				/>
			))}
		</div>
	)
}

export function DrumMachineDisplay(props: IDrumMachineDisplayProps): JSX.Element {
	const { sequence, length, barLength, beatUnit } = props
	// (TODO V2) implement row selection
	const [highlightedRow, setHighlightedRow] = useState<number | undefined>()
	const [isPlaying, setIsPlaying] = useState(false)
	const currentHitBeat = useRhythm(isPlaying, getBeatTime(beatUnit), length)

	const buttonText = isPlaying ? 'Stop' : 'Play'

	// (TODO) implement pattern selection

	// (TODO V2) implement numbers row

	// (TODO V2) implement add track button

	return (
		<div style={{ backgroundColor: 'black', color: 'white', padding: '16px 20px' }}>
			<div>
				<div
					style={{ cursor: 'pointer', lineHeight: '36px', padding: '0px 10px' }}
					onClick={(): void => setIsPlaying(!isPlaying)}
				>
					{buttonText}
				</div>
			</div>
			{sequence.tracks.map((track, index) => (
				<DrumMachineRow
					key={`track-${index}`}
					track={track}
					rowNumber={index}
					length={length}
					barLength={barLength}
					isHighlighted={index === highlightedRow}
					currentHitBeat={isPlaying ? currentHitBeat : undefined}
				/>
			))}
		</div>
	)
}
