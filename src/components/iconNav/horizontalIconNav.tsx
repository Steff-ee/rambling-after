import React, { useContext, useState } from 'react'
import { ColorsContext } from '../../shared/presentational/hooks/useColors'
import { IHorizontalIconNavProps, INavItem, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'
import { NavListLabel } from './navListLabel'

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const HorizontalIconNav: React.FunctionComponent<IHorizontalIconNavProps> = (
	props: IHorizontalIconNavProps
): JSX.Element => {
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
	const { primary, secondary } = useContext(ColorsContext)

	const onMouseLeave = (index: number): void => {
		if (index === hoverIndex) {
			setHoverIndex(-1)
		}
	}

	let orientationStyle
	if (orientation === NavOrientation.Right) {
		orientationStyle = { right: 0 }
	} else {
		orientationStyle = { left: 0 }
	}

	return (
		<div
			style={{
				display: 'flex',
				...rootStyle,
			}}
		>
			{navItems.map(
				(item: INavItem, itemIndex: number): JSX.Element => (
					<NavItem
						{...item}
						width={iconWidth}
						height={iconHeight}
						key={item.id}
						id={itemIndex}
						isSelected={item.id === selectedId}
						onMouseEnter={setHoverIndex}
						onMouseLeave={onMouseLeave}
					/>
				)
			)}
			<NavListLabel
				labels={navItems.map((item: INavItem): string => item.label)}
				currentLabelIndex={hoverIndex}
				height={iconHeight}
				width={labelWidth}
				orientation={orientation}
				rootStyle={{
					...orientationStyle,
					backgroundColor: secondary,
					color: primary,
					position: 'absolute',
					marginTop: iconHeight,
				}}
			/>
		</div>
	)
}
