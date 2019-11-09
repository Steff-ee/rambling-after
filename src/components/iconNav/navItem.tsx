import React, { useContext } from 'react'
import { useChangeDelay } from '../../shared/presentational/hooks/useChangeDelay'
import { ColorsContext } from '../../shared/presentational/hooks/useColors'
import { getFade, IconButton } from '../iconButton'
import { INavItem, NavOrientation } from './iconNav.types'
const ReactHoverObserver = require('react-hover-observer').default

export enum NavItemLabelPosition {
	Right,
	Hover,
	None,
}

export type INavItemProps = Omit<INavItem, 'id'> & {
	labelPosition: NavItemLabelPosition
	width: string
	height: string
	labelWidth: string
	orientation: NavOrientation
	isSelected?: boolean
}

export type IInnerNavItemProps = INavItemProps & {
	isHovering: boolean
}

export const InnerNavItem: React.FunctionComponent<IInnerNavItemProps> = (
	props: IInnerNavItemProps
): JSX.Element => {
	let {
		labelPosition,
		icon,
		onClick,
		label,
		width,
		height,
		labelWidth,
		orientation,
		isHovering,
		isSelected,
	} = props
	const colors = useContext(ColorsContext)
	isSelected = isSelected || false
	console.log(isSelected)
	const { shouldFade, fadeFilter } = getFade({ isHovering, isSelected })

	const hoverDelay = 150
	let labelElement: JSX.Element | undefined
	const wasHovering = useChangeDelay(isHovering, hoverDelay)

	if (wasHovering) {
		if (labelPosition === NavItemLabelPosition.Hover) {
			const labelStyle = orientation === NavOrientation.Left ? { right: 0 } : { left: 0 }
			labelElement = (
				<div
					style={{
						position: 'absolute',
						display: 'flex',
						height,
						marginTop: height,
						backgroundColor: colors.secondary,
						color: colors.primary,
						minWidth: '160px',
						...labelStyle,
					}}
				>
					<div style={{ margin: 'auto', padding: '0 16px' }}>{label}</div>
				</div>
			)
		}
	}

	if (labelPosition === NavItemLabelPosition.Right) {
		labelElement = (
			<div
				style={{
					textAlign: 'left',
					paddingLeft: '4%',
					width: labelWidth,
					filter: shouldFade ? fadeFilter : '',
					cursor: 'pointer',
					display: 'flex',
				}}
				onClick={onClick}
			>
				<div style={{ margin: 'auto 0' }}>{label}</div>
			</div>
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

	if (labelElement) {
		return (
			<div style={{ display: 'flex' }}>
				{button}
				{labelElement}
			</div>
		)
	}

	return button
}

export const NavItem: React.FunctionComponent<INavItemProps> = (
	props: INavItemProps
): JSX.Element => {
	return (
		<ReactHoverObserver>
			{({ isHovering }: { isHovering: boolean }): JSX.Element => (
				<InnerNavItem {...props} isHovering={isHovering} />
			)}
		</ReactHoverObserver>
	)
}
