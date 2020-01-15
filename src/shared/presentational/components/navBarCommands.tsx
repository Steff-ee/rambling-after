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
import { storiesTitle, StoryPivots } from '../../../pages/stories/stories.types'
import { IRouteContext, PageRoutes, redirectTo, RouteContext } from '../../helpers/routes'
import { IOpenPostsContext, OpenPostsContext } from '../../posts/openPosts'
import { getLatestPost } from '../../posts/posts'

export const commonIconProps = { size: '2x' as const, fixedWidth: true }

const getHomePath = (
	prevPivots: IRouteContext['prevPivots'],
	getLastOpenPost: IOpenPostsContext['getLastOpenPost']
): string => {
	// (TODO) handle default pivots and posts elsewhere in a common area
	const homePivot = (prevPivots[PageRoutes.Home] as StoryPivots) || StoryPivots.Posts
	const homeCurrentPost = getLastOpenPost(PageRoutes.Home, homePivot)
	const homeCurrentPostId =
		(homeCurrentPost && homeCurrentPost.id) || getLatestPost(PageRoutes.Home, homePivot)

	return `/#/${PageRoutes.Home}/${homePivot}/${homeCurrentPostId}`
}

const getStoriesPath = (
	prevPivots: IRouteContext['prevPivots'],
	getLastOpenPost: IOpenPostsContext['getLastOpenPost']
): string => {
	const storiesPivot = (prevPivots[PageRoutes.Stories] as StoryPivots) || StoryPivots.Posts
	const storiesCurrentPost = getLastOpenPost(PageRoutes.Stories, storiesPivot)
	const storiesCurrentPostId =
		(storiesCurrentPost && storiesCurrentPost.id) ||
		getLatestPost(PageRoutes.Stories, storiesPivot)

	return `/#/${PageRoutes.Stories}/${storiesPivot}/${storiesCurrentPostId}`
}

const getGamesPath = (
	prevPivots: IRouteContext['prevPivots'],
	getLastOpenPost: IOpenPostsContext['getLastOpenPost']
): string => {
	const gamesPivot = (prevPivots[PageRoutes.Games] as StoryPivots) || StoryPivots.Posts
	const gamesCurrentPost = getLastOpenPost(PageRoutes.Games, gamesPivot)
	const gamesCurrentPostId =
		(gamesCurrentPost && gamesCurrentPost.id) || getLatestPost(PageRoutes.Games, gamesPivot)

	return `/#/${PageRoutes.Games}/${gamesPivot}/${gamesCurrentPostId}`
}

const getConjecturePath = (
	prevPivots: IRouteContext['prevPivots'],
	getLastOpenPost: IOpenPostsContext['getLastOpenPost']
): string => {
	const conjecturePivot = (prevPivots[PageRoutes.Conjecture] as StoryPivots) || StoryPivots.Posts
	const conjectureCurrentPost = getLastOpenPost(PageRoutes.Conjecture, conjecturePivot)
	const conjectureCurrentPostId =
		(conjectureCurrentPost && conjectureCurrentPost.id) ||
		getLatestPost(PageRoutes.Conjecture, conjecturePivot)

	return `/#/${PageRoutes.Conjecture}/${conjecturePivot}/${conjectureCurrentPostId}`
}

export const useNavigationLinks = (color: string): INavItem[] => {
	const { prevPivots } = useContext(RouteContext)
	const { getLastOpenPost } = useContext(OpenPostsContext)
	const commonProps = { ...commonIconProps, style: { color } }

	const homePath = getHomePath(prevPivots, getLastOpenPost)
	const storiesPath = getStoriesPath(prevPivots, getLastOpenPost)
	const gamesPath = getGamesPath(prevPivots, getLastOpenPost)
	const conjecturePath = getConjecturePath(prevPivots, getLastOpenPost)

	return [
		{
			icon: <FontAwesomeIcon icon={faGlobeAmericas} {...commonProps} />,
			id: PageRoutes.Home,
			label: homeTitle,
			onClick: (): void => redirectTo(homePath),
		},
		{
			icon: <FontAwesomeIcon icon={faFeatherAlt} {...commonProps} />,
			id: PageRoutes.Stories,
			label: storiesTitle,
			onClick: (): void => redirectTo(storiesPath),
		},
		{
			icon: <FontAwesomeIcon icon={faChessKnight} {...commonProps} />,
			id: PageRoutes.Games,
			label: gamesTitle,
			onClick: (): void => redirectTo(gamesPath),
		},
		{
			icon: <FontAwesomeIcon icon={faPoll} {...commonProps} />,
			id: PageRoutes.Conjecture,
			label: conjectureTitle,
			onClick: (): void => redirectTo(conjecturePath),
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
