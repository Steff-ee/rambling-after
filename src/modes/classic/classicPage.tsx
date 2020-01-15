import backgroundTextureImg from 'Assets/images/background_texture.png'
import { IPivotStyles, Pivot, PivotItem } from 'office-ui-fabric-react'
import React, { useContext, useRef, useState } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
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

export interface IPageProps {
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

const commonTitleStyle = {
	fontWeight: 600,
	fontFamily: 'Montserrat',
	color: classicColors.primary,
}

const backgroundStyle = {
	backgroundImage: `url(${backgroundTextureImg})`,
	backgroundRepeat: 'repeat',
	backgroundPosition: 'right center',
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
		<div>
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
		</div>
	)
}

export const ClassicPage: React.FunctionComponent<IPageProps> = (
	props: IPageProps
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

	const pivotStyles: Partial<IPivotStyles> = {
		text: [
			{
				fontFamily: 'Comfortaa',
				fontSize: '22px',
				width: '108px',
				color: arePivotsSticky ? classicColors.primary : classicColors.secondary,
			},
		],
		link: [{ height: '64px', margin: '0 4%' }],
		linkIsSelected: [{ height: '64px', margin: '0 4%' }],
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
				<Pivot selectedKey={selectedPivotTitle} onLinkClick={setPivot} styles={pivotStyles}>
					{pivotsItems.map((pivotProps) => (
						<PivotItem {...pivotProps} />
					))}
				</Pivot>
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
					padding: '16px 0px',
					backgroundColor: classicColors.secondary,
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

	return (
		<div
			style={{
				...defaultTextStyle,
				...scrollRefStyle,
				...backgroundStyle,
				overscrollBehavior: 'none',
				position: 'absolute',
				minWidth: smallestDeviceWidth,
			}}
			ref={scrollRef}
		>
			{titleElement}
			<div>
				<div
					style={{
						...backgroundStyle,
						position: 'sticky',
					}}
					ref={contentPositionRef}
				>
					<ClassicNav
						rootStyle={{
							position: 'sticky',
							top: 0,
							marginTop: '-1px',
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
