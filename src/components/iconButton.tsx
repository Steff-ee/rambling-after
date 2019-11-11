import React from 'react'

export interface IIconButtonProps {
	icon: JSX.Element
	applyGrow: boolean
	disabled?: boolean
	onClick?: () => void

	/* Styling */
	width: string
	height: string
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
	WebkitTransform: 'scale(1.06)',
	transform: 'scale(1.06)',
}

/**
 * This is an atomic component:
 * It should avoid using Context and avoid behavior-specific props.
 */
export const IconButton: React.FunctionComponent<IIconButtonProps> = (
	props: IIconButtonProps
): JSX.Element => {
	const { icon, onClick, width, height, filter, applyGrow, disabled = false } = props

	let growStyle = growStyleBase
	if (applyGrow) {
		growStyle = growStyleHover
	}

	return (
		<div
			style={{
				width,
				height,
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
			{icon}
		</div>
	)
}
