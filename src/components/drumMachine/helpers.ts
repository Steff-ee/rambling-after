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

/**
 * Gets number of milliseconds per note
 *
 * Assumes 60BPM, where a beat has a beat unit of one note
 */
export function getBeatTime(beatUnit: number): number {
	return Math.round(1000 / beatUnit)
}
