import React from 'react'
import { IconLayout, IIconNavProps, INavItem } from './iconNav.types'
import { NavItem as DefaultNavItem, NavItemLabelPosition } from './navItem'

// (TODO) add selected key

// (TODO) add hover styling

// (TODO) add opening/closing animation

export const IconNav: React.FunctionComponent<IIconNavProps> = (
	props: IIconNavProps
): JSX.Element => {
	const {
		navItems,
		iconLayout,
		showIconLabels,
		onIconsMenuIconClick,
		onRenderBelowContent,
		rootStyle,
		NavItem: InputNavItem,
	} = props
	const NavItem = InputNavItem ? InputNavItem : DefaultNavItem

	if (iconLayout === IconLayout.Horizontal) {
		return (
			<div
				style={{
					...rootStyle,
				}}
			>
				{navItems.map(
					(item: INavItem): JSX.Element => (
						<NavItem
							{...item}
							labelPosition={NavItemLabelPosition.Hover}
							key={item.id}
						/>
					)
				)}
			</div>
		)
	}

	const minWidth = '60px'
	const width = showIconLabels ? '300px' : minWidth
	const labelPosition = showIconLabels ? NavItemLabelPosition.Right : NavItemLabelPosition.None

	return (
		<div style={rootStyle}>
			<div style={{ display: 'inline-block', width }}>
				<div style={{ width: minWidth }}>
					<NavItem
						labelPosition={NavItemLabelPosition.None}
						iconProps={{ iconName: 'GlobalNavButton' }}
						onClick={onIconsMenuIconClick}
					/>
				</div>
				{navItems.map(
					(item: INavItem): JSX.Element => (
						<NavItem {...item} labelPosition={labelPosition} key={item.id} />
					)
				)}
				{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
			</div>
		</div>
	)
}
