import { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useTextMorph } from './useTextMorph'

export type ITextSequence = Array<{
	texts: string[]
	wait: number
}>

export const useTextMorphSequence = (textSequence: ITextSequence): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const [isHovering, setIsHovering] = useState<boolean>(false)
	const nextText = isHovering ? textSequence[currentIndex + 1] : textSequence[currentIndex]
	const { morphedTexts, isMorphFinished } = useTextMorph(
		textSequence[0].texts,
		nextText.texts,
		false
	)

	const onMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		// (TODO) make the sequence only start after hovering for a minimum amount of time
		// (the commented-out code merely delays the sequence, not prevents it)
		// const startWait = textSequence[0].wait
		debounce(() => setIsHovering(true), 0)()
	}

	const onMouseLeave = (): void => {
		const endWait = textSequence[textSequence.length - 1].wait
		if (isHovering) {
			debounce(() => setIsHovering(false), endWait)()
		}
	}

	useEffect(() => {
		if (isHovering) {
			if (isMorphFinished && textSequence.length > currentIndex + 2) {
				const currentWait = textSequence[currentIndex + 1].wait
				debounce(() => {
					setCurrentIndex(currentIndex + 1)
				}, currentWait)()
			}
		} else {
			setCurrentIndex(0)
		}
	})

	return (
		<div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{morphedTexts.join(' ')}
		</div>
	)
}
