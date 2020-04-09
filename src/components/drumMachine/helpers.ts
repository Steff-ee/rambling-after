import { getRandomInstrumentColor } from './colors'
import { IPercussionInstrument } from './music.types'

/**
 * Creates a percussion instrument with random color.
 */
export function createPercussionInstrument(name: string): IPercussionInstrument {
	return {
		name,
		isPercussion: true,
		color: getRandomInstrumentColor(),
	}
}

export const defaultBPM = 60
export const minBPM = 1
export const maxBPM = 300

/**
 * Gets number of milliseconds per note
 *
 * Assumes 60BPM, where a beat has a beat unit of one note
 */
export function getBeatTime(beatUnit: number, BPM: number = defaultBPM): number {
	return Math.round((1000 * defaultBPM) / BPM / beatUnit)
}
