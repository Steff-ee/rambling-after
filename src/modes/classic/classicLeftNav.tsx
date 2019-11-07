import React from 'react'
import { useLocation } from 'react-router'
import { IconNav } from '../../components/iconNav/iconNav'
import { IconLayout, NavOrientation } from '../../components/iconNav/iconNav.types'
import { useChangeModeCommand } from '../../shared/presentational/components/navBarCommands'
import { classicColors } from './classicConstants'

export const ClassicLeftNav: React.FunctionComponent = (): JSX.Element => {
	const location = useLocation()
	const changeModeCommand = useChangeModeCommand(classicColors.primary)

	return (
		<IconNav
			iconLayout={IconLayout.Horizontal}
			selectedId={location.pathname}
			navItems={[changeModeCommand]}
			orientation={NavOrientation.Left}
		/>
	)
}
