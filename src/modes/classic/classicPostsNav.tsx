import React from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { getPrimaryRoute } from '../../shared/helpers/routes'
import {
	useBackCommand,
	useFirstCommand,
	useLatestCommand,
	useNextCommand,
} from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export interface IClassicRightNavProps {
	orientation: NavOrientation
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicPostsNav: React.FunctionComponent<IClassicRightNavProps> = (
	props: IClassicRightNavProps
): JSX.Element => {
	const { firstClick, backClick, nextClick, latestClick, orientation } = props
	const location = useLocation()
	const color = classicColors.primary
	const backCommand = useBackCommand(color, backClick)
	const nextCommand = useNextCommand(color, nextClick)
	const firstCommand = useFirstCommand(color, firstClick)
	const latestCommand = useLatestCommand(color, latestClick)

	return (
		<HorizontalIconNav
			selectedId={getPrimaryRoute(location.pathname)}
			navItems={[firstCommand, backCommand, nextCommand, latestCommand]}
			orientation={orientation}
		/>
	)
}
