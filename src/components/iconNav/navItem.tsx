import React, { useState } from 'react'
import { useChangeDelay } from '../../shared/presentational/hooks/useChangeDelay'
import { IconButton } from '../iconButton'
import { LabelPosition } from './iconNav.types'
import { getFade } from './navHelpers'
import { NavLabel } from './navLabel'

export interface INavItemProps {
	id?: number
	icon: JSX.Element
	label: string
	labelPosition?: LabelPosition
	isSelected?: boolean

	/* Styling */
	width: string
	height: string
	labelWidth?: string
	rootStyle?: React.CSSProperties
	labelTextStyle?: React.CSSProperties
	useHoverDelay?: boolean

	/* Callbacks */
	onClick: () => void
	onMouseEnter?: (id: number) => void
	onMouseLeave?: (id: number) => void
}

/**
 * This is a molecular component:
 * It should avoid using Context but it can have behavior-specific props.
 */
export const NavItem: React.FunctionComponent<INavItemProps> = (
	props: INavItemProps
): JSX.Element => {
	let {
		id,
		icon,
		onClick,
		label = '',
		width,
		height,
		isSelected,
		onMouseEnter,
		onMouseLeave,
		labelPosition,
		labelWidth,
		rootStyle,
		labelTextStyle,
		useHoverDelay = true,
	} = props
	const [isHovering, setIsHovering] = useState<boolean>(false)
	isSelected = isSelected || false
	const hoverDelay = 200
	const wasHovering = useChangeDelay(isHovering, hoverDelay, !useHoverDelay)
	const { shouldFade, fadeFilter } = getFade({ isHovering: wasHovering, isSelected })
	const filter = shouldFade ? fadeFilter : ''

	let labelElement = <></>
	if (labelPosition !== undefined) {
		labelElement = (
			<NavLabel
				label={label}
				width={labelWidth || width}
				height={height}
				rootStyle={{
					textAlign: 'left',
					filter,
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
			onClick={onClick}
			applyFade={shouldFade}
			applyGrow={isHovering}
		/>
	)

	return (
		<div
			aria-label={label}
			style={{ display: 'flex', ...rootStyle }}
			onMouseEnter={(): void => {
				setIsHovering(true)
				if (onMouseEnter && id !== undefined) {
					onMouseEnter(id)
				}
			}}
			onMouseLeave={(): void => {
				setIsHovering(false)
				if (onMouseLeave && id !== undefined) {
					onMouseLeave(id)
				}
			}}
		>
			{labelPosition === LabelPosition.Left && labelElement}
			{button}
			{labelPosition === LabelPosition.Right && labelElement}
		</div>
	)
}
