import React, { useContext } from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate.types'
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
	artistName: IClassicPageTemplateProps['artistName']
	artistLink: IClassicPageTemplateProps['artistLink']
	Content?: IClassicPageTemplateProps['Content']
}

export const getHomePageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IHomePageTemplateProps => {
	const { season } = useContext(SeasonsContext)

	let headerPicture: IPicture
	switch (season) {
		case Seasons.Winter:
			headerPicture = winterBackgrounds.home
			break
		case Seasons.Spring:
			headerPicture = springBackgrounds.home
			break
		case Seasons.Summer:
			headerPicture = summerBackgrounds.home
			break
		case Seasons.Autumn:
			headerPicture = autumnBackgrounds.home
			break
		case Seasons.None:
		default:
			headerPicture = classicBackgrounds.home
	}

	const { src: headerBackgroundImage, ...artistProps } = headerPicture
	const pageContent: IHomePageTemplateProps = {
		...artistProps,
		headerBackgroundImage,
	}

	if (selectedPivotTitle === HomePivots.About) {
		pageContent.Content = <AboutPage />
	} else if (selectedPivotTitle === HomePivots.Resume) {
		pageContent.Content = <Resume />
	}

	return pageContent
}
