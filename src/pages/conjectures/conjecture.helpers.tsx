import bookshelfImg from 'Assets/images/bookshelf_lightbulbs.jpg'
import React from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate'
import { PivotRoutes } from '../../shared/posts/post.types'
import { IUsePivotProps, makeTitleMap } from '../../shared/presentational/hooks/usePivots'
import { ConjectureLinks } from './conjectureLinks'
import { ConjecturePivots, conjecturePivotTitlePhrases } from './conjectures.types'

// const { setSeason } = useContext(SeasonsContext)
// useEffect(() => {
// 	setSeason(getNextSeason(3))
// }, [])

const titleMap = makeTitleMap(conjecturePivotTitlePhrases)

export const getConjectureUsePivotsProps = (): IUsePivotProps => {
	return {
		titlePhrases: conjecturePivotTitlePhrases,
		defaultTitle: ConjecturePivots.Posts,
		titleMap,
	}
}

export const showPostsNavForConjecture = (pivot: PivotRoutes | undefined): boolean => {
	return pivot === ConjecturePivots.Posts
}

export interface IConjecturePageTemplateProps {
	headerBackgroundImage: IClassicPageTemplateProps['headerBackgroundImage']
	Content?: IClassicPageTemplateProps['Content']
}

export const getConjecturePageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IConjecturePageTemplateProps => {
	const pageContent: IConjecturePageTemplateProps = {
		headerBackgroundImage: bookshelfImg,
	}
	if (selectedPivotTitle === ConjecturePivots.Links) {
		pageContent.Content = <ConjectureLinks />
	}

	return pageContent
}
