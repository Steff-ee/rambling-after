import {
	faMinusCircle,
	faPlayCircle,
	faPlusCircle,
	faStopCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { createPercussionInstrument, maxBPM, minBPM } from './helpers'
import { IPercussionSequence } from './music.types'

export const Kick = createPercussionInstrument('Kick')
export const Snare = createPercussionInstrument('Snare')
export const ClosedHat = createPercussionInstrument('Closed Hat')
export const OpenHat = createPercussionInstrument('Open Hat')

export const FourOnTheFloor: IPercussionSequence = {
	author: 'Splice',
	name: 'Four On The Floor',
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

export const DifferentBeatUnits: IPercussionSequence = {
	author: 'Steffee',
	name: 'Different Beat Units',
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
			length: 7,
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

export const SimpleTwoTrack: IPercussionSequence = {
	author: 'Steffee',
	name: 'Simple Two Track',
	tracks: [
		{
			instrument: Kick,
			smallestBeatUnit: 4,
			length: 4,
			pattern: [1, 0, 1, 0],
		},
		{
			instrument: Snare,
			smallestBeatUnit: 8,
			length: 8,
			pattern: [0, 0, 1, 0, 1, 0, 1, 0],
		},
	],
}

export const DefaultSequenceOptions = [FourOnTheFloor, DifferentBeatUnits, SimpleTwoTrack]
export const DropdownMenuItems = DefaultSequenceOptions.map((sequence, index) => (
	<MenuItem value={index} key={`sequence-${index}`}>
		{sequence.name}
	</MenuItem>
))
export const minLength = 16
export const maxLength = 32

export function PlayButton(props: {
	isEnabled: boolean
	isPlaying: boolean
	setIsPlaying: (value: boolean) => void
}): JSX.Element {
	const { isEnabled, isPlaying, setIsPlaying } = props
	const playIcon = isPlaying ? faStopCircle : faPlayCircle

	return (
		<div
			style={{ cursor: 'pointer' }}
			onClick={(): void => {
				if (isEnabled) {
					setIsPlaying(!isPlaying)
				}
			}}
		>
			<FontAwesomeIcon icon={playIcon} size={'lg'} />
		</div>
	)
}

export function LengthButtons(props: {
	isEnabled: boolean
	length: number
	setLength: (value: number) => void
}): JSX.Element {
	const { isEnabled, length, setLength } = props

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '60px',
			}}
		>
			<div
				style={{ cursor: 'pointer' }}
				onClick={(): void => {
					if (isEnabled && length > minLength) {
						setLength(length - 1)
					}
				}}
			>
				<FontAwesomeIcon icon={faMinusCircle} size={'lg'} />
			</div>
			<div
				style={{ cursor: 'pointer' }}
				onClick={(): void => {
					if (isEnabled && length < maxLength) {
						setLength(length + 1)
					}
				}}
			>
				<FontAwesomeIcon icon={faPlusCircle} size={'lg'} />
			</div>
		</div>
	)
}

export function BPMInput(props: { BPM: number; setBPM: (value: number) => void }): JSX.Element {
	const { BPM, setBPM } = props

	return (
		<div style={{ display: 'flex', width: '120px' }}>
			<div>BPM:</div>
			<div style={{ margin: '0 10px', minWidth: '35px' }}>{BPM}</div>
			<input
				type="range"
				style={{ width: '60px' }}
				min={minBPM}
				max={maxBPM}
				value={BPM}
				onChange={(event): void => setBPM(parseInt(event.target.value, 10))}
			/>
		</div>
	)
}

const useSelectStyles = makeStyles((theme) => ({
	select: {
		minWidth: '180px',
		backgroundColor: 'white',
		padding: '0px 10px',
		borderRadius: '3px',
	},
}))

export function SequenceSelect(props: {
	sequenceIndex: number | undefined
	setSequenceIndex: (value: number | undefined) => void
}): JSX.Element {
	const { sequenceIndex, setSequenceIndex } = props
	const classes = useSelectStyles()

	return (
		<Select
			id={'sequence-select'}
			className={classes.select}
			value={sequenceIndex ?? -1}
			onChange={(event): void => {
				const value = parseInt(event.target.value as string, 10)
				if (!Number.isNaN(value)) {
					setSequenceIndex(value)
				}
			}}
		>
			<MenuItem value={-1} key={'sequence-label'}>
				Select Sequence
			</MenuItem>
			{DropdownMenuItems}
		</Select>
	)
}
