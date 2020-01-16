import backgroundTextureImg from 'Assets/images/background_texture.png'
import React, { useContext, useRef, useState } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { Pivots } from '../../components/pivots/pivots'
import { Colors } from '../../shared/helpers/constants'
import {
	defaultTextStyle,
	entirePageStyle,
	parallaxGroupStyle,
	parallaxRootStyle,
	smallestDeviceWidth,
} from '../../shared/helpers/styles'
import { IScrollPosition, useScroll } from '../../shared/helpers/useScroll'
import { IUsePivotKeyReturns } from '../../shared/presentational/hooks/usePivots'
import { useTextMorphSequence } from '../../shared/presentational/hooks/useTextMorphSequence'
import { classicColors } from './classicConstants'
import { ClassicNav } from './classicNav'

export interface IClassicPageTemplateProps {
	headerBackgroundImage: string
	Content: JSX.Element
	showPostsNav: boolean

	/* Pivots */
	selectedPivotTitle: string | undefined
	setPivot: IUsePivotKeyReturns['setPivot']
	pivotsItems: IUsePivotKeyReturns['pivotsItems']

	/* Posts Navigation */
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

interface IParallaxTitleProps {
	headerBackgroundImage: string
	mediaSize: MediaSize
	skipMorph: boolean
}

const commonTitleStyle: React.CSSProperties = {
	fontWeight: 600,
	fontFamily: 'Montserrat',
	color: classicColors.primary,
}

const backgroundStyle: React.CSSProperties = {
	backgroundImage: `url(${backgroundTextureImg})`,
	backgroundRepeat: 'repeat',
	backgroundPosition: 'right center',
}

const pivotItemStyle: React.CSSProperties = {
	width: '108px',
	height: '64px',
	margin: '0 4%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	whiteSpace: 'nowrap',
}

const ParallaxTitle: React.FunctionComponent<IParallaxTitleProps> = (
	props: IParallaxTitleProps
): JSX.Element => {
	const { headerBackgroundImage, mediaSize, skipMorph } = props

	const title = useTextMorphSequence(
		[
			{ texts: ['RAMBLING', 'AFTER'], wait: 6000 },
			{ texts: ['RAMBLING', 'THOUGHTS'], wait: 2000 },
			{ texts: ['PULSE', ''], wait: 750 },
			{ texts: ['LIKE', ''], wait: 750 },
			{ texts: ['LANTERNS', ''], wait: 2000 },
			{ texts: ['AMBLING', ''], wait: 750 },
			{ texts: ['AFTER', ''], wait: 750 },
			{ texts: ['THE', ''], wait: 750 },
			{ texts: ['YET', ''], wait: 2000 },
			{ texts: ['UNANSWERED', ''], wait: 8000 },
		],
		skipMorph
	)

	const topBarHeight = 44
	const bannerHeight = 480

	// large
	let titleFontSize = '96px'
	let titleLetterSpacing = '18px'
	let titleLineHeight = '144px'
	// medium
	if (mediaSize === MediaSize.Medium) {
		titleFontSize = '72px'
		titleLetterSpacing = '16px'
		titleLineHeight = '96px'
	}
	// (parallax title is not used for small)

	return (
		<>
			<div
				style={{
					...parallaxGroupStyle,
					zIndex: -2,
					transformOrigin: '0 0',
					transform: 'translateZ(-20px) scale(21)',
				}}
			>
				<div
					style={{
						backgroundColor: classicColors.secondary,
						width: '100%',
						height: `${topBarHeight}px`,
					}}
				/>
			</div>
			<div
				style={{
					...parallaxGroupStyle,
					zIndex: -3,
					transformOrigin: `0 -${topBarHeight}px`,
					transform: 'translateZ(-3px) scale(4)',
					height: `${bannerHeight}px`,
				}}
			>
				<FadeLoadImage
					src={headerBackgroundImage}
					style={{
						height: `100%`,
						width: '100vw',
						objectFit: 'cover',
						objectPosition: 'top',
					}}
				/>
			</div>
			<div
				style={{
					...parallaxGroupStyle,
					position: 'absolute',
					width: '100vw',
					height: `${bannerHeight}px`,
					transformOrigin: `0 0`,
					transform: 'translateZ(-1px) scale(2)',
					top: topBarHeight,
					zIndex: -1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						...commonTitleStyle,
						fontSize: titleFontSize,
						lineHeight: titleLineHeight,
						letterSpacing: titleLetterSpacing,
						filter: `drop-shadow(-1px 1px 8px ${Colors.MaroonMud})`,
						cursor: 'pointer',
						margin: '0 16px',
					}}
				>
					{title}
				</div>
			</div>
		</>
	)
}

export const ClassicPageTemplate: React.FunctionComponent<IClassicPageTemplateProps> = (
	props: IClassicPageTemplateProps
): JSX.Element => {
	const {
		selectedPivotTitle,
		setPivot,
		pivotsItems,
		Content,
		headerBackgroundImage,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		showPostsNav,
	} = props
	const mediaSize = useContext(MediaContext)
	let [arePivotsSticky, setArePivotsSticky] = useState<boolean>(false)
	const contentPositionRef = useRef(null)
	const pivotsPositionRef = useRef(null)
	const scrollRef = useRef(null)

	const skipMorph = mediaSize === MediaSize.Small
	const allowStickyPivots = mediaSize === MediaSize.Large

	const onPivotsScroll = (currentPosition: IScrollPosition): void => {
		const shouldPivotsBeSticky = currentPosition.y <= 0
		if (arePivotsSticky !== shouldPivotsBeSticky) {
			setArePivotsSticky(shouldPivotsBeSticky)
		}
	}

	arePivotsSticky = allowStickyPivots && arePivotsSticky

	// (TODO) both useScrolls rely on the same scrollbar, so it should be possible to reduce computation
	useScroll(scrollRef, pivotsPositionRef, onPivotsScroll, !allowStickyPivots)

	const pivotRootStyle = {
		fontFamily: 'Comfortaa',
		fontSize: '22px',
		color: arePivotsSticky ? classicColors.primary : classicColors.secondary,
		justifyContent: 'center',
	}

	let pivots: JSX.Element = <div style={{ height: '64px' }} />
	let titleElement: JSX.Element
	let scrollRefStyle: React.CSSProperties
	if (mediaSize !== MediaSize.Small) {
		pivots = (
			<div
				style={{
					margin: '64px 20%',
					position: arePivotsSticky ? 'sticky' : 'relative',
					top: 0,
					zIndex: arePivotsSticky ? 3 : 1,
				}}
				ref={pivotsPositionRef}
			>
				<Pivots
					activeItemKey={selectedPivotTitle}
					onClick={setPivot}
					rootStyle={pivotRootStyle}
					commonItemStyle={pivotItemStyle}
					commonIsActiveStyle={{
						borderBottom: `2px solid ${classicColors.secondary}`,
					}}
					pivotItems={pivotsItems}
				/>
			</div>
		)
		titleElement = (
			<ParallaxTitle
				headerBackgroundImage={headerBackgroundImage}
				mediaSize={mediaSize}
				skipMorph={skipMorph}
			/>
		)
		scrollRefStyle = parallaxRootStyle
	} else {
		titleElement = (
			<div
				style={{
					...commonTitleStyle,
					fontSize: '26px',
					letterSpacing: '6px',
					padding: '192px 0px 64px 0px',
					marginTop: '-128px',
					backgroundColor: classicColors.secondary,
					position: 'relative',
					width: '100vw',
					zIndex: 6,
				}}
			>
				RAMBLING AFTER
			</div>
		)
		scrollRefStyle = {
			...entirePageStyle,
			overflowX: 'hidden',
			overflowY: 'scroll',
		}
	}

	const classicNav = (
		<ClassicNav
			rootStyle={{
				position: mediaSize === MediaSize.Small ? 'fixed' : 'sticky',
				top: 0,
				marginTop: mediaSize === MediaSize.Small ? '0px' : '-1px',
				zIndex: 2,
			}}
			firstClick={firstClick}
			backClick={backClick}
			nextClick={nextClick}
			latestClick={latestClick}
			showPosts={showPostsNav}
			scrollRef={scrollRef}
			positionRef={contentPositionRef}
		/>
	)

	return (
		<div
			style={{
				...defaultTextStyle,
				...scrollRefStyle,
				...backgroundStyle,
				backgroundColor: classicColors.primary,
				overscrollBehavior: 'none',
				position: 'absolute',
				minWidth: smallestDeviceWidth,
			}}
			ref={scrollRef}
		>
			{mediaSize === MediaSize.Small && classicNav}
			{titleElement}
			<div>
				<div
					style={{
						...backgroundStyle,
						position: mediaSize === MediaSize.Small ? 'relative' : 'sticky',
					}}
					ref={contentPositionRef}
				>
					{mediaSize !== MediaSize.Small && classicNav}
					{pivots}
					<div
						style={{
							margin: 'auto',
							padding: '0 5% 5% 5%',
							textAlign: 'left',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<div style={{ maxWidth: '100%' }}>{Content}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
