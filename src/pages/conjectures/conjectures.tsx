import bookshelfImg from 'Assets/images/bookshelf_lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { IconButton } from '../../components/iconButton'
import { classicColors } from '../../modes/classic/classicConstants'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { Post } from '../../shared/posts/post'
import { conjectureFirstPost, conjectureLatestPost } from '../../shared/posts/posts'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { useChangeModeCommand } from '../../shared/presentational/components/navBarCommands'
import { makeTitleMap, usePivots } from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'
import { ConjecturePivots, conjecturePivotTitlePhrases, conjectureTitle } from './conjectures.types'

const titleMap = makeTitleMap(conjecturePivotTitlePhrases)

export const Conjecture: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, redirectTo } = usePivots(
		conjecturePivotTitlePhrases,
		ConjecturePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const changeModeCommand = useChangeModeCommand(classicColors.secondary)
	const showPostsNav = selectedPivotTitle === ConjecturePivots.Posts
	const { currentPost, firstClick, backClick, nextClick, latestClick } = usePostsNav(
		conjectureFirstPost,
		conjectureLatestPost,
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(3))
	}, [])

	if (redirectTo) {
		return redirectTo
	}

	let pageContent
	switch (selectedPivotTitle) {
		case ConjecturePivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case ConjecturePivots.Code:
			const { icon, onClick } = changeModeCommand
			pageContent = (
				<>
					<p>github, also check out TreeRing and PowerApps</p>
					<p>Click to change this website's display mode:</p>
					<IconButton
						icon={icon}
						onClick={onClick}
						width={'64px'}
						height={'64px'}
						applyGrow={false}
					/>
				</>
			)
			break
		case ConjecturePivots.Links:
		default:
			pageContent = <>538</>
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
