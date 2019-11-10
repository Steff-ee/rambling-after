import React from 'react'
import { animated, useTransition } from 'react-spring'

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

	const transitions = useTransition(currentLabelIndex, (label) => label, {
		from: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
	})

	return (
		<>
			{transitions.map(({ item, props: styleProps, key }) => {
				const label = labels[item]

				return (
					<div
						aria-label={label}
						key={key}
						style={{
							display: 'flex',
							width,
							height,
							minWidth: '160px',
							cursor: 'pointer',
							...rootStyle,
						}}
						onClick={(): void => {
							if (onClick) {
								onClick(label)
							}
						}}
					>
						<animated.div
							style={{ margin: 'auto', padding: '16px', ...textStyle, ...styleProps }}
						>
							{label}
						</animated.div>
					</div>
				)
			})}
		</>
	)
}
