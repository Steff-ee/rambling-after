import bookshelfImg from 'Assets/images/bookshelf_lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { PageRoutes, redirectTo } from '../../shared/helpers/routes'
import { Post } from '../../shared/posts/post'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { ConjectureLinks } from './conjectureLinks'
import { ConjecturePivots, conjecturePivotTitlePhrases, conjectureTitle } from './conjectures.types'

const titleMap = makeTitleMap(conjecturePivotTitlePhrases)

export const Conjecture: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectPath: redirectPath1 } = usePivots(
		conjecturePivotTitlePhrases,
		ConjecturePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const showPostsNav = selectedPivotTitle === ConjecturePivots.Posts
	const {
		currentPost,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		redirectPath: redirectPath2,
	} = usePostsNav(PageRoutes.Conjecture, selectedPivotTitle, !showPostsNav)

	useEffect(() => {
		setSeason(getNextSeason(3))
	}, [])

	const redirectPath = redirectPath1 || redirectPath2
	if (redirectPath) {
		redirectTo(redirectPath)

		return <></>
	}

	let pageContent
	switch (selectedPivotTitle) {
		case ConjecturePivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case ConjecturePivots.Links:
		default:
			pageContent = <ConjectureLinks />
	}

	return (
		<Page
			headerBackgroundImage={bookshelfImg}
			titleText={conjectureTitle}
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
