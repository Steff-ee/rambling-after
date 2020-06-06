import { useEffect, useState } from 'react'
import { useTextMorph } from './useTextMorph'

export type ITextSequence = Array<{
	texts: string[]
}>

export interface IUseTextMorphClickSequence {
	doNextMorph: () => void
	morphedText: string
}

/**
 * Will morph when the callback is called, but only if not already undergoing a morph
 */
export const useTextMorphClickSequence = (
	textSequence: ITextSequence,
	skip = false
): IUseTextMorphClickSequence => {
	const [isMorphing, setIsMorphing] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const nextText = isMorphing
		? textSequence[(currentIndex + 1) % textSequence.length]
		: textSequence[currentIndex]
	const { morphedTexts, isMorphFinished } = useTextMorph(
		textSequence[currentIndex].texts,
		nextText.texts,
		false,
		skip
	)

	useEffect(() => {
		if (isMorphFinished && isMorphing) {
			setIsMorphing(false)
			setCurrentIndex((currentIndex + 1) % textSequence.length)
		}
	}, [isMorphFinished])

	const doNextMorph = () => {
		if (!isMorphing) {
			setIsMorphing(true)
		}
	}

	return { morphedText: morphedTexts.join(' '), doNextMorph }
}
