import React, { useState } from 'react'
import { useChangeDelay } from '../../shared/presentational/hooks/useChangeDelay'
import { IconButton } from '../iconButton'
import { LabelPosition } from './iconNav.types'
import { getFade } from './navHelpers'
import { NavLabel } from './navLabel'

export interface INavItemProps {
	icon: JSX.Element
	width: string
	height: string
	label: string
	labelPosition?: LabelPosition
	isSelected?: boolean
	onMouseEnter?: (label: string) => void
	onMouseLeave?: (label: string) => void
	onClick?: () => void
}

export const NavItem: React.FunctionComponent<INavItemProps> = (
	props: INavItemProps
): JSX.Element => {
	let {
		icon,
		onClick,
		label = '',
		width,
		height,
		isSelected,
		onMouseEnter,
		onMouseLeave,
		labelPosition,
	} = props
	const [isHovering, setIsHovering] = useState<boolean>(false)
	isSelected = isSelected || false
	const hoverDelay = 200
	const wasHovering = useChangeDelay(isHovering, hoverDelay)
	const { shouldFade, fadeFilter } = getFade({ isHovering: wasHovering, isSelected })
	const filter = shouldFade ? fadeFilter : ''

	let labelElement = <></>
	if (labelPosition !== undefined) {
		labelElement = (
			<NavLabel
				label={label}
				width={width}
				height={height}
				style={{
					textAlign: 'left',
					filter,
				}}
			/>
		)
	}

	const button = (
		<IconButton
			icon={icon}
			width={width}
			height={height}
			onClick={onClick}
			applyFade={shouldFade}
			applyGrow={isHovering}
		/>
	)

	return (
		<div
			aria-label={label}
			style={{ display: 'flex' }}
			onMouseEnter={(): void => {
				setIsHovering(true)
				if (onMouseEnter) {
					onMouseEnter(label)
				}
			}}
			onMouseLeave={(): void => {
				setIsHovering(false)
				if (onMouseLeave) {
					onMouseLeave(label)
				}
			}}
		>
			{labelPosition === LabelPosition.Left && labelElement}
			{button}
			{labelPosition === LabelPosition.Right && labelElement}
		</div>
	)
}
