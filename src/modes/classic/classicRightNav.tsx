import React from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { INavItem, NavOrientation } from '../../components/iconNav/iconNav.types'
import {
	useBackCommand,
	useChangeModeCommand,
	useFirstCommand,
	useLatestCommand,
	useNextCommand,
} from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export interface IClassicRightNavProps {
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicRightNav: React.FunctionComponent<IClassicRightNavProps> = (
	props: IClassicRightNavProps
): JSX.Element => {
	const { firstClick, backClick, nextClick, latestClick } = props
	const location = useLocation()
	const color = classicColors.primary
	const changeModeCommand = useChangeModeCommand(color)
	const backCommand = useBackCommand(color, backClick)
	const nextCommand = useNextCommand(color, nextClick)
	const firstCommand = useFirstCommand(color, firstClick)
	const latestCommand = useLatestCommand(color, latestClick)
	const navItems = [
		firstCommand,
		backCommand,
		nextCommand,
		latestCommand,
		changeModeCommand,
	].filter((item) => !!item) as INavItem[]

	return (
		<HorizontalIconNav
			selectedId={location.pathname}
			navItems={navItems}
			orientation={NavOrientation.Right}
		/>
	)
}
