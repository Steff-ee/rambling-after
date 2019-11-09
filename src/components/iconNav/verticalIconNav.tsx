import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IIconNavProps, INavItem } from './iconNav.types'
import { LabelPosition, NavItem } from './navItem'

// (TODO) add opening/closing animation

export const VerticalIconNav: React.FunctionComponent<IIconNavProps> = (
	props: IIconNavProps
): JSX.Element => {
	const {
		navItems,
		showIconLabels,
		onIconsMenuIconClick,
		onRenderBelowContent,
		rootStyle,
		iconWidth = '64px',
		iconHeight = '64px',
		labelWidth = '248px',
		selectedId,
	} = props

	return (
		<div style={rootStyle}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<NavItem
					label={'Open nav menu'}
					width={iconWidth}
					height={iconHeight}
					// labelWidth={labelWidth}
					labelPosition={LabelPosition.Right}
					icon={<FontAwesomeIcon icon={faBars} size={'lg'} />}
					onClick={onIconsMenuIconClick}
					isSelected={true}
				/>
				{navItems.map(
					(item: INavItem): JSX.Element => (
						<NavItem
							{...item}
							width={iconWidth}
							height={iconHeight}
							// labelWidth={labelWidth}
							labelPosition={LabelPosition.Right}
							key={item.id}
							isSelected={item.id === selectedId}
						/>
					)
				)}
				{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
			</div>
		</div>
	)
}
