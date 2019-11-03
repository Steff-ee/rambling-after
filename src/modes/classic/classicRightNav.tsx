import React from 'react'
import { useLocation } from 'react-router'
import { IconNav } from '../../components/iconNav/iconNav'
import { IconLayout } from '../../components/iconNav/iconNav.types'
import { Colors } from '../../shared/helpers/constants'
import { useNavigationLinks } from '../../shared/presentational/components/navBarCommands'

export const ClassicRightNav: React.FunctionComponent = (): JSX.Element => {
	const location = useLocation()
	const links = useNavigationLinks(Colors.LightSand)

	return (
		<IconNav
			iconLayout={IconLayout.Horizontal}
			selectedKey={location.pathname}
			navItems={links}
		/>
	)
}
