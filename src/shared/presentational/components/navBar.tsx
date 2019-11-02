import { INavProps } from 'office-ui-fabric-react/lib'
import React, { useContext } from 'react'
import { __RouterContext as RouterContext } from 'react-router'
import { IconLayout, IconNav } from '../../../components/iconNav/iconNav'
import { BackgroundPicker } from './backgroundPicker'
import { ColorPicker } from './colorPicker'
import { useChangeModeCommand, useNavigationLinks } from './navBarCommands'
import { IsNavBarOpenContext } from './navBarHelpers'

export interface INavBarProps {
	iconLayout: IconLayout
	rootStyle?: React.CSSProperties
}

export const NavBar: React.FunctionComponent<INavBarProps> = (props: INavBarProps): JSX.Element => {
	const { rootStyle, iconLayout } = props
	const { location } = useContext(RouterContext)
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
