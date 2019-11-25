import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { HorizontalIconNav } from '../../components/iconNav/horizontalIconNav'
import {
	ICommonIconNavProps,
	IconLayout,
	NavOrientation,
} from '../../components/iconNav/iconNav.types'
import { VerticalIconNav } from '../../components/iconNav/verticalIconNav'
import { Colors } from '../../shared/helpers/constants'
import { getPrimaryRoute } from '../../shared/helpers/routes'
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

	const commonProps: ICommonIconNavProps = {
		selectedId: getPrimaryRoute(location.pathname),
		rootStyle,
		navItems: [...navigationLinks, changeModeCommand],
		orientation: NavOrientation.Left,
	}

	if (iconLayout === IconLayout.Horizontal) {
		return <HorizontalIconNav {...commonProps} />
	}

	return (
		<VerticalIconNav
			{...commonProps}
			showIconLabels={isNavBarOpen}
			onRenderBelowContent={(): JSX.Element => (
				<>
					<ColorPicker />
					<BackgroundPicker />
				</>
			)}
			onIconsMenuIconClick={(): void => {
				setIsNavBarOpen(!isNavBarOpen)
			}}
		/>
	)
}
