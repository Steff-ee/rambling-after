import { debounce } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { useTextMorph } from './useTextMorph'

export type ITextSequence = Array<{
	texts: string[]
	wait: number
}>

/**
 * on hover:
 * morphs texts through the sequence provided, starting at index 0
 * will not begin morphing until having hovered for startTime milliseconds
 * will stop morphing when no longer hovering, though there is a delay
 *
 * @skip if true, this hook will do nothing except return the first texts in the sequence
 */
export const useTextMorphSequence = (textSequence: ITextSequence, skip = false): JSX.Element => {
	const isMounted = useRef<boolean>(true)
	const [isHovering, setIsHovering] = useState<boolean>(false)
	const [wasHovering, _setWasHovering] = useState<boolean>(false)
	const [currentIndex, _setCurrentIndex] = useState<number>(0)
	const hasBeenHovering = isHovering && wasHovering
	const isMorphing = hasBeenHovering || currentIndex > 0
	const nextText = isMorphing ? textSequence[currentIndex + 1] : textSequence[currentIndex]
	const { morphedTexts, isMorphFinished } = useTextMorph(
		textSequence[0].texts,
		nextText.texts,
		false,
		skip
	)

	// won't trigger state updates after mount
	const setWasHovering = (value: boolean): void => {
		if (isMounted.current) {
			_setWasHovering(value)
		}
	}

	// won't trigger state updates after mount
	const setCurrentIndex = (value: number): void => {
		if (isMounted.current) {
			_setCurrentIndex(value)
		}
	}

	useEffect(() => {
		return (): void => {
			isMounted.current = false
		}
	}, [])

	useEffect(() => {
		if (!skip && !isHovering) {
			debounce(setWasHovering, 1)(false)
		}
	}, [isHovering])

	// start or stop morphing because hovering state has definitely changed
	useEffect(() => {
		if (!skip) {
			if (hasBeenHovering) {
				// if we're definitely hovering and the current morph has finished, then advance
				if (isMorphFinished && textSequence.length > currentIndex + 2) {
					const currentWait = textSequence[currentIndex + 1].wait
					debounce(setCurrentIndex, currentWait)(currentIndex + 1)
				}
			} else if (!isHovering && !hasBeenHovering) {
				// if we're definitely not hovering, reset back to the start
				const endWait = textSequence[textSequence.length - 1].wait
				debounce(setCurrentIndex, endWait)(0)
			}
		}
	})

	if (skip) {
		return <>{textSequence[0].texts.join(' ')}</>
	}

	const startWait = textSequence[0].wait

	const onMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		setIsHovering(true)
		if (isMorphing) {
			setWasHovering(true)
		} else {
			debounce(setWasHovering, startWait)(true)
		}
	}

	const onMouseLeave = (): void => {
		setIsHovering(false)
		if (isMorphing) {
			setWasHovering(false)
		} else {
			debounce(setWasHovering, startWait)(false)
		}
	}

	return (
		<div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{morphedTexts.join(' ')}
		</div>
	)
}
