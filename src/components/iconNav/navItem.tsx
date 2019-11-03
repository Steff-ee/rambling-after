import { ActionButton } from 'office-ui-fabric-react/lib'
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
	const { labelPosition, iconProps, onClick, label, width, height, labelWidth } = props

	if (labelPosition === NavItemLabelPosition.Right) {
		return (
			<div style={{ display: 'flex' }}>
				<ActionButton style={{ width, height }} iconProps={iconProps} onClick={onClick} />
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

	return <ActionButton style={{ width, height }} iconProps={iconProps} onClick={onClick} />
}
