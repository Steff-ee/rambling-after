import cartographyImg from 'Assets/images/cartography.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes, redirectTo } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { AboutPage } from './about'
import { HomePivots, homePivotTitlePhrases, homeTitle } from './home.types'

const titleMap = makeTitleMap(homePivotTitlePhrases)

export const Home: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectPath: redirectPath1 } = usePivots(
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
		redirectPath: redirectPath2,
	} = usePostsNav(PageRoutes.Home, selectedPivotTitle, !showPostsNav)

	const redirectPath = redirectPath1 || redirectPath2
	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
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
