import { IColor } from './colors'

/**
 * Supported beat units. They translate like so:
 *      1 - note
 *      2 - half note
 *      4 - quarter note
 *
 * (We could allow any conceivable beat unit, but then we'd be likely to run into performance issues or overflow errors.
 * This should be sufficient for most users.)
 */
export type BeatUnit = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256

/**
 * 1 represents a beat, 0 represents a rest
 * See further explanation below at IPercussionTrack.pattern
 */
export type DrumMachineCells = Array<1 | 0>

export interface IInstrument {
	/**
	 * Name of the instrument, e.g. 'Saxophone'.
	 */
	name: string

	/**
	 * Instrument can only be used in a DrumMachine iff isPercussion is true.
	 */
	isPercussion: boolean

	/**
	 * Tags for users to search by, e.g. 'Wind', 'Digital', 'Celtic'.
	 */
	tags?: string[]

	/**
	 * STYLING
	 */

	/**
	 * Icon to represent the instrument
	 */
	icon?: JSX.Element
}

export interface IPercussionInstrument extends IInstrument {
	isPercussion: true
}

export interface ITrack {
	/**
	 * Which instrument is playing on this track.
	 * If undefined, the track will not play during playback.
	 */
	instrument: IInstrument | undefined

	/**
	 * Amplitude of the track's audio during playback.
	 */
	volume?: number

	/**
	 * STYLING
	 */

	/**
	 * Color for highlighting the audo clip or drum track cells.
	 */
	color?: IColor
}

export interface IPercussionTrack extends ITrack {
	/**
	 * Only Percussion instruments allowed.
	 */
	instrument: IPercussionInstrument | undefined

	/**
	 * Defines the smallest beat unit used in the pattern.
	 */
	smallestBeatUnit: BeatUnit

	/**
	 * Each element in the array represents a single beat unit.
	 * The drum hits for each beat that is not undefined.
	 *
	 * IMPORTANT NOTE:
	 * Each beat is currently equal to the smallestBeatUnit.
	 *
	 * Explanation:
	 * In the future, if we want to allow more complex time signatures for Percussion tracks, we will switch to:
	 *          Array<BeatUnit | 0>
	 * (This is why we use <1 | 0> instead of a simple boolean.)
	 */
	pattern: DrumMachineCells

	/**
	 * Length of the track.
	 * This determines how frequently the track loops.
	 * (If length is longer than the pattern length, the pattern will be cut off and loop early.)
	 */
	length: number
}

export type IPercussionSequence = {
	/**
	 * Name of the sequence creator
	 */
	author: string

	/**
	 * List of tracks
	 */
	tracks: IPercussionTrack[]
}
