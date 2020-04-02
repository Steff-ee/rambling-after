import React, { useContext, useRef, useState } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { PivotItem } from '../../components/pivots/pivotItem'
import { Pivots } from '../../components/pivots/pivots'
import {
	contentWrapperStyle,
	entirePageStyle,
	grandTitleStyle,
	navBarStyleBigScreen,
	navBarStyleMobile,
	parallaxGroupStyle,
	parallaxRootStyle,
	pivotItemStyle,
	smallestDeviceWidth,
} from '../../shared/helpers/styles'
import { IScrollPosition, useScroll } from '../../shared/helpers/useScroll'
import { useDefaultTextStyle } from '../../shared/helpers/useStyles'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { useTextMorphSequence } from '../../shared/presentational/hooks/useTextMorphSequence'
import { ClassicNav } from './classicNav'
import {
	IClassicPageTemplateProps,
	IMobilePivotsProps,
	IParallaxPivotsProps,
	IParallaxTitleProps,
} from './classicPageTemplate.types'
import { Footer } from './footer'

const ParallaxTitle: React.FunctionComponent<IParallaxTitleProps> = (
	props: IParallaxTitleProps
): JSX.Element => {
	const { headerBackgroundImage, mediaSize, skipMorph } = props
	const { headerTitleText: headerTitleTextColor, border: borderColor } = useColors()

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
	let titleFontSize = '124px'
	let titleLineHeight = '160px'
	// medium
	if (mediaSize === MediaSize.Medium) {
		titleFontSize = '100px'
		titleLineHeight = '120px'
	}
	// (parallax title is not used for small)

	return (
		<>
			<div
				style={{
					position: 'sticky',
					top: 0,
					zIndex: 0,
					backgroundColor: borderColor,
					width: '100vw',
					height: `${topBarHeight}px`,
				}}
			/>
			<div
				style={{
					...parallaxGroupStyle,
					position: 'relative',
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
				<FadeLoadImage
					src={headerBackgroundImage}
					style={{
						height: `${bannerHeight}px`,
						width: '100vw',
						objectFit: 'cover',
						objectPosition: 'top',
					}}
				/>
				<div
					style={{
						...grandTitleStyle,
						position: 'absolute',
						color: headerTitleTextColor,
						fontSize: titleFontSize,
						lineHeight: titleLineHeight,
						cursor: 'pointer',
						width: '92vw',
						margin: '0 4vw',
					}}
				>
					{title}
				</div>
			</div>
		</>
	)
}

const ParallaxPivots: React.FunctionComponent<IParallaxPivotsProps> = (
	props: IParallaxPivotsProps
): JSX.Element => {
	const { arePivotsSticky, selectedPivotTitle, setPivot, pivotsItems, pivotsPositionRef } = props
	const { navbarText: navbarTextColor, text: textColor } = useColors()
	const color = arePivotsSticky ? navbarTextColor : textColor

	const pivotRootStyle = {
		fontFamily: 'Source Code Pro',
		fontSize: '23px',
		letterSpacing: '1px',
		color,
		justifyContent: 'center',
	}

	return (
		<div
			style={{
				margin: '75px 20% 100px 20%',
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
				commonItemStyle={{
					...pivotItemStyle,
					width: '100px',
				}}
				commonIsActiveStyle={{
					borderBottom: `2px solid ${color}`,
				}}
				pivotItems={pivotsItems}
			/>
		</div>
	)
}

const MobilePivots: React.FunctionComponent<IMobilePivotsProps> = (
	props: IMobilePivotsProps
): JSX.Element => {
	const { setPivot, pivotsItems } = props
	const { text: textColor } = useColors()

	return (
		<div style={{ margin: '64px 0px' }}>
			{pivotsItems.map((pivotItem) => (
				<PivotItem
					style={{
						...pivotItemStyle,
						borderBottom: `2px solid ${textColor}`,
					}}
					text={
						<span>
							Go to
							<span>
								<b>{` ${pivotItem.text} `}</b>
							</span>
							page
						</span>
					}
					onClick={(): void => setPivot(pivotItem)}
					key={pivotItem.key}
					isActive={false}
				/>
			))}
		</div>
	)
}

const MobileTitle: React.FunctionComponent = (): JSX.Element => {
	const { headerTitleText: titleColor, border: borderColor } = useColors()

	return (
		<div
			style={{
				fontWeight: 500,
				fontFamily: 'Montserrat',
				color: titleColor,
				fontSize: '36px',
				lineHeight: '52px',
				letterSpacing: '2px',
				padding: '68px 0px',
				backgroundColor: borderColor,
				position: 'relative',
				width: '100vw',
				zIndex: 6,
			}}
		>
			RAMBLING AFTER
		</div>
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
		backgroundStyle,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		showPostsNav,
		artistName,
		artistLink,
	} = props
	const mediaSize = useContext(MediaContext)
	const defaultTextStyle = useDefaultTextStyle()
	let [arePivotsSticky, setArePivotsSticky] = useState<boolean>(false)
	const contentPositionRef = useRef(null)
	const pivotsPositionRef = useRef(null)
	const scrollRef = useRef(null)
	const { border: borderColor, text: textColor } = useColors()

	const skipMorph = mediaSize === MediaSize.Small
	const allowStickyPivots = mediaSize !== MediaSize.Medium

	const onPivotsScroll = (currentPosition: IScrollPosition): void => {
		const shouldPivotsBeSticky = currentPosition.y <= 0
		if (arePivotsSticky !== shouldPivotsBeSticky) {
			setArePivotsSticky(shouldPivotsBeSticky)
		}
	}

	arePivotsSticky = allowStickyPivots && arePivotsSticky

	// (TODO) both useScrolls rely on the same scrollbar, so it should be possible to reduce computation
	useScroll(scrollRef, pivotsPositionRef, onPivotsScroll)

	let pivots: JSX.Element
	let titleElement: JSX.Element
	let scrollRefStyle: React.CSSProperties
	let navBarStyle: React.CSSProperties
	if (mediaSize === MediaSize.Small) {
		titleElement = <MobileTitle />
		scrollRefStyle = {
			...entirePageStyle,
			overflowX: 'hidden',
			overflowY: 'scroll',
		}
		pivots = <div style={{ height: '96px' }} ref={pivotsPositionRef} />
		navBarStyle = navBarStyleMobile
	} else {
		pivots = (
			<ParallaxPivots
				arePivotsSticky={arePivotsSticky}
				setPivot={setPivot}
				selectedPivotTitle={selectedPivotTitle}
				pivotsItems={pivotsItems}
				pivotsPositionRef={pivotsPositionRef}
			/>
		)
		titleElement = (
			<ParallaxTitle
				headerBackgroundImage={headerBackgroundImage}
				mediaSize={mediaSize}
				skipMorph={skipMorph}
			/>
		)
		scrollRefStyle = parallaxRootStyle
		navBarStyle = navBarStyleBigScreen
	}

	const classicNav = (
		<ClassicNav
			rootStyle={{ ...navBarStyle, backgroundColor: borderColor }}
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
				color: textColor,
				position: 'absolute',
				minWidth: smallestDeviceWidth,
			}}
			ref={scrollRef}
		>
			{mediaSize === MediaSize.Small && arePivotsSticky && classicNav}
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
					<div style={contentWrapperStyle}>
						<div style={{ maxWidth: '100%' }}>{Content}</div>
					</div>
					{mediaSize === MediaSize.Small && (
						<MobilePivots setPivot={setPivot} pivotsItems={pivotsItems} />
					)}
				</div>
			</div>
			<Footer artistName={artistName} artistLink={artistLink} />
		</div>
	)
}
