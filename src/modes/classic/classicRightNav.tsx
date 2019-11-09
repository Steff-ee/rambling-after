import React from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { useNavigationLinks } from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export const ClassicRightNav: React.FunctionComponent = (): JSX.Element => {
	const location = useLocation()
	const links = useNavigationLinks(classicColors.primary)

	return (
		<HorizontalIconNav
			selectedId={location.pathname}
			navItems={links}
			orientation={NavOrientation.Right}
		/>
	)
}
