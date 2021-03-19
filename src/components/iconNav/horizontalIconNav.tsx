import React, { useContext, useState } from 'react'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { MediaContext, MediaSize } from '../mediaProvider'
import { IHorizontalIconNavProps, INavItem, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'
import { NavListLabel } from './navListLabel'

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const HorizontalIconNav: React.FunctionComponent<IHorizontalIconNavProps> = (props) => {
	const {
		navItems,
		rootStyle,
		iconWidth = '64px',
		iconHeight = '64px',
		labelWidth = '248px',
		orientation,
		selectedId,
	} = props
	const [hoverIndex, setHoverIndex] = useState<number>(-1)
	const { navbarText: navbarTextColor, border: borderColor } = useColors()
	const mediaSize = useContext(MediaContext)

	const onMouseLeave = (index: number): void => {
		if (index === hoverIndex) {
			setHoverIndex(-1)
		}
	}

	let iconsOrientationStyle: React.CSSProperties
	let labelOrientationStyle: React.CSSProperties
	const sidePadding = mediaSize === MediaSize.Small ? '32px' : 0
	if (orientation === NavOrientation.Right) {
		iconsOrientationStyle = { right: sidePadding }
		labelOrientationStyle = { right: 0 }
	} else {
		iconsOrientationStyle = { left: sidePadding }
		labelOrientationStyle = { left: 0 }
	}

	return (
		<div style={rootStyle}>
			<div
				style={{
					display: 'flex',
					position: 'absolute',
					...iconsOrientationStyle,
				}}
			>
				{navItems.map(
					(item: INavItem, itemIndex: number): JSX.Element => (
						<NavItem
							{...item}
							width={iconWidth}
							height={iconHeight}
							color={navbarTextColor}
							key={item.id}
							id={itemIndex}
							isSelected={item.id === selectedId}
							onMouseEnter={setHoverIndex}
							onMouseLeave={onMouseLeave}
						/>
					)
				)}
			</div>
			<NavListLabel
				labels={navItems.map((item: INavItem): string => item.label)}
				currentLabelIndex={hoverIndex}
				height={iconHeight}
				width={labelWidth}
				orientation={orientation}
				rootStyle={{
					backgroundColor: borderColor,
					color: navbarTextColor,
					marginTop: iconHeight,
					position: 'absolute',
					...labelOrientationStyle,
				}}
			/>
		</div>
	)
}
