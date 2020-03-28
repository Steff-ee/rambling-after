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
import { useColors } from '../../shared/presentational/hooks/useColors'

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
	const { headerText: headerTextColor } = useColors()
	const backCommand = useBackCommand(headerTextColor, backClick)
	const nextCommand = useNextCommand(headerTextColor, nextClick)
	const firstCommand = useFirstCommand(headerTextColor, firstClick)
	const latestCommand = useLatestCommand(headerTextColor, latestClick)

	return (
		<HorizontalIconNav
			selectedId={getPrimaryRoute(location.pathname)}
			navItems={[firstCommand, backCommand, nextCommand, latestCommand]}
			orientation={orientation}
		/>
	)
}
