import React from 'react'
import { useLocation } from 'react-router'
import { IconNav } from '../../components/iconNav/iconNav'
import { IconLayout } from '../../components/iconNav/iconNav.types'
import { useChangeModeCommand } from '../../shared/presentational/components/navBarCommands'

export interface IClassicRightNavProps {
	rootStyle?: React.CSSProperties
}

export const ClassicLeftNav: React.FunctionComponent<IClassicRightNavProps> = (
	props: IClassicRightNavProps
): JSX.Element => {
	const { rootStyle } = props
	const location = useLocation()
	const changeModeCommand = useChangeModeCommand()

	return (
		<IconNav
			iconLayout={IconLayout.Horizontal}
			selectedKey={location.pathname}
			rootStyle={rootStyle}
			navItems={[changeModeCommand]}
		/>
	)
}
