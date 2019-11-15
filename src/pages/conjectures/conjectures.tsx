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
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'

export const conjecturesTitle = 'conjectures'

export enum ConjecturePivots {
	Posts = 'posts',
	Code = 'code',
	Links = 'links',
}

export const conjecturePivotTitlePhrases: IPivotTitlePhrases = [
	// posts arguing conjectures
	[ConjecturePivots.Posts, 'arguing', conjecturesTitle],
	// my code hub
	['my', ConjecturePivots.Code, 'hub'],
	// some interesting links
	['some', 'interesting', ConjecturePivots.Links],
]

const titleMap = makeTitleMap(conjecturePivotTitlePhrases)

export const Conjectures: React.FunctionComponent = (): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems } = usePivots(
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
			titleText={conjecturesTitle}
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
