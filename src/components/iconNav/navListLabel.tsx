import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

export interface INavListLabelProps {
	labels: string[]
	currentLabelIndex: number

	/* Styling */
	width: string
	height: string
	rootStyle: React.CSSProperties
	textStyle?: React.CSSProperties

	/* Callbacks */
	onClick?: (label: string) => void
}

/**
 * This is a molecular component:
 * It should avoid using Context but it can have behavior-specific props.
 *
 * (Even though it is not made of other atoms, we still consider this molecular because it is opinionated on styling (for animation))
 */
export const NavListLabel: React.FunctionComponent<INavListLabelProps> = (
	props: INavListLabelProps
): JSX.Element => {
	const { labels, currentLabelIndex, width, height, rootStyle, textStyle, onClick } = props
	const [delayedIndex, setDelayedIndex] = useState<number>(currentLabelIndex)
	const indexChanging = delayedIndex !== currentLabelIndex
	const label = labels[delayedIndex]
	console.log('curr: ', currentLabelIndex, ' del: ', delayedIndex, ' d(x): ', indexChanging)

	const [textSpring] = useSpring(() => ({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 250 },
		onRest: (): void => {
			if (delayedIndex !== currentLabelIndex) {
				setDelayedIndex(currentLabelIndex)
			}
		},
		reset: indexChanging,
		reverse: indexChanging,
	}))

	// (TODO) how to nest animated divs

	// const [rootSpring] = useSpring(() => ({
	// 	to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
	// 	from: { opacity: 0, transform: 'translate3d(0, -50%, 0)' },
	// }))

	return (
		<div
			aria-label={label}
			// @ts-ignore
			style={{
				display: 'flex',
				width,
				height,
				minWidth: '160px',
				cursor: 'pointer',
				...rootStyle,
				// ...rootSpring,
			}}
			onClick={(): void => {
				if (onClick) {
					onClick(label)
				}
			}}
		>
			<animated.div
				// @ts-ignore
				style={{
					margin: 'auto',
					padding: '16px',
					...textStyle,
					...textSpring,
				}}
			>
				{label}
			</animated.div>
		</div>
	)
}
