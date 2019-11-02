import { ActionButton } from 'office-ui-fabric-react/lib'
import React from 'react'
import { INavItem } from './iconNav.types'

const navItemStyle = {
	width: '64px',
	height: '64px',
}

export enum NavItemLabelPosition {
	Right,
	Hover,
	None,
}

export type INavItemProps = Omit<INavItem, 'id'> & {
	labelPosition: NavItemLabelPosition
}

export const NavItem: React.FunctionComponent<INavItemProps> = (
	props: INavItemProps
): JSX.Element => {
	const { labelPosition, iconProps, onClick, label } = props

	return (
		<div>
			<ActionButton style={navItemStyle} iconProps={iconProps} onClick={onClick} />
			{labelPosition === NavItemLabelPosition.Right && <div>{label}</div>}
		</div>
	)
}
