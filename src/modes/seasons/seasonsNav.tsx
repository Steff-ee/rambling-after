import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { IconLayout, NavOrientation } from '../../components/iconNav/iconNav.types'
import { VerticalIconNav } from '../../components/iconNav/verticalIconNav'
import { Colors } from '../../shared/helpers/constants'
import { BackgroundPicker } from '../../shared/presentational/components/backgroundPicker'
import { ColorPicker } from '../../shared/presentational/components/colorPicker'
import {
	useChangeModeCommand,
	useNavigationLinks,
} from '../../shared/presentational/components/navBarCommands'
import { IsNavBarOpenContext } from '../../shared/presentational/components/navBarHelpers'

export interface INavBarProps {
	iconLayout: IconLayout
	rootStyle?: React.CSSProperties
}

export const SeasonsNav: React.FunctionComponent<INavBarProps> = (
	props: INavBarProps
): JSX.Element => {
	const { rootStyle, iconLayout } = props
	const location = useLocation()
	const { isNavBarOpen, setIsNavBarOpen } = useContext(IsNavBarOpenContext)
	const navigationLinks = useNavigationLinks(Colors.OffBlack)
	const changeModeCommand = useChangeModeCommand(Colors.OffBlack)

	return (
		<VerticalIconNav
			iconLayout={iconLayout}
			selectedId={location.pathname}
			rootStyle={rootStyle}
			showIconLabels={isNavBarOpen}
			navItems={[...navigationLinks, changeModeCommand]}
			onRenderBelowContent={(): JSX.Element => (
				<>
					<ColorPicker />
					<BackgroundPicker />
				</>
			)}
			onIconsMenuIconClick={(): void => {
				setIsNavBarOpen(!isNavBarOpen)
			}}
			orientation={NavOrientation.Left}
		/>
	)
}
