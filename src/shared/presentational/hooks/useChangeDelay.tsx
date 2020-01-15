import { useEffect, useState } from 'react'

/**
 * Changes from false > true are instant
 * Changes from true > false are delayed by delayLength milliseconds
 */
export const useChangeDelay = (propOn: boolean, delayLength: number, skip = false): boolean => {
	const [stateOn, setStateOn] = useState<boolean>(propOn)

	// (TODO) remove async callback after unmount
	useEffect(() => {
		if (!skip) {
			if (propOn) {
				// turning on: instant
				setStateOn(true)
			} else {
				// turning off: delayed
				setTimeout(() => {
					setStateOn(false)
				}, delayLength)
			}
		}
	}, [propOn])

	if (skip) {
		return propOn
	}

	return stateOn || propOn
}
