import React, { useContext } from 'react'
import { IPageTemplateBackgroundsProps } from '../../modes/classic/pageTemplate.types'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { Seasons } from '../../modes/seasons/seasonsHelpers'
import {
	autumnBackgrounds,
	classicBackgrounds,
	IPicture,
	springBackgrounds,
	summerBackgrounds,
	winterBackgrounds,
} from '../../shared/helpers/artists'
import { PivotRoutes } from '../../shared/posts/post.types'
import { makeTitleMap } from '../../shared/presentational/hooks/usePivots.helpers'
import { IUsePivotProps } from '../../shared/presentational/hooks/usePivots.types'
import { GamePivots, gamePivotTitlePhrases } from './games.types'
import { Penultima } from './penultima'

// const { setSeason } = useContext(SeasonsContext)
// useEffect(() => {
// 	setSeason(getNextSeason(2))
// }, [])

const titleMap = makeTitleMap(gamePivotTitlePhrases)

export const getGameUsePivotsProps = (): IUsePivotProps => {
	return {
		titlePhrases: gamePivotTitlePhrases,
		defaultTitle: GamePivots.Posts,
		titleMap,
	}
}

export const showPostsNavForGame = (pivot: PivotRoutes | undefined): boolean => {
	return pivot === GamePivots.Posts
}

export const getGamePageContent = (
	selectedPivotTitle: PivotRoutes | undefined
): JSX.Element | undefined => {
	if (selectedPivotTitle === GamePivots.Games) {
		return <Penultima />
	}

	return undefined
}

export const getGamePageBackground = (): Omit<IPageTemplateBackgroundsProps, 'backgroundStyle'> => {
	const { season } = useContext(SeasonsContext)

	let headerPicture: IPicture
	switch (season) {
		case Seasons.Winter:
			headerPicture = winterBackgrounds.games
			break
		case Seasons.Spring:
			headerPicture = springBackgrounds.games
			break
		case Seasons.Summer:
			headerPicture = summerBackgrounds.games
			break
		case Seasons.Autumn:
			headerPicture = autumnBackgrounds.games
			break
		case Seasons.None:
		default:
			headerPicture = classicBackgrounds.games
	}

	const { src: headerBackgroundImage, ...artistProps } = headerPicture

	return {
		...artistProps,
		headerBackgroundImage,
	}
}
