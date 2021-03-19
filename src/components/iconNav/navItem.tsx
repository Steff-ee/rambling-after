import React, { useState } from 'react'
import { IconButton } from '../iconButton'
import { LabelPosition } from './iconNav.types'
import { NavLabel } from './navLabel'

export interface INavItemProps {
	id?: number
	icon: JSX.Element
	label: string
	labelPosition?: LabelPosition
	isSelected?: boolean
	disabled?: boolean

	/* Styling */
	width: string
	height: string
	color: string
	labelWidth?: string
	rootStyle?: React.CSSProperties
	labelTextStyle?: React.CSSProperties

	/* Callbacks */
	onClick?: () => void
	onMouseEnter?: (id: number) => void
	onMouseLeave?: (id: number) => void
}

const disabledFadeFilterValue = 'opacity(0.25)'

/**
 * This is a molecular component:
 * It should avoid using Context but it can have behavior-specific props.
 */
export const NavItem: React.FunctionComponent<INavItemProps> = (props) => {
	const {
		id,
		icon,
		onClick,
		label = '',
		width,
		height,
		color,
		onMouseEnter,
		onMouseLeave,
		labelPosition,
		labelWidth,
		rootStyle,
		labelTextStyle,
		isSelected = false,
		disabled = false,
	} = props
	const [isHovering, setIsHovering] = useState<boolean>(false)
	const filter = disabled ? disabledFadeFilterValue : ''
	let isSelectedStyle: React.CSSProperties = {}

	if (isSelected) {
		isSelectedStyle = {
			borderRadius: '3px',
			borderBottom: `2px solid ${color}`,
		}
	}

	let labelElement = <></>
	if (labelPosition !== undefined) {
		labelElement = (
			<NavLabel
				label={label}
				width={labelWidth || width}
				height={height}
				rootStyle={{
					textAlign: 'left',
				}}
				textStyle={labelTextStyle}
			/>
		)
	}

	const button = (
		<IconButton
			icon={icon}
			width={width}
			height={height}
			color={color}
			innerStyle={isSelectedStyle}
			onClick={onClick}
			filter={filter}
			applyGrow={isHovering}
			disabled={disabled}
		/>
	)

	return (
		<div
			aria-label={label}
			style={{ display: 'flex', ...rootStyle }}
			onMouseEnter={(): void => {
				if (!disabled) {
					setIsHovering(true)
					if (onMouseEnter && id !== undefined) {
						onMouseEnter(id)
					}
				}
			}}
			onMouseLeave={(): void => {
				if (!disabled) {
					setIsHovering(false)
					if (onMouseLeave && id !== undefined) {
						onMouseLeave(id)
					}
				}
			}}
		>
			{labelPosition === LabelPosition.Left && labelElement}
			{button}
			{labelPosition === LabelPosition.Right && labelElement}
		</div>
	)
}
