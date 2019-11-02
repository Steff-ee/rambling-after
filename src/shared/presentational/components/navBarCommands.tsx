import { useContext } from 'react'
import { useHistory } from 'react-router'
import { INavItem } from '../../../components/iconNav/iconNav.types'
import { Modes, ModesContext } from '../../../modes/modeSwitcher'
import { gamesTitle } from '../../../pages/games/games'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { iconBooksName, iconDieName, iconTeaName, iconTorusKnotName } from '../../helpers/icons'
import { PageRoutes } from '../../helpers/routes'

const commonIconStyles = { root: { width: '44px', height: '44px' } }

export const useNavigationLinks = (): INavItem[] => {
	const history = useHistory()

	return [
		{
			iconProps: { iconName: iconTeaName, styles: commonIconStyles },
			id: PageRoutes.Home,
			label: homeTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.Home }),
		},
		{
			iconProps: { iconName: iconBooksName, styles: commonIconStyles },
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.Stories }),
		},
		{
			iconProps: { iconName: iconDieName, styles: commonIconStyles },
			id: PageRoutes.Games,
			label: gamesTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.Games }),
		},
		{
			iconProps: { iconName: iconTorusKnotName, styles: commonIconStyles },
			id: PageRoutes.MathScience,
			label: mathScienceTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.MathScience }),
		},
	]
}

export const useChangeModeCommand = (): INavItem => {
	const { mode, setMode } = useContext(ModesContext)

	return {
		iconProps: { iconName: 'Rotate', styles: commonIconStyles },
		id: 'ModeToggleCommand',
		label: 'Mode Toggle',
		onClick: (): void => setMode(mode === Modes.Classic ? Modes.Seasons : Modes.Classic),
	}
}
