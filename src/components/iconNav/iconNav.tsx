import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IconLayout, IIconNavProps, INavItem } from './iconNav.types'
import { INavItemProps, NavItem as DefaultNavItem, NavItemLabelPosition } from './navItem'

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
		iconWidth,
		iconHeight,
		labelWidth,
		orientation,
		selectedId,
	} = props
	const NavItem = InputNavItem ? InputNavItem : DefaultNavItem
	const commonIconProps: Pick<
		INavItemProps,
		'width' | 'height' | 'labelWidth' | 'orientation'
	> = {
		width: iconWidth || '64px',
		height: iconHeight || '64px',
		labelWidth: labelWidth || '248px',
		orientation,
	}

	if (iconLayout === IconLayout.Horizontal) {
		return (
			<div
				style={{
					display: 'flex',
					...rootStyle,
				}}
			>
				{navItems.map(
					(item: INavItem, key: number): JSX.Element => (
						<NavItem
							{...commonIconProps}
							{...item}
							labelPosition={NavItemLabelPosition.Hover}
							key={item.id}
							isSelected={item.id === selectedId}
						/>
					)
				)}
			</div>
		)
	}

	const labelPosition = showIconLabels ? NavItemLabelPosition.Right : NavItemLabelPosition.None

	return (
		<div style={rootStyle}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<NavItem
					{...commonIconProps}
					labelPosition={NavItemLabelPosition.None}
					icon={<FontAwesomeIcon icon={faBars} size={'lg'} />}
					onClick={onIconsMenuIconClick}
				/>
				{navItems.map(
					(item: INavItem): JSX.Element => (
						<NavItem
							{...commonIconProps}
							{...item}
							labelPosition={labelPosition}
							key={item.id}
						/>
					)
				)}
				{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
			</div>
		</div>
	)
}
