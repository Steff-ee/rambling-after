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
export const getConjecturePageContent = (
	selectedPivotTitle: PivotRoutes | undefined
): JSX.Element | undefined => {
	if (selectedPivotTitle === ConjecturePivots.Links) {
		return <ConjectureLinks />
	}

	return undefined
}

export const getConjecturePageBackground = (): Omit<
	IPageTemplateBackgroundsProps,
	'backgroundStyle'
> => {
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

	return {
		...artistProps,
		headerBackgroundImage,
	}
}
