import React, { useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import { NavOrientation } from './iconNav.types'

export interface INavListLabelProps {
	labels: string[]
	currentLabelIndex: number
	orientation: NavOrientation

	/* Styling */
	width: string
	height: string
	rootStyle?: React.CSSProperties
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
	const {
		labels,
		currentLabelIndex,
		width,
		height,
		rootStyle,
		textStyle,
		onClick,
		orientation,
	} = props
	const [delayedIndex, setDelayedIndex] = useState<number>(currentLabelIndex)
	const indexChanging = delayedIndex !== currentLabelIndex
	const label = labels[delayedIndex]
	const isNavListLabelOpen = currentLabelIndex > -1
	const textSpringDuration = 200

	const [textSpring] = useSpring(() => ({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: textSpringDuration },
		onRest: (): void => {
			if (delayedIndex !== currentLabelIndex) {
				setDelayedIndex(currentLabelIndex)
			}
		},
		reset: indexChanging,
		reverse: indexChanging,
	}))

	const transform =
		orientation === NavOrientation.Left ? 'translate3d(-50%, 0, 0)' : 'translate3d(50%, 0, 0)'

	const transition = useTransition(isNavListLabelOpen, {
		from: { opacity: 0, transform },
		enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		leave: { opacity: 0, transform },
	})

	return (
		<>
			{transition(
				(rootTransition, item) =>
					item && (
						<animated.div
							aria-label={label}
							// @ts-ignore
							style={{
								display: 'flex',
								width,
								height,
								minWidth: '160px',
								cursor: 'pointer',
								...rootStyle,
								...rootTransition,
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
						</animated.div>
					)
			)}
		</>
	)
}
