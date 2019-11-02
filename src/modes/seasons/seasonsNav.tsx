import { INavProps } from 'office-ui-fabric-react/lib'
import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { IconLayout, IconNav } from '../../components/iconNav/iconNav'
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
	const navigationLinks = useNavigationLinks()
	const changeModeCommand = useChangeModeCommand()

	const navGroups: INavProps['groups'] = [
		{
			links: [...navigationLinks, changeModeCommand],
		},
	]

	return (
		<IconNav
			iconLayout={iconLayout}
			selectedKey={location.pathname}
			rootStyle={rootStyle}
			showIconsOnly={!isNavBarOpen}
			isShowIconsOnlyControlled={true}
			groups={navGroups}
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
