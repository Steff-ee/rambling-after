import { useLayoutEffect, useRef } from 'react'

export interface IScrollPosition {
	x: number
	y: number
}

export const getScrollPosition = (element: React.RefObject<HTMLDivElement>): IScrollPosition => {
	console.log('element && element.current', element && element.current)
	const target = element && element.current ? element.current : document.body
	const position = target.getBoundingClientRect()

	return { x: position.left, y: position.top }
}

export const useScroll = (
	element: React.RefObject<HTMLDivElement>,
	callback: (prevPosition: IScrollPosition, currentPosition: IScrollPosition) => void
): void => {
	const position = useRef(getScrollPosition(element))
	const wait = 100

	let throttleTimeout: ReturnType<typeof setTimeout> | undefined

	const onScroll = (): void => {
		const currentPosition = getScrollPosition(element)
		console.log('onScroll:', position.current, currentPosition)
		callback(position.current, currentPosition)
		position.current = currentPosition
		throttleTimeout = undefined
	}

	useLayoutEffect(() => {
		const onScrollThrottled = (): void => {
			if (throttleTimeout === undefined) {
				throttleTimeout = setTimeout(onScroll, wait)
			}
		}

		if (element && element.current) {
			element.current.addEventListener('scroll', onScrollThrottled)
		}

		return (): void => {
			if (element && element.current) {
				element.current.removeEventListener('scroll', onScrollThrottled)
			}
		}
	})
}
