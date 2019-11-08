import { debounce, random } from 'lodash'
import { useState } from 'react'

const morphDelay = 96

// (TODO) improve the morphing algorithm when there is significant overlap not at index 0

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

const debounced = debounce((callback: () => void) => callback(), morphDelay)

/**
 * slowly morphs baseTexts into texts
 *
 * @skip if true, this hook will do nothing except return the base texts
 * precondition: texts.length is static
 */
export const useTextMorph = (
	baseTexts: string[],
	texts: string[],
	freshStart: boolean,
	skip = false
): { morphedTexts: string[]; isMorphFinished: boolean } => {
	const [prevTexts, setTexts] = useState<string[]>(baseTexts)
	const [shouldRestart, setShouldRestart] = useState<boolean>(true)

	if (skip) {
		return { morphedTexts: baseTexts, isMorphFinished: true }
	}

	const isMorphNeeded = !prevTexts || texts.some((text, index) => text !== prevTexts[index])

	if (isMorphNeeded) {
		const newTexts = texts.map((text, index) => {
			const prevText = shouldRestart ? baseTexts[index] : prevTexts[index]
			if (text !== prevText) {
				return randomMorph(text, prevText)
			}

			return text
		})

		debounced(() => {
			setTexts(newTexts)
			setShouldRestart(freshStart)
		})
	}

	return { morphedTexts: prevTexts, isMorphFinished: !isMorphNeeded }
}
