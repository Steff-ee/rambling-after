import React, { useContext } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaSize } from '../../components/mediaProvider'
import { grandTitleStyle, parallaxGroupStyle } from '../../shared/helpers/styles'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { useTextMorphClickSequence } from '../../shared/presentational/hooks/useTextMorphClickSequence'
import { SeasonsContext } from '../seasons/seasons'
import { Seasons } from '../seasons/seasonsHelpers'
import { IParallaxTitleProps } from './pageTemplate.types'

export const ParallaxTitle: React.FunctionComponent<IParallaxTitleProps> = (
	props: IParallaxTitleProps
): JSX.Element => {
	const { headerBackgroundImage, mediaSize, skipMorph } = props
	const { headerTitleText: headerTitleTextColor, border: borderColor } = useColors()
	const { season } = useContext(SeasonsContext)

	let backgroundOpacity = 0.68
	let showTopBar = false
	if (season === Seasons.None) {
		showTopBar = true
	} else if (season === Seasons.Winter) {
		backgroundOpacity = 0.9
	}

	const title = useTextMorphClickSequence(
		[
			{ texts: ['RAMBLING', 'AFTER'] },
			{ texts: ['RAMBLING', 'THOUGHTS'] },
			{ texts: ['PULSE', ''] },
			{ texts: ['LIKE', ''] },
			{ texts: ['LANTERNS', ''] },
			{ texts: ['AMBLING', ''] },
			{ texts: ['AFTER', ''] },
			{ texts: ['THE', ''] },
			{ texts: ['YET', ''] },
			{ texts: ['UNANSWERED', ''] },
		],
		skipMorph
	)

	const topBarHeight = showTopBar ? 44 : 1
	const bannerHeight = 480

	// large
	let titleFontSize = '136px'
	let titleLineHeight = '160px'
	// medium
	if (mediaSize === MediaSize.Medium) {
		titleFontSize = '100px'
		titleLineHeight = '120px'
	}
	// (parallax title is not used for small)

	return (
		<>
			{showTopBar && (
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
							backgroundColor: borderColor,
							width: '100%',
							height: `${topBarHeight}px`,
						}}
					/>
				</div>
			)}
			<div
				style={{
					...parallaxGroupStyle,
					zIndex: -3,
					transformOrigin: `0 -${topBarHeight}px`,
					transform: 'translateZ(-3px) scale(4)',
					height: `${bannerHeight}px`,
					backgroundColor: 'black',
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
					opacity={backgroundOpacity}
				/>
			</div>
			<div
				style={{
					...parallaxGroupStyle,
					position: 'absolute',
					width: '100vw',
					height: `${bannerHeight}px`,
					transformOrigin: showTopBar ? `0 0` : '0 32px',
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
						...grandTitleStyle,
						color: headerTitleTextColor,
						fontSize: titleFontSize,
						lineHeight: titleLineHeight,
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

export const MobileTitle: React.FunctionComponent = (): JSX.Element => {
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
