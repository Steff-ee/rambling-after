import React from 'react'
import {
	getConjecturePageContent,
	getConjectureUsePivotsProps,
	showPostsNavForConjecture,
} from '../../pages/conjectures/conjecture.helpers'
import {
	getGamePageContent,
	getGameUsePivotsProps,
	showPostsNavForGame,
} from '../../pages/games/game.helpers'
import {
	getHomePageContent,
	getHomeUsePivotsProps,
	showPostsNavForHome,
} from '../../pages/home/home.helpers'
import {
	getStoriesPageContent,
	getStoriesUsePivotsProps,
	showPostsNavForStories,
} from '../../pages/stories/stories.helpers'
import { PageRoutes, redirectTo, usePageParams } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { usePivots } from '../../shared/presentational/hooks/usePivots'
import { IUsePivotProps } from '../../shared/presentational/hooks/usePivots.types'
import { SeasonalPageTemplate } from './seasonalPageTemplate'

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

const getPageContent = (
	page: string | undefined,
	pivot: PivotRoutes | undefined
): JSX.Element | undefined => {
	switch (page) {
		case PageRoutes.Stories:
			return getStoriesPageContent(pivot)

		case PageRoutes.Games:
			return getGamePageContent(pivot)

		case PageRoutes.Conjecture:
			return getConjecturePageContent(pivot)

		case PageRoutes.Home:
		default:
			return getHomePageContent(pivot)
	}
}

export const ClassicPageContainer: React.FunctionComponent = (): JSX.Element => {
	const { page } = usePageParams()

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
	} else {
		Content = getPageContent(page, selectedPivotTitle) as JSX.Element
	}

	const templateProps = {
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

	return <SeasonalPageTemplate {...templateProps} />
}
