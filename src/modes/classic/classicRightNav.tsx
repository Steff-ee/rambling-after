import React from 'react'
import { useLocation } from 'react-router'
import { IconNav } from '../../components/iconNav/iconNav'
import { IconLayout } from '../../components/iconNav/iconNav.types'
import { useNavigationLinks } from '../../shared/presentational/components/navBarCommands'

export interface IClassicRightNavProps {
	rootStyle?: React.CSSProperties
}

export const ClassicRightNav: React.FunctionComponent<IClassicRightNavProps> = (
	props: IClassicRightNavProps
): JSX.Element => {
	const { rootStyle } = props
	const location = useLocation()
	const links = useNavigationLinks()

	return (
		<IconNav
			iconLayout={IconLayout.Horizontal}
			selectedKey={location.pathname}
			rootStyle={rootStyle}
			navItems={links}
		/>
	)
}
