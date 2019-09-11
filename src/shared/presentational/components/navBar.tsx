import { INavProps } from 'office-ui-fabric-react/lib'
import React, { useState } from 'react'
import { IconNav } from '../../../components/iconNav/iconNav'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { iconBooksName, iconDieName, iconTeaName, iconTorusKnotName } from '../../helpers/icons'
import { PageRoutes } from '../../helpers/routes'

// (TODO) find better icons
const navGroups: INavProps['groups'] = [
	{
		links: [
			{
				iconProps: { iconName: iconTeaName },
				name: homeTitle,
				url: PageRoutes.Home,
			},
			{
				iconProps: { iconName: iconBooksName },
				name: storiesTitle,
				url: PageRoutes.Stories,
			},
			{
				iconProps: { iconName: iconDieName },
				name: gamesTitle,
				url: PageRoutes.Games,
			},
			{
				iconProps: { iconName: iconTorusKnotName },
				name: mathScienceTitle,
				url: PageRoutes.MathScience,
			},
		],
	},
]

export const NavBar: React.FunctionComponent = (): JSX.Element => {
	const [showIconsOnly, setShowIconsOnly] = useState<boolean>(true)

	return (
		<IconNav
			showIconsOnly={showIconsOnly}
			toggleShowIconsOnly={(): void => setShowIconsOnly(!showIconsOnly)}
			groups={navGroups}
		/>
	)
}
