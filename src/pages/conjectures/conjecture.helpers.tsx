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
	artistName: IClassicPageTemplateProps['artistName']
	artistLink: IClassicPageTemplateProps['artistLink']
	Content?: IClassicPageTemplateProps['Content']
}

export const getConjecturePageTemplateProps = (
	selectedPivotTitle: PivotRoutes | undefined
): IConjecturePageTemplateProps => {
	const { season } = useContext(SeasonsContext)

	let headerPicture: IPicture
	switch (season) {
		case Seasons.Winter:
			headerPicture = winterBackgrounds.conjecture
			break
		case Seasons.Spring:
			headerPicture = springBackgrounds.conjecture
			break
		case Seasons.Summer:
			headerPicture = summerBackgrounds.conjecture
			break
		case Seasons.Autumn:
			headerPicture = autumnBackgrounds.conjecture
			break
		case Seasons.None:
		default:
			headerPicture = classicBackgrounds.conjecture
	}

	const { src: headerBackgroundImage, ...artistProps } = headerPicture
	const pageContent: IConjecturePageTemplateProps = {
		...artistProps,
		headerBackgroundImage,
	}

	if (selectedPivotTitle === ConjecturePivots.Links) {
		pageContent.Content = <ConjectureLinks />
	}

	return pageContent
}
