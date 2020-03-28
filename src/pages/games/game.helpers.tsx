import lightbulbsImg from 'Assets/images/lightbulbs.jpg'
import React, { useContext } from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate.types'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { Seasons } from '../../modes/seasons/seasonsHelpers'
import {
	autumnBackgrounds,
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

export interface IGamePageTemplateProps {
	headerBackgroundImage: IClassicPageTemplateProps['headerBackgroundImage']
	Content?: IClassicPageTemplateProps['Content']
}

export const getGamePageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IGamePageTemplateProps => {
	const { season } = useContext(SeasonsContext)

	let headerBackgroundImage: string
	switch (season) {
		case Seasons.Winter:
			headerBackgroundImage = winterBackgrounds[2].src
			break
		case Seasons.Spring:
			headerBackgroundImage = springBackgrounds[2].src
			break
		case Seasons.Summer:
			headerBackgroundImage = summerBackgrounds[2].src
			break
		case Seasons.Autumn:
			headerBackgroundImage = autumnBackgrounds[2].src
			break
		case Seasons.None:
		default:
			headerBackgroundImage = lightbulbsImg
	}

	const pageContent: IGamePageTemplateProps = {
		headerBackgroundImage,
	}
	if (selectedPivotTitle === GamePivots.Games) {
		pageContent.Content = <Penultima />
	}

	return pageContent
}
