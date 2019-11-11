import bookshelfImg from 'Assets/images/bookshelf_lightbulbs.jpg'
import React, { useContext, useEffect } from 'react'
import { IconButton } from '../../components/iconButton'
import { classicColors } from '../../modes/classic/classicConstants'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import { Post } from '../../shared/posts/post'
import { mathScienceFirstPost, mathScienceLatestPost } from '../../shared/posts/posts'
import { usePostsNav } from '../../shared/posts/usePostsNav'
import { useChangeModeCommand } from '../../shared/presentational/components/navBarCommands'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'

export const mathScienceTitle = 'math & science'

export enum MathSciencePivots {
	Posts = 'posts',
	Code = 'code',
	Links = 'links',
}

export const mathSciencePivotTitlePhrases: IPivotTitlePhrases = [
	// posts about math & science
	[MathSciencePivots.Posts, 'about', mathScienceTitle],
	// my code hub
	['my', MathSciencePivots.Code, 'hub'],
	// some interesting links
	['some', 'interesting', MathSciencePivots.Links],
]

const titleMap = makeTitleMap(mathSciencePivotTitlePhrases)

export const MathScience: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots } = usePivots(
		mathSciencePivotTitlePhrases,
		MathSciencePivots.Posts,
		titleMap
	)
	const { setSeason } = useContext(SeasonsContext)
	const changeModeCommand = useChangeModeCommand(classicColors.secondary)
	const showPostsNav = pivotName === MathSciencePivots.Posts
	const { currentPost, firstClick, backClick, nextClick, latestClick } = usePostsNav(
		mathScienceFirstPost,
		mathScienceLatestPost,
		!showPostsNav
	)

	useEffect(() => {
		setSeason(getNextSeason(3))
	}, [])

	let pageContent
	switch (pivotName) {
		case MathSciencePivots.Posts:
			pageContent = <Post post={currentPost} />
			break
		case MathSciencePivots.Code:
			const { icon, label, onClick } = changeModeCommand
			pageContent = (
				<>
					<p>github, also check out TreeRing and PowerApps</p>
					<p>Click to change this website's display mode:</p>
					<IconButton icon={icon} width={'64px'} height={'64px'} applyGrow={false} />
				</>
			)
			break
		case MathSciencePivots.Links:
		default:
			pageContent = <>538</>
	}

	return (
		<Page
			headerBackgroundImage={bookshelfImg}
			titleText={mathScienceTitle}
			Pivots={pivots}
			Content={pageContent}
			showPostsNav={showPostsNav}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
		/>
	)
}
