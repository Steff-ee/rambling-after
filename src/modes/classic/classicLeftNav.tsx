import React from 'react'
import { useLocation } from 'react-router'
import { IconNav } from '../../components/iconNav/iconNav'
import { IconLayout } from '../../components/iconNav/iconNav.types'
import { Colors } from '../../shared/helpers/constants'
import { useChangeModeCommand } from '../../shared/presentational/components/navBarCommands'

export const ClassicLeftNav: React.FunctionComponent = (): JSX.Element => {
	const location = useLocation()
	const changeModeCommand = useChangeModeCommand(Colors.LightSand)

	return (
		<IconNav
			iconLayout={IconLayout.Horizontal}
			selectedKey={location.pathname}
			navItems={[changeModeCommand]}
		/>
	)
}
