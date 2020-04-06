import React, { useState } from 'react'
import { DrumMachineCell } from './drumMachineCell'
import { IDrumMachineDisplayProps } from './drumMachineDisplay.types'
import { DrumMachineCells, IPercussionTrack } from './music.types'

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

	// (TODO) implement icons

	return (
		<div>
			{cells.map((cell, index) => (
				<DrumMachineCell
					key={`cell-${rowNumber}-${index}`}
					canBeHit={!!cell}
					isHighlighted={isHighlighted}
					isOnBeat={index % barLength === 0}
					isBeingHit={index === currentHitBeat}
					instrumentColor={track.color}
				/>
			))}
		</div>
	)
}

export function DrumMachineDisplay(props: IDrumMachineDisplayProps): JSX.Element {
	const { sequence, length, barLength } = props
	// (TODO) implement row selection
	const [highlightedRow, setHighlightedRow] = useState<number | undefined>()
	// (TODO) implement hitting
	const [currentHitBeat, setCurrentHitBeat] = useState<number | undefined>()
	// (TODO) implement play button
	const [isPlaying, setIsPlaying] = useState(false)

	// (TODO) implement numbers row

	// (TODO) implement add track button

	// (TODO) implement pattern selection

	return (
		<div>
			{sequence.tracks.map((track, index) => (
				<DrumMachineRow
					key={`track-${index}`}
					track={track}
					rowNumber={index}
					length={length}
					barLength={barLength}
					isHighlighted={index === highlightedRow}
					currentHitBeat={currentHitBeat}
				/>
			))}
		</div>
	)
}
