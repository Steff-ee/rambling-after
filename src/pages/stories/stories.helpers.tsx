import booksImg from 'Assets/images/books.jpg'
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
	const { season } = useContext(SeasonsContext)

	let headerBackgroundImage: string
	switch (season) {
		case Seasons.Winter:
			headerBackgroundImage = winterBackgrounds[1].src
			break
		case Seasons.Spring:
			headerBackgroundImage = springBackgrounds[1].src
			break
		case Seasons.Summer:
			headerBackgroundImage = summerBackgrounds[1].src
			break
		case Seasons.Autumn:
			headerBackgroundImage = autumnBackgrounds[1].src
			break
		case Seasons.None:
		default:
			headerBackgroundImage = booksImg
	}

	const pageContent: IStoriesPageTemplateProps = {
		headerBackgroundImage,
	}
	if (selectedPivotTitle === StoryPivots.Links) {
		pageContent.Content = <StoryLinks />
	}

	return pageContent
}
