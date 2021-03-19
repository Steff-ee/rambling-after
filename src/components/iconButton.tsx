import React from 'react'

export interface IIconButtonProps {
	icon: JSX.Element
	applyGrow?: boolean
	disabled?: boolean
	onClick?: () => void

	/* Styling */
	color?: string
	innerStyle?: React.CSSProperties
	width?: string
	height?: string
	filter?: string
}

const growStyleBase: React.CSSProperties = {
	WebkitTransform: 'perspective(1px) translateZ(0)',
	transform: 'perspective(1px) translateZ(0)',
	WebkitTransitionProperty: 'transform',
	transitionProperty: 'transform',
}

const growStyleHover: React.CSSProperties = {
	...growStyleBase,
	WebkitTransform: 'scale(1.08)',
	transform: 'scale(1.08)',
}

/**
 * This is an atomic component:
 * It should avoid using Context and avoid behavior-specific props.
 */
export const IconButton: React.FunctionComponent<IIconButtonProps> = (props) => {
	const {
		icon,
		onClick,
		color,
		innerStyle,
		width = '64px',
		height = '64px',
		filter,
		applyGrow = false,
		disabled = false,
	} = props

	let growStyle = growStyleBase
	if (applyGrow) {
		growStyle = growStyleHover
	}

	return (
		<div
			style={{
				width,
				height,
				color,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				filter,
				cursor: disabled ? 'default' : 'pointer',
				...growStyle,
			}}
			onClick={(): void => {
				if (!disabled && onClick) {
					onClick()
				}
			}}
		>
			<div style={innerStyle}>{icon}</div>
		</div>
	)
}
