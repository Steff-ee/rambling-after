import { useEffect, useState } from 'react'

/**
 *
 * @param enabled Whether the rhythm is currently playing or not
 * @param beatLength How long before each beat, in milliseconds
 * @param maxBeatCount The beat count will loop back to zero whenever it hits the max
 * @return Count of beats that have happened
 */
export function useRhythm(enabled: boolean, beatLength: number, maxBeatCount: number): number {
	const [beatCount, setBeatCount] = useState(0)

	useEffect(() => {
		if (enabled) {
			setTimeout(() => {
				setBeatCount((beatCount + 1) % maxBeatCount)
			}, beatLength)
		}
	}, [enabled, beatCount])

	return beatCount
}
