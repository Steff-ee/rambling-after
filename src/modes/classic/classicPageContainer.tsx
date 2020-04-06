import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {
	getConjecturePageTemplateProps,
	getConjectureUsePivotsProps,
	showPostsNavForConjecture,
} from '../../pages/conjectures/conjecture.helpers'
import {
	getGamePageTemplateProps,
	getGameUsePivotsProps,
	showPostsNavForGame,
} from '../../pages/games/game.helpers'
import {
	getHomePageTemplateProps,
	getHomeUsePivotsProps,
	showPostsNavForHome,
} from '../../pages/home/home.helpers'
import {
	getStoriesPageTemplateProps,
	getStoriesUsePivotsProps,
	showPostsNavForStories,
} from '../../pages/stories/stories.helpers'
import { IRouteParams, PageRoutes, redirectTo } from '../../shared/helpers/routes'
import { classicBackgroundTextureStyle } from '../../shared/helpers/styles'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { usePivots } from '../../shared/presentational/hooks/usePivots'
import { IUsePivotProps } from '../../shared/presentational/hooks/usePivots.types'
import { SeasonsContext } from '../seasons/seasons'
import { Seasons } from '../seasons/seasonsHelpers'
import { ClassicPageTemplate } from './classicPageTemplate'
import { IClassicPageTemplateProps } from './classicPageTemplate.types'

const getUsePivotProps = (page: string | undefined): IUsePivotProps => {
	switch (page) {
		case PageRoutes.Stories:
			return getStoriesUsePivotsProps()

		case PageRoutes.Games:
			return getGameUsePivotsProps()

		case PageRoutes.Conjecture:
			return getConjectureUsePivotsProps()

		case PageRoutes.Home:
		default:
			return getHomeUsePivotsProps()
	}
}

const getShowPostsNav = (page: string | undefined, pivot: PivotRoutes | undefined): boolean => {
	switch (page) {
		case PageRoutes.Stories:
			return showPostsNavForStories(pivot)

		case PageRoutes.Games:
			return showPostsNavForGame(pivot)

		case PageRoutes.Conjecture:
			return showPostsNavForConjecture(pivot)

		case PageRoutes.Home:
		default:
			return showPostsNavForHome(pivot)
	}
}

// tslint:disable:typedef
const getPageTemplateProps = <T extends {}>(
	page: string | undefined,
	pivot: PivotRoutes | undefined,
	commonTemplateProps: T,
	isClassic: boolean,
	backgroundColor: string
) => {
	let backgroundStyle: React.CSSProperties
	if (isClassic) {
		backgroundStyle = classicBackgroundTextureStyle
	} else {
		backgroundStyle = { backgroundColor }
	}

	switch (page) {
		case PageRoutes.Stories:
			return {
				...commonTemplateProps,
				...getStoriesPageTemplateProps(pivot),
				backgroundStyle,
			}

		case PageRoutes.Games:
			return {
				...commonTemplateProps,
				...getGamePageTemplateProps(pivot),
				backgroundStyle,
			}

		case PageRoutes.Conjecture:
			return {
				...commonTemplateProps,
				...getConjecturePageTemplateProps(pivot),
				backgroundStyle,
			}

		case PageRoutes.Home:
		default:
			return {
				...commonTemplateProps,
				...getHomePageTemplateProps(pivot),
				backgroundStyle,
			}
	}
}

export const ClassicPageContainer: React.FunctionComponent = (): JSX.Element => {
	const { page } = useParams<IRouteParams>()
	const { season } = useContext(SeasonsContext)
	const { background: backgroundColor } = useColors()

	const { selectedPivotTitle, setPivot, pivotsItems, redirectPath: redirectPath1 } = usePivots(
		getUsePivotProps(page)
	)

	const showPostsNav: boolean = getShowPostsNav(page, selectedPivotTitle)

	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectPath: redirectPath2,
	} = usePostsNav(page as PageRoutes, selectedPivotTitle, !showPostsNav)

	const redirectPath = redirectPath2 || redirectPath1
	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
	}

	let Content = <></>
	if (showPostsNav) {
		Content = <Post post={currentPost} />
	}

	const commonTemplateProps = {
		firstClick,
		backClick,
		nextClick,
		latestClick,
		Content,
		showPostsNav,
		selectedPivotTitle,
		setPivot,
		pivotsItems,
	}

	const pageTemplateProps: IClassicPageTemplateProps = getPageTemplateProps(
		page,
		selectedPivotTitle,
		commonTemplateProps,
		season === Seasons.None,
		backgroundColor
	)

	return <ClassicPageTemplate {...pageTemplateProps} />
}
