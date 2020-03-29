import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
	faAngleLeft,
	faAngleRight,
	faChessKnight,
	faFeatherAlt,
	faGlobeAmericas,
	faPoll,
	faSyncAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { INavItem } from '../../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../../components/mediaProvider'
import { SeasonsContext } from '../../../modes/seasons/seasons'
import { Seasons } from '../../../modes/seasons/seasonsHelpers'
import { conjectureTitle } from '../../../pages/conjectures/conjectures.types'
import { gamesTitle } from '../../../pages/games/games.types'
import { homeTitle } from '../../../pages/home/home.types'
import { storiesTitle } from '../../../pages/stories/stories.types'
import {
	getConjecturePath,
	getGamesPath,
	getHomePath,
	getStoriesPath,
} from '../../helpers/navigation'
import { PageRoutes, redirectTo, RouteContext } from '../../helpers/routes'
import { useIsTest } from '../../helpers/url'
import { OpenPostsContext } from '../../posts/openPosts'

export const commonIconProps = { size: '2x' as const, fixedWidth: true }

const getNextSeason = (season: Seasons, isTest: boolean): Seasons => {
	switch (season) {
		case Seasons.None:
			return Seasons.Winter
		case Seasons.Winter:
			if (isTest) {
				// (TODO) enable other seasons
				return Seasons.Spring
			}

			return Seasons.None
		case Seasons.Spring:
			return Seasons.Summer
		case Seasons.Summer:
			return Seasons.Autumn
		case Seasons.Autumn:
		default:
			return Seasons.None
	}
}

export const useNavigationLinks = (): INavItem[] => {
	const { prevPivots } = useContext(RouteContext)
	const { getLastOpenPost } = useContext(OpenPostsContext)
	const { season, setSeason } = useContext(SeasonsContext)
	const mediaSize = useContext(MediaContext)
	const isTest = useIsTest()

	const homePath = getHomePath(getLastOpenPost, prevPivots)
	const storiesPath = getStoriesPath(getLastOpenPost, prevPivots)
	const gamesPath = getGamesPath(getLastOpenPost, prevPivots)
	const conjecturePath = getConjecturePath(getLastOpenPost, prevPivots)

	const navLinks: INavItem[] = [
		{
			icon: <FontAwesomeIcon icon={faGlobeAmericas} {...commonIconProps} />,
			id: PageRoutes.Home,
			label: homeTitle,
			onClick: (): void => redirectTo(homePath),
		},
		{
			icon: <FontAwesomeIcon icon={faFeatherAlt} {...commonIconProps} />,
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => redirectTo(storiesPath),
		},
		{
			icon: <FontAwesomeIcon icon={faChessKnight} {...commonIconProps} />,
			id: PageRoutes.Games,
			label: gamesTitle,
			onClick: (): void => redirectTo(gamesPath),
		},
		{
			icon: <FontAwesomeIcon icon={faPoll} {...commonIconProps} />,
			id: PageRoutes.Conjecture,
			label: conjectureTitle,
			onClick: (): void => redirectTo(conjecturePath),
		},
	]

	if (mediaSize === MediaSize.Large) {
		navLinks.push({
			icon: <FontAwesomeIcon icon={faSyncAlt} {...commonIconProps} size={'lg' as const} />,
			id: undefined,
			label: 'Change theme',
			onClick: (): void => setSeason(getNextSeason(season, isTest)),
		})
	}

	return navLinks
}

export const useBackCommand = (onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleLeft} {...commonIconProps} />,
		id: 'BackCommand',
		label: 'Back',
		onClick,
		disabled: onClick === undefined,
	}
}

export const useNextCommand = (onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleRight} {...commonIconProps} />,
		id: 'NextCommand',
		label: 'Next',
		onClick,
		disabled: onClick === undefined,
	}
}

export const useFirstCommand = (onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleDoubleLeft} {...commonIconProps} />,
		id: 'FirstCommand',
		label: 'First',
		onClick,
		disabled: onClick === undefined,
	}
}

export const useLatestCommand = (onClick?: () => void): INavItem => {
	return {
		icon: <FontAwesomeIcon icon={faAngleDoubleRight} {...commonIconProps} />,
		id: 'LatestCommand',
		label: 'Latest',
		onClick,
		disabled: onClick === undefined,
	}
}
