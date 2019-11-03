import React from 'react'
import { INavItem } from './iconNav.types'

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
		<div
			style={{
				width,
				height,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onClick={onClick}
		>
			{icon}
		</div>
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
