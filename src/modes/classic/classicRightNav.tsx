import React from 'react'
import { useLocation } from 'react-router'
import { IconNav } from '../../components/iconNav/iconNav'
import { IconLayout, NavOrientation } from '../../components/iconNav/iconNav.types'
import { useNavigationLinks } from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export const ClassicRightNav: React.FunctionComponent = (): JSX.Element => {
	const location = useLocation()
	const links = useNavigationLinks(classicColors.primary)

	return (
		<IconNav
			iconLayout={IconLayout.Horizontal}
			selectedId={location.pathname}
			navItems={links}
			orientation={NavOrientation.Right}
		/>
	)
}
