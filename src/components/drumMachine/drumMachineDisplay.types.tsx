import { IColor } from './colors'
import { BeatUnit, IPercussionSequence } from './music.types'

export interface IDrumMachineDisplayProps {
	/**
	 * Defines what kind of beat unit a single cell represents.
	 *
	 * Note: No tracks will be played that have a beatUnit less than this beatUnit.
	 */
	beatUnit: BeatUnit

	/**
	 * Length in beatUnits that the DrumMachine will display.
	 * Tracks will loop after length number of beatUnits.
	 */
	length: number

	/**
	 * List of tracks.
	 * Tracks in a sequence can be empty (no instrument) or invalid (incompatible beatUnit).
	 */
	sequence: IPercussionSequence

	/**
	 * STYLING
	 */

	/**
	 * Determines where to put visual indicator for bars.
	 */
	barLength: number
}

export interface IDrumMachineCellProps {
	/**
	 * Whether this cell can be hit during playback.
	 * If false, this cell is not one of the beats in the track's pattern.
	 */
	canBeHit: boolean

	/**
	 * Whether the user has clicked on the row that contains this cell.
	 */
	isHighlighted: boolean

	/**
	 * Whether this cell is at the end of a bar.
	 */
	isOnBeat: boolean

	/**
	 * During playback, whether this cell is currently being hit.
	 */
	isBeingHit: boolean

	/**
	 * Color that will be used when canBeHit is true.
	 * The color will be darkened or brightened based on other props.
	 */
	instrumentColor: IColor
}
