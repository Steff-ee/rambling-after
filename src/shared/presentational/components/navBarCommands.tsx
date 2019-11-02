import { INavLink } from 'office-ui-fabric-react/lib'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { Modes, ModesContext } from '../../../modes/modeSwitcher'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { iconBooksName, iconDieName, iconTeaName, iconTorusKnotName } from '../../helpers/icons'
import { PageRoutes } from '../../helpers/routes'

const commonIconStyles = { root: { width: '44px', height: '44px' } }

export const useNavigationLinks = (): INavLink[] => {
	const history = useHistory()

	return [
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
	]
}

export const useChangeModeCommand = (): INavLink => {
	const { mode, setMode } = useContext(ModesContext)

	return {
		iconProps: { iconName: 'Rotate', styles: commonIconStyles },
		name: 'Mode Toggle',
		onClick: (): void => setMode(mode === Modes.Classic ? Modes.Seasons : Modes.Classic),
		url: '',
	}
}
