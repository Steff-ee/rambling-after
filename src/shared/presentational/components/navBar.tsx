import { INavProps } from 'office-ui-fabric-react/lib'
import React, { useContext } from 'react'
import { __RouterContext as RouterContext } from 'react-router'
import { IconLayout, IconNav } from '../../../components/iconNav/iconNav'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { iconBooksName, iconDieName, iconTeaName, iconTorusKnotName } from '../../helpers/icons'
import { PageRoutes } from '../../helpers/routes'
import { Modes, ModesContext } from '../hooks/modeSwitcher'
import { BackgroundPicker } from './backgroundPicker'
import { ColorPicker } from './colorPicker'
import { IsNavBarOpenContext } from './navBarHelpers'

export interface INavBarProps {
	iconLayout: IconLayout
	rootStyle?: React.CSSProperties
}

export const NavBar: React.FunctionComponent<INavBarProps> = (props: INavBarProps): JSX.Element => {
	const { rootStyle, iconLayout } = props
	const { history, location } = useContext(RouterContext)
	const { isNavBarOpen, setIsNavBarOpen } = useContext(IsNavBarOpenContext)
	const { mode, setMode } = useContext(ModesContext)

	const commonIconStyles = { root: { width: '44px', height: '44px' } }

	const navGroups: INavProps['groups'] = [
		{
			links: [
				{
					iconProps: { iconName: iconTeaName, styles: commonIconStyles },
					key: PageRoutes.Home,
					name: homeTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.Home }),
					url: '',
				},
				{
					iconProps: { iconName: iconBooksName, styles: commonIconStyles },
					key: PageRoutes.Stories,
					name: storiesTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.Stories }),
					url: '',
				},
				{
					iconProps: { iconName: iconDieName, styles: commonIconStyles },
					key: PageRoutes.Games,
					name: gamesTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.Games }),
					url: '',
				},
				{
					iconProps: { iconName: iconTorusKnotName, styles: commonIconStyles },
					key: PageRoutes.MathScience,
					name: mathScienceTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.MathScience }),
					url: '',
				},
				{
					iconProps: { iconName: 'Rotate', styles: commonIconStyles },
					name: 'Mode Toggle',
					onClick: (): void =>
						setMode(mode === Modes.Classic ? Modes.Seasons : Modes.Classic),
					url: '',
				},
			],
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
