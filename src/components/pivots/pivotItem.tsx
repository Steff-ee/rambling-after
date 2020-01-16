import React from 'react'
import { IPivotItemProps } from './pivots.types'

export const PivotItem: React.FunctionComponent<IPivotItemProps> = (
	props: IPivotItemProps
): JSX.Element => {
	const {
		style: inputStyle,
		text,
		isActive,
		isActiveStyle,
		onClick,
		onMouseEnter,
		onMouseLeave,
	} = props

	const style: React.CSSProperties = {
		cursor: 'pointer',
		...(isActive ? isActiveStyle : {}),
		...inputStyle,
	}

	return (
		<div
			style={style}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{text}
		</div>
	)
}
