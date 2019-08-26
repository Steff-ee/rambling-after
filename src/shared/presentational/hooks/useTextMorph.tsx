import { random } from 'lodash'
import { useState } from 'react'

const morphDelay = 128

const randomMorph = (text: string, prevText: string): string => {
	// construct space-filled arrays of same length to deal with length discrepancies
	const maxLength = Math.max(text.length, prevText.length)
	const textArray = new Array(maxLength).fill(' ')
	text.split('').forEach((char, index) => {
		textArray[index] = char
	})
	const prevTextArray = new Array(maxLength).fill(' ')
	prevText.split('').forEach((char, index) => {
		prevTextArray[index] = char
	})

	// randomizes which character will be found first to swap
	let i = random(maxLength)

	while (i < i + maxLength) {
		const prevChar = prevTextArray[i]
		const char = textArray[i]
		if (prevChar !== char) {
			prevTextArray[i] = textArray[i]
			break
		}
		i = (i + 1) % maxLength
	}

	return prevTextArray.join('').trim()
}

// precondition: texts.length is static
export const useTextMorph = (texts: string[], bypass = false): string[] => {
	const [prevTexts, setTexts] = useState<string[]>(texts)

	if (bypass) {
		return texts
	}

	const isMorphNeeded = texts.some((text, index) => text !== prevTexts[index])

	if (isMorphNeeded) {
		const newTexts = texts.map((text, index) => {
			const prevText = prevTexts[index]
			if (text !== prevText) {
				return randomMorph(text, prevText)
			}

			return text
		})

		setTimeout(() => setTexts(newTexts), morphDelay)
	}

	return prevTexts
}
