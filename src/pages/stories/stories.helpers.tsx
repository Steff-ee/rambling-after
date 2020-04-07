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

export const getStoriesPageContent = (
	selectedPivotTitle: PivotRoutes | undefined
): JSX.Element | undefined => {
	if (selectedPivotTitle === StoryPivots.Links) {
		return <StoryLinks />
	}

	return undefined
}

export const getStoriesPageBackground = (): Omit<
	IPageTemplateBackgroundsProps,
	'backgroundStyle'
> => {
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

	return {
		...artistProps,
		headerBackgroundImage,
	}
}
