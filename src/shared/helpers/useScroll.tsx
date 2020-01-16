import { useLayoutEffect, useRef } from 'react'

export interface IScrollPosition {
	x: number
	y: number
}

export const getScrollPosition = (element: React.RefObject<HTMLDivElement>): IScrollPosition => {
	const target = element && element.current ? element.current : document.body
	const position = target.getBoundingClientRect()

	return { x: position.left, y: position.top }
}

export const useScroll = (
	scrollElement: React.RefObject<HTMLDivElement>,
	positionElement: React.RefObject<HTMLDivElement>,
	callback: (currentPosition: IScrollPosition, prevPosition: IScrollPosition) => void,
	skip?: boolean
): void => {
	const position = useRef(getScrollPosition(positionElement))
	const wait = 250

	let throttleTimeout: ReturnType<typeof setTimeout> | undefined

	const onScroll = (): void => {
		const currentPosition = getScrollPosition(positionElement)
		callback(currentPosition, position.current)
		position.current = currentPosition
		throttleTimeout = undefined
	}

	useLayoutEffect(() => {
		if (skip) {
			return undefined
		}

		const onScrollThrottled = (): void => {
			if (throttleTimeout === undefined) {
				throttleTimeout = setTimeout(onScroll, wait)
			}
		}

		if (scrollElement && scrollElement.current) {
			scrollElement.current.addEventListener('scroll', onScrollThrottled)
		}

		return (): void => {
			if (scrollElement && scrollElement.current) {
				scrollElement.current.removeEventListener('scroll', onScrollThrottled)
			}
		}
	})
}
