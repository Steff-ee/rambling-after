import {
	faBurn,
	faChessKnight,
	faFeatherAlt,
	faPoll,
	faToggleOff,
	faToggleOn,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { INavItem } from '../../../components/iconNav/iconNav.types'
import { Modes, ModesContext } from '../../../modes/modeSwitcher'
import { homeTitle } from '../../../pages/home/home'
import { mathScienceTitle } from '../../../pages/mathScience/mathScience'
import { storiesTitle } from '../../../pages/stories/stories'
import { PageRoutes } from '../../helpers/routes'

export const commonIconProps = { size: '2x' as const, fixedWidth: true }

export const useNavigationLinks = (color: string): INavItem[] => {
	const history = useHistory()

	const commonProps = { ...commonIconProps, style: { color } }

	return [
		{
			icon: <FontAwesomeIcon icon={faBurn} {...commonProps} />,
			id: PageRoutes.Home,
			label: homeTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.Home }),
		},
		{
			icon: <FontAwesomeIcon icon={faFeatherAlt} {...commonProps} />,
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.Stories }),
		},
		{
			icon: <FontAwesomeIcon icon={faChessKnight} {...commonProps} />,
			id: PageRoutes.MathScience,
			label: mathScienceTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.MathScience }),
		},
		{
			icon: <FontAwesomeIcon icon={faPoll} {...commonProps} />,
			id: PageRoutes.MathScience,
			label: mathScienceTitle,
			onClick: (): void => history.push({ pathname: PageRoutes.MathScience }),
		},
	]
}

export const useChangeModeCommand = (color: string): INavItem => {
	const { mode, setMode } = useContext(ModesContext)

	const icon = mode === Modes.Classic ? faToggleOff : faToggleOn

	return {
		icon: <FontAwesomeIcon icon={icon} {...commonIconProps} style={{ color }} />,
		id: 'ModeToggleCommand',
		label: 'Mode Toggle',
		onClick: (): void => setMode(mode === Modes.Classic ? Modes.Seasons : Modes.Classic),
	}
}
