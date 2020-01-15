import lightbulbsImg from 'Assets/images/lightbulbs.jpg'
import React from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate'
import { PivotRoutes } from '../../shared/posts/post.types'
import { IUsePivotProps, makeTitleMap } from '../../shared/presentational/hooks/usePivots'
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
	const pageContent: IGamePageTemplateProps = {
		headerBackgroundImage: lightbulbsImg,
	}
	if (selectedPivotTitle === GamePivots.Games) {
		pageContent.Content = <Penultima />
	}

	return pageContent
}
