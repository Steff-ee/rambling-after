import React, { useContext, useState } from 'react'
import { animated, to, useTransition } from 'react-spring'
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
	onScroll?: (positionY: number, prevPositionY: number) => void
}

export const ClassicNav: React.FunctionComponent<IClassicNavProps> = (
	props: IClassicNavProps
): JSX.Element => {
	const {
		showPosts: showPostsProp,
		onScroll: onScrollProp,
		scrollRef,
		positionRef,
		rootStyle,
		firstClick,
		backClick,
		nextClick,
		latestClick,
	} = props
	const mediaSize = useContext(MediaContext)
	const [isScrollingDownward, setIsScrollingDownward] = useState<boolean>(true)
	const [isAtTop, setIsAtTop] = useState<boolean>(true)

	const onScroll = (currentPosition: IScrollPosition, prevPosition: IScrollPosition): void => {
		if (showPostsProp) {
			const yDistance = currentPosition.y - prevPosition.y
			const minUpDistance = 128
			const minDownDistance = 128
			const minDistanceFromTop = 32

			if (yDistance > minUpDistance && isScrollingDownward) {
				setIsScrollingDownward(false)
			}

			if (yDistance < -minDownDistance && !isScrollingDownward) {
				setIsScrollingDownward(true)
			}

			if (currentPosition.y < minDistanceFromTop && isAtTop) {
				setIsAtTop(false)
			}

			if (currentPosition.y > minDistanceFromTop && !isAtTop) {
				setIsAtTop(true)
			}
		}

		if (onScrollProp) {
			onScrollProp(currentPosition.y, prevPosition.y)
		}
	}

	useScroll(scrollRef, positionRef, onScroll)

	const commonStyle = {
		backgroundColor: classicColors.secondary,
		width: '100%',
		height: '64px',
		display: 'flex',
	}

	let showPosts: boolean
	let showPages: boolean
	if (mediaSize === MediaSize.Small) {
		showPosts = !isAtTop && showPostsProp && isScrollingDownward
		showPages = !isAtTop && !showPosts
	} else {
		showPosts = showPostsProp
		showPages = true
	}

	const pagesTransition = useTransition(showPages, {
		from: { opacity: 0, transform: 'translate3d(0, -24%, 0)' },
		enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
		leave: { opacity: 0 },
	})

	const postsTransition = useTransition(showPosts, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	// the empty div on !showPages is to keep the space-between working
	return (
		<div
			style={{
				...commonStyle,
				...rootStyle,
			}}
		>
			{pagesTransition(
				(rootTransition, item) =>
					item && (
						<animated.div
							style={{
								...rootTransition,
								visibility: to(rootTransition.opacity, (opacity: number) =>
									opacity === 0 ? 'hidden' : 'visible'
								),
							}}
						>
							<ClassicPageNav orientation={NavOrientation.Left} />
						</animated.div>
					)
			)}
			{!showPages && <div />}
			{postsTransition(
				(rootTransition, item) =>
					item && (
						<animated.div
							style={{
								...rootTransition,
								visibility: to(rootTransition.opacity, (opacity: number) =>
									opacity === 0 ? 'hidden' : 'visible'
								),
							}}
						>
							<ClassicPostsNav
								orientation={NavOrientation.Right}
								firstClick={firstClick}
								backClick={backClick}
								nextClick={nextClick}
								latestClick={latestClick}
							/>
						</animated.div>
					)
			)}
		</div>
	)
}
