import React from 'react'

export interface IIconButtonProps {
	icon: JSX.Element
	width: string
	height: string
	isFaded: boolean
	onClick?: () => void
}

const fadeFilterValue = 'invert(0.5)'

export const getFade = (options: {
	isHovering: boolean
	isSelected: boolean
}): { shouldFade: boolean; fadeFilter: string } => {
	const { isHovering, isSelected } = options
	const shouldFade = !isHovering && !isSelected

	return { shouldFade, fadeFilter: fadeFilterValue }
}

export const IconButton: React.FunctionComponent<IIconButtonProps> = (
	props: IIconButtonProps
): JSX.Element => {
	const { icon, onClick, width, height, isFaded } = props

	let filter = ''
	if (isFaded) {
		filter = fadeFilterValue
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
			}}
			onClick={onClick}
		>
			{icon}
		</div>
	)
}
