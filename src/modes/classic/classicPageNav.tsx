import React from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { getPrimaryRoute } from '../../shared/helpers/routes'
import { useNavigationLinks } from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export interface IClassicPageNavProps {
	orientation: NavOrientation
}

export const ClassicPageNav: React.FunctionComponent<IClassicPageNavProps> = (
	props: IClassicPageNavProps
): JSX.Element => {
	const { orientation } = props
	const location = useLocation()
	const links = useNavigationLinks(classicColors.primary)

	return (
		<HorizontalIconNav
			selectedId={getPrimaryRoute(location.pathname)}
			navItems={links}
			orientation={orientation}
		/>
	)
}
