import cartographyImg from 'Assets/images/cartography.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { PivotRoutes } from '../../shared/posts/post.types'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { AboutPage } from './about'
import { HomePivots, homePivotTitlePhrases, homeTitle } from './home.types'

const titleMap = makeTitleMap(homePivotTitlePhrases)

export const Home: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectTo: redirectTo1 } = usePivots(
		homePivotTitlePhrases,
		HomePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = selectedPivotTitle === HomePivots.Posts
	useEffect(() => {
		setSeason(getNextSeason(0))
	}, [])
	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectTo: redirectTo2,
	} = usePostsNav(
		PageRoutes.Home,
		selectedPivotTitle as PivotRoutes, // (TODO) remove cast
		!showPostsNav
	)

	const redirectTo = redirectTo1 || redirectTo2
	if (redirectTo) {
		return redirectTo
	}

	let pageContent
	switch (selectedPivotTitle) {
		case HomePivots.About:
			pageContent = <AboutPage />
			break
		case HomePivots.Posts:
		default:
			pageContent = <Post post={currentPost} />
	}

	return (
		<Page
			headerBackgroundImage={cartographyImg}
			titleText={homeTitle}
			selectedPivotTitle={selectedPivotTitle}
			setPivot={setPivot}
			pivotsItems={pivotsItems}
			Content={pageContent}
			showPostsNav={showPostsNav}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
		/>
	)
}

export default Home
