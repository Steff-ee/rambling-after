import React from 'react'
import { INavItem } from './iconNav.types'
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
}

export const NavItem: React.FunctionComponent<INavItemProps> = (
	props: INavItemProps
): JSX.Element => {
	const { labelPosition, icon, onClick, label, width, height, labelWidth } = props

	const button = (
		<ReactHoverObserver>
			{({ isHovering }: { isHovering: boolean }): JSX.Element => {
				let filter = ''
				if (isHovering) {
					filter = 'invert(0.5)'
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
						}}
						onClick={onClick}
					>
						{icon}
					</div>
				)
			}}
		</ReactHoverObserver>
	)

	if (labelPosition === NavItemLabelPosition.Right) {
		return (
			<div style={{ display: 'flex' }}>
				{button}
				<div
					style={{
						margin: 'auto 0',
						textAlign: 'left',
						paddingLeft: '4%',
						width: labelWidth,
					}}
				>
					{label}
				</div>
			</div>
		)
	}

	return button
}
