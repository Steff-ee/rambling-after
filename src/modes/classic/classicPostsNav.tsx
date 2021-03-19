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

export interface IClassicRightNavProps {
	orientation: NavOrientation
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicPostsNav: React.FunctionComponent<IClassicRightNavProps> = (props) => {
	const { firstClick, backClick, nextClick, latestClick, orientation } = props
	const location = useLocation()
	const backCommand = useBackCommand(backClick)
	const nextCommand = useNextCommand(nextClick)
	const firstCommand = useFirstCommand(firstClick)
	const latestCommand = useLatestCommand(latestClick)

	return (
		<HorizontalIconNav
			selectedId={getPrimaryRoute(location.pathname)}
			navItems={[firstCommand, backCommand, nextCommand, latestCommand]}
			orientation={orientation}
		/>
	)
}
