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
	artistName: IClassicPageTemplateProps['artistName']
	artistLink: IClassicPageTemplateProps['artistLink']
	Content?: IClassicPageTemplateProps['Content']
}

export const getStoriesPageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IStoriesPageTemplateProps => {
	const { season } = useContext(SeasonsContext)

	let headerPicture: IPicture
	switch (season) {
		case Seasons.Winter:
			headerPicture = winterBackgrounds.stories
			break
		case Seasons.Spring:
			headerPicture = springBackgrounds.stories
			break
		case Seasons.Summer:
			headerPicture = summerBackgrounds.stories
			break
		case Seasons.Autumn:
			headerPicture = autumnBackgrounds.stories
			break
		case Seasons.None:
		default:
			headerPicture = classicBackgrounds.stories
	}

	const { src: headerBackgroundImage, ...artistProps } = headerPicture
	const pageContent: IStoriesPageTemplateProps = {
		...artistProps,
		headerBackgroundImage,
	}

	if (selectedPivotTitle === StoryPivots.Links) {
		pageContent.Content = <StoryLinks />
	}

	return pageContent
}
