import React, { useState } from 'react'
import { useChangeDelay } from '../../shared/presentational/hooks/useChangeDelay'
import { IconButton } from '../iconButton'
import { NavOrientation } from './iconNav.types'
import { getFade } from './navHelpers'
import { NavLabel } from './navLabel'

// (TODO) remove package
// const ReactHoverObserver = require('react-hover-observer').default

export enum LabelPosition {
	Left,
	Right, // (TODO)
	Hide,
}

export type INavItemProps = {
	icon: JSX.Element
	onClick?: () => void
	width: string
	height: string
	orientation?: NavOrientation // (TODO)
	labelPosition: LabelPosition
	label?: string
	isSelected?: boolean
	onMouseEnter?: (label: string) => void
	onMouseLeave?: (label: string) => void
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
	if (labelPosition !== LabelPosition.Hide) {
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
			{button}
			{labelElement}
		</div>
	)
}
