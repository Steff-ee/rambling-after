import { INavProps } from 'office-ui-fabric-react/lib'
import React, { useContext } from 'react'
import { __RouterContext as RouterContext } from 'react-router'
import { IconNav } from '../../../components/iconNav/iconNav'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { iconBooksName, iconDieName, iconTeaName, iconTorusKnotName } from '../../helpers/icons'
import { PageRoutes } from '../../helpers/routes'
import { BackgroundPicker } from './backgroundPicker'
import { ColorPicker } from './colorPicker'
import { IsNavBarOpenContext } from './navBarHelpers'

export interface INavBarProps {
	rootStyle?: React.CSSProperties
}

export const NavBar: React.FunctionComponent<INavBarProps> = (props: INavBarProps): JSX.Element => {
	const { rootStyle } = props
	const { history } = useContext(RouterContext)
	const { isNavBarOpen, setIsNavBarOpen } = useContext(IsNavBarOpenContext)

	const navGroups: INavProps['groups'] = [
		{
			links: [
				{
					iconProps: { iconName: iconTeaName },
					name: homeTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.Home }),
					url: '',
				},
				{
					iconProps: { iconName: iconBooksName },
					name: storiesTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.Stories }),
					url: '',
				},
				{
					iconProps: { iconName: iconDieName },
					name: gamesTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.Games }),
					url: '',
				},
				{
					iconProps: { iconName: iconTorusKnotName },
					name: mathScienceTitle,
					onClick: (): void => history.push({ pathname: PageRoutes.MathScience }),
					url: '',
				},
			],
		},
	]

	return (
		<IconNav
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
