import booksImg from 'Assets/images/books.jpg'
import React from 'react'
import { IClassicPageTemplateProps } from '../../modes/classic/classicPageTemplate'
import { PivotRoutes } from '../../shared/posts/post.types'
import { IUsePivotProps, makeTitleMap } from '../../shared/presentational/hooks/usePivots'
import { StoryPivots, storyPivotTitlePhrases } from './stories.types'
import { StoryLinks } from './storyLinks'

// const { setSeason } = useContext(SeasonsContext)
// useEffect(() => {
// 	setSeason(getNextSeason(3))
// }, [])

const titleMap = makeTitleMap(storyPivotTitlePhrases)

export const getStoriesUsePivotsProps = (): IUsePivotProps => {
	return {
		titlePhrases: storyPivotTitlePhrases,
		defaultTitle: StoryPivots.Posts,
		titleMap,
	}
}

export const showPostsNavForStories = (pivot: PivotRoutes | undefined): boolean => {
	return pivot !== StoryPivots.Links
}

export interface IStoriesPageTemplateProps {
	headerBackgroundImage: IClassicPageTemplateProps['headerBackgroundImage']
	Content?: IClassicPageTemplateProps['Content']
}

export const getStoriesPageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IStoriesPageTemplateProps => {
	const pageContent: IStoriesPageTemplateProps = {
		headerBackgroundImage: booksImg,
	}
	if (selectedPivotTitle === StoryPivots.Links) {
		pageContent.Content = <StoryLinks />
	}

	return pageContent
}
