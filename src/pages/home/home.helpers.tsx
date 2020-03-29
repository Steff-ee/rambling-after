import React, { useContext } from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate.types'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { Seasons } from '../../modes/seasons/seasonsHelpers'
import {
	autumnBackgrounds,
	classicBackgrounds,
	springBackgrounds,
	summerBackgrounds,
	winterBackgrounds,
} from '../../shared/helpers/artists'
import { PivotRoutes } from '../../shared/posts/post.types'
import { makeTitleMap } from '../../shared/presentational/hooks/usePivots.helpers'
import { IUsePivotProps } from '../../shared/presentational/hooks/usePivots.types'
import { AboutPage } from './about'
import { HomePivots, homePivotTitlePhrases } from './home.types'
import { Resume } from './resume'

// (TODO)
// const { setSeason } = useContext(SeasonsContext)
// useEffect(() => {
// 	setSeason(getNextSeason(0))
// }, [])

const titleMap = makeTitleMap(homePivotTitlePhrases)

export const getHomeUsePivotsProps = (): IUsePivotProps => {
	return {
		titlePhrases: homePivotTitlePhrases,
		defaultTitle: HomePivots.Posts,
		titleMap,
	}
}

export const showPostsNavForHome = (pivot: PivotRoutes | undefined): boolean => {
	return pivot === HomePivots.Posts
}

export interface IHomePageTemplateProps {
	headerBackgroundImage: IClassicPageTemplateProps['headerBackgroundImage']
	Content?: IClassicPageTemplateProps['Content']
}

export const getHomePageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IHomePageTemplateProps => {
	const { season } = useContext(SeasonsContext)

	let headerBackgroundImage: string
	switch (season) {
		case Seasons.Winter:
			headerBackgroundImage = winterBackgrounds.home.src
			break
		case Seasons.Spring:
			headerBackgroundImage = springBackgrounds.home.src
			break
		case Seasons.Summer:
			headerBackgroundImage = summerBackgrounds.home.src
			break
		case Seasons.Autumn:
			headerBackgroundImage = autumnBackgrounds.home.src
			break
		case Seasons.None:
		default:
			headerBackgroundImage = classicBackgrounds.home.src
	}

	const pageContent: IHomePageTemplateProps = {
		headerBackgroundImage,
	}
	if (selectedPivotTitle === HomePivots.About) {
		pageContent.Content = <AboutPage />
	} else if (selectedPivotTitle === HomePivots.Resume) {
		pageContent.Content = <Resume />
	}

	return pageContent
}
