import { INavProps } from 'office-ui-fabric-react/lib'
import React, { useState } from 'react'
import { IconNav } from '../../../components/iconNav/iconNav'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { PageRoutes } from '../../helpers/routes'

const navGroups: INavProps['groups'] = [
	{
		links: [
			{
				name: homeTitle,
				url: PageRoutes.Home,
			},
			{
				name: storiesTitle,
				url: PageRoutes.Stories,
			},
			{
				name: gamesTitle,
				url: PageRoutes.Games,
			},
			{
				name: mathScienceTitle,
				url: PageRoutes.MathScience,
			},
		],
	},
]

export const NavBar: React.FunctionComponent = (): JSX.Element => {
	const [showOnlyIcons] = useState<boolean>(true)

	return <IconNav showOnlyIcons={showOnlyIcons} groups={navGroups} />
}
