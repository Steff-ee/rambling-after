import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Colors } from '../../shared/helpers/constants'
import { HuesContext } from '../../shared/presentational/hooks/useHues'
import { INavItem, IVerticalIconNavProps, LabelPosition, NavOrientation } from './iconNav.types'
import { NavItem } from './navItem'

// (TODO) add opening/closing animation

/**
 * This is a macromolecular component:
 * I haven't decided what that means yet.
 */
export const VerticalIconNav: React.FunctionComponent<IVerticalIconNavProps> = (
	props: IVerticalIconNavProps
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
		orientation,
	} = props
	const { accent } = useContext(HuesContext)

	const style: React.CSSProperties = {
		backgroundColor: accent,
		color: Colors.OffBlack,
	}

	let labelProps = {}
	if (showIconLabels) {
		labelProps = {
			labelPosition:
				orientation === NavOrientation.Left ? LabelPosition.Right : LabelPosition.Left,
			labelWidth,
		}
	}

	return (
		<div style={{ ...style, ...rootStyle }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<NavItem
					label={'Open nav menu'}
					width={iconWidth}
					height={iconHeight}
					icon={<FontAwesomeIcon icon={faBars} size={'lg'} />}
					onClick={onIconsMenuIconClick}
					isSelected={true}
					color={'black'}
				/>
				{navItems.map(
					(item: INavItem): JSX.Element => {
						const { label, icon, onClick } = item

						return (
							<NavItem
								{...labelProps}
								icon={icon}
								label={label}
								onClick={onClick}
								width={iconWidth}
								height={iconHeight}
								key={item.id}
								isSelected={item.id === selectedId}
								labelTextStyle={{ margin: 'auto 0' }}
								color={'black'}
							/>
						)
					}
				)}
				{onRenderBelowContent && showIconLabels && onRenderBelowContent()}
			</div>
		</div>
	)
}
