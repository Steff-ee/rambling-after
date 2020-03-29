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
	const { season } = useContext(SeasonsContext)

	let headerBackgroundImage: string
	switch (season) {
		case Seasons.Winter:
			headerBackgroundImage = winterBackgrounds.conjecture.src
			break
		case Seasons.Spring:
			headerBackgroundImage = springBackgrounds.conjecture.src
			break
		case Seasons.Summer:
			headerBackgroundImage = summerBackgrounds.conjecture.src
			break
		case Seasons.Autumn:
			headerBackgroundImage = autumnBackgrounds.conjecture.src
			break
		case Seasons.None:
		default:
			headerBackgroundImage = classicBackgrounds.conjecture.src
	}

	const pageContent: IConjecturePageTemplateProps = {
		headerBackgroundImage,
	}
	if (selectedPivotTitle === ConjecturePivots.Links) {
		pageContent.Content = <ConjectureLinks />
	}

	return pageContent
}
