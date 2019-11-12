import React, { useContext, useState } from 'react'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { IScrollPosition, useScroll } from '../../shared/helpers/useScroll'
import { classicColors } from './classicConstants'
import { ClassicPageNav } from './classicPageNav'
import { ClassicPostsNav } from './classicPostsNav'

export interface IClassicNavProps {
	showPosts: boolean
	scrollRef: React.RefObject<HTMLDivElement>
	positionRef: React.RefObject<HTMLDivElement>
	rootStyle?: React.CSSProperties
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicNav: React.FunctionComponent<IClassicNavProps> = (
	props: IClassicNavProps
): JSX.Element => {
	const {
		showPosts: showPostsProp,
		scrollRef,
		positionRef,
		rootStyle,
		firstClick,
		backClick,
		nextClick,
		latestClick,
	} = props
	const mediaSize = useContext(MediaContext)
	const [showPostsState, setShowPostsState] = useState<boolean>(false)

	const onScroll = (prevPosition: IScrollPosition, currentPosition: IScrollPosition): void => {
		if (showPostsProp) {
			const yDistance = currentPosition.y - prevPosition.y
			const minUpDistance = 256
			const minDownDistance = 128
			if (yDistance > minUpDistance && showPostsState) {
				setShowPostsState(false)
			} else if (yDistance < -minDownDistance && !showPostsState) {
				setShowPostsState(true)
			}
		}
	}

	useScroll(scrollRef, positionRef, onScroll)

	const commonStyle = {
		backgroundColor: classicColors.secondary,
		width: '100%',
		height: '64px',
		display: 'flex',
	}

	let justifyContent = 'space-between'

	let showPosts: boolean
	let showPages: boolean
	if (mediaSize === MediaSize.Small) {
		showPosts = showPostsProp && showPostsState
		showPages = !showPosts
		if (showPosts) {
			justifyContent = 'flex-end'
		}
	} else {
		showPosts = showPostsProp
		showPages = true
	}

	return (
		<div
			style={{
				...commonStyle,
				justifyContent,
				...rootStyle,
			}}
		>
			{showPages && <ClassicPageNav orientation={NavOrientation.Left} />}
			{showPosts && (
				<ClassicPostsNav
					orientation={NavOrientation.Right}
					firstClick={firstClick}
					backClick={backClick}
					nextClick={nextClick}
					latestClick={latestClick}
				/>
			)}
		</div>
	)
}
