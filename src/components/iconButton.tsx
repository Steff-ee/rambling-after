import React from 'react'

export interface IIconButtonProps {
	icon: JSX.Element
	width: string
	height: string
	applyFade: boolean
	applyGrow: boolean
	onClick?: () => void
}

const fadeFilterValue = 'invert(0.44)'

export const getFade = (options: {
	isHovering: boolean
	isSelected: boolean
}): { shouldFade: boolean; fadeFilter: string } => {
	const { isHovering, isSelected } = options
	const shouldFade = !isHovering && !isSelected

	return { shouldFade, fadeFilter: fadeFilterValue }
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

export const IconButton: React.FunctionComponent<IIconButtonProps> = (
	props: IIconButtonProps
): JSX.Element => {
	const { icon, onClick, width, height, applyFade, applyGrow } = props

	let filter = ''
	if (applyFade) {
		filter = fadeFilterValue
	}

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
				cursor: 'pointer',
				...growStyle,
			}}
			onClick={onClick}
		>
			{icon}
		</div>
	)
}
