import React, { useState } from 'react'
import { IHorizontalIconNavProps, INavItem, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'
import { NavLabel } from './navLabel'

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
	const [hoverLabel, setHoverLabel] = useState<string | undefined>(undefined)

	const onMouseLeave = (label: string): void => {
		if (label === hoverLabel) {
			setHoverLabel(undefined)
		}
	}

	const orientationStyle = orientation === NavOrientation.Left ? { right: 0 } : { left: 0 }

	return (
		<div
			style={{
				display: 'flex',
				...rootStyle,
			}}
		>
			{navItems.map(
				(item: INavItem): JSX.Element => (
					<NavItem
						{...item}
						width={iconWidth}
						height={iconHeight}
						key={item.id}
						isSelected={item.id === selectedId}
						onMouseEnter={setHoverLabel}
						onMouseLeave={onMouseLeave}
					/>
				)
			)}
			{hoverLabel && (
				<NavLabel
					label={hoverLabel}
					height={iconHeight}
					width={labelWidth}
					style={{
						...orientationStyle,
						position: 'absolute',
						marginTop: iconHeight,
					}}
				/>
			)}
		</div>
	)
}
