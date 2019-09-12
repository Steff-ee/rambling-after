import { LocationDescriptorObject } from 'history'
import { INavProps } from 'office-ui-fabric-react/lib'
import React from 'react'
import { IconNav } from '../../../components/iconNav/iconNav'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { iconBooksName, iconDieName, iconTeaName, iconTorusKnotName } from '../../helpers/icons'
import { PageRoutes } from '../../helpers/routes'

export interface INavBarProps {
	navigate: (destination: LocationDescriptorObject) => void
}

export const NavBar: React.FunctionComponent<INavBarProps> = (props: INavBarProps): JSX.Element => {
	const { navigate } = props

	const navGroups: INavProps['groups'] = [
		{
			links: [
				{
					iconProps: { iconName: iconTeaName },
					name: homeTitle,
					onClick: (): void => navigate({ pathname: PageRoutes.Home }),
					url: '',
				},
				{
					iconProps: { iconName: iconBooksName },
					name: storiesTitle,
					onClick: (): void => navigate({ pathname: PageRoutes.Stories }),
					url: '',
				},
				{
					iconProps: { iconName: iconDieName },
					name: gamesTitle,
					onClick: (): void => navigate({ pathname: PageRoutes.Games }),
					url: '',
				},
				{
					iconProps: { iconName: iconTorusKnotName },
					name: mathScienceTitle,
					onClick: (): void => navigate({ pathname: PageRoutes.MathScience }),
					url: '',
				},
			],
		},
	]

	return <IconNav showIconsOnly={true} isShowIconsOnlyControlled={false} groups={navGroups} />
}
