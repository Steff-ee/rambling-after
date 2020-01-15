import React from 'react'
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
import { Post } from '../../shared/posts/post'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { usePivots } from '../../shared/presentational/hooks/usePivots'
import { ClassicPageTemplate, IClassicPageTemplateProps } from './classicPageTemplate'

// tslint:disable:cyclomatic-complexity
export const ClassicPageContainer: React.FunctionComponent = (): JSX.Element => {
	const { page } = useParams<IRouteParams>()

	let usePivotsProps
	switch (page) {
		case PageRoutes.Stories:
			usePivotsProps = getStoriesUsePivotsProps()
			break
		case PageRoutes.Games:
			usePivotsProps = getGameUsePivotsProps()
			break
		case PageRoutes.Conjecture:
			usePivotsProps = getConjectureUsePivotsProps()
			break
		case PageRoutes.Home:
		default:
			usePivotsProps = getHomeUsePivotsProps()
	}

	const { selectedPivotTitle, setPivot, pivotsItems, redirectPath: redirectPath1 } = usePivots(
		usePivotsProps
	)

	let showPostsNav: boolean
	switch (page) {
		case PageRoutes.Stories:
			showPostsNav = showPostsNavForStories(selectedPivotTitle)
			break
		case PageRoutes.Games:
			showPostsNav = showPostsNavForGame(selectedPivotTitle)
			break
		case PageRoutes.Conjecture:
			showPostsNav = showPostsNavForConjecture(selectedPivotTitle)
			break
		case PageRoutes.Home:
		default:
			showPostsNav = showPostsNavForHome(selectedPivotTitle)
	}

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

	let pageTemplateProps: IClassicPageTemplateProps
	switch (page) {
		case PageRoutes.Stories:
			pageTemplateProps = {
				...commonTemplateProps,
				...getStoriesPageTemplateProps(selectedPivotTitle),
			}
			break
		case PageRoutes.Games:
			pageTemplateProps = {
				...commonTemplateProps,
				...getGamePageTemplateProps(selectedPivotTitle),
			}
			break
		case PageRoutes.Conjecture:
			pageTemplateProps = {
				...commonTemplateProps,
				...getConjecturePageTemplateProps(selectedPivotTitle),
			}
			break
		case PageRoutes.Home:
		default:
			pageTemplateProps = {
				...commonTemplateProps,
				...getHomePageTemplateProps(selectedPivotTitle),
			}
	}

	return <ClassicPageTemplate {...pageTemplateProps} />
}
