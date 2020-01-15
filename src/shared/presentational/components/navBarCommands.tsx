import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faAngleLeft,
	faAngleRight,
	faChessKnight,
	faFeatherAlt,
	faGlobeAmericas,
	faPoll,
	faToggleOff,
	faToggleOn,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { INavItem } from '../../../components/iconNav/iconNav.types'
import { Modes, ModesContext } from '../../../modes/modeSwitcher'
import { conjectureTitle } from '../../../pages/conjectures/conjectures.types'
import { gamesTitle } from '../../../pages/games/games.types'
import { homeTitle } from '../../../pages/home/home.types'
import { storiesTitle } from '../../../pages/stories/stories.types'
import { PageRoutes, redirectTo } from '../../helpers/routes'

export const commonIconProps = { size: '2x' as const, fixedWidth: true }

export const useNavigationLinks = (color: string): INavItem[] => {
	const commonProps = { ...commonIconProps, style: { color } }

	return [
		{
			icon: <FontAwesomeIcon icon={faGlobeAmericas} {...commonProps} />,
			id: PageRoutes.Home,
			label: homeTitle,
			onClick: (): void => redirectTo(`/#/${PageRoutes.Home}`),
		},
		{
			icon: <FontAwesomeIcon icon={faFeatherAlt} {...commonProps} />,
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => redirectTo(`/#/${PageRoutes.Stories}`),
		},
		{
			icon: <FontAwesomeIcon icon={faChessKnight} {...commonProps} />,
			id: PageRoutes.Games,
			label: gamesTitle,
			onClick: (): void => redirectTo(`/#/${PageRoutes.Games}`),
		},
		{
			icon: <FontAwesomeIcon icon={faPoll} {...commonProps} />,
			id: PageRoutes.Conjecture,
			label: conjectureTitle,
			onClick: (): void => redirectTo(`/#/${PageRoutes.Conjecture}`),
		},
	]
}

export const useChangeModeCommand = (color: string): INavItem => {
	const { mode, setMode } = useContext(ModesContext)

	let icon: IconProp
	let label: string
	if (mode === Modes.Classic) {
		icon = faToggleOff
		label = 'seasons mode'
	} else {
		icon = faToggleOn
		label = 'classic mode'
	}

	return {
		icon: <FontAwesomeIcon icon={icon} {...commonIconProps} style={{ color }} />,
		id: 'ModeToggleCommand',
		label,
		onClick: (): void => setMode(mode === Modes.Classic ? Modes.Seasons : Modes.Classic),
	}
}

export const useBackCommand = (color: string, onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleLeft} {...commonIconProps} style={{ color }} />,
		id: 'BackCommand',
		label: 'Back',
		onClick,
		disabled: onClick === undefined,
	}
}

export const useNextCommand = (color: string, onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleRight} {...commonIconProps} style={{ color }} />,
		id: 'NextCommand',
		label: 'Next',
		onClick,
		disabled: onClick === undefined,
	}
}

export const useFirstCommand = (color: string, onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleDoubleLeft} {...commonIconProps} style={{ color }} />,
		id: 'FirstCommand',
		label: 'First',
		onClick,
		disabled: onClick === undefined,
	}
}

export const useLatestCommand = (color: string, onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleDoubleRight} {...commonIconProps} style={{ color }} />,
		id: 'LatestCommand',
		label: 'Latest',
		onClick,
		disabled: onClick === undefined,
	}
}
