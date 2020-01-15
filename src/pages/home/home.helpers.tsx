import cartographyImg from 'Assets/images/cartography.jpg'
import React from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate'
import { PivotRoutes } from '../../shared/posts/post.types'
import { IUsePivotProps, makeTitleMap } from '../../shared/presentational/hooks/usePivots'
import { AboutPage } from './about'
import { HomePivots, homePivotTitlePhrases } from './home.types'

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
	const pageContent: IHomePageTemplateProps = {
		headerBackgroundImage: cartographyImg,
	}
	if (selectedPivotTitle === HomePivots.About) {
		pageContent.Content = <AboutPage />
	}

	return pageContent
}
