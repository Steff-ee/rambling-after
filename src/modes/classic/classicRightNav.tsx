import React from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { INavItem, NavOrientation } from '../../components/iconNav/iconNav.types'
import {
	useBackCommand,
	useChangeModeCommand,
	useNextCommand,
} from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export interface IClassicRightNavProps {
	backClick?: () => void
	nextClick?: () => void
}

export const ClassicRightNav: React.FunctionComponent<IClassicRightNavProps> = (
	props: IClassicRightNavProps
): JSX.Element => {
	const { backClick, nextClick } = props
	const location = useLocation()
	const color = classicColors.primary
	const changeModeCommand = useChangeModeCommand(color)
	const backCommand = useBackCommand(color, backClick)
	const nextCommand = useNextCommand(color, nextClick)
	const navItems = [backCommand, nextCommand, changeModeCommand].filter(
		(item) => !!item
	) as INavItem[]

	return (
		<HorizontalIconNav
			selectedId={location.pathname}
			navItems={navItems}
			orientation={NavOrientation.Right}
		/>
	)
}
