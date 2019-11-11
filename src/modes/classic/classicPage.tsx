import backgroundTextureImg from 'Assets/images/background_texture.png'
import React, { useContext } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { Colors } from '../../shared/helpers/constants'
import {
	defaultTextStyle,
	parallaxGroupStyle,
	parallaxRootStyle,
} from '../../shared/helpers/styles'
import { useTextMorphSequence } from '../../shared/presentational/hooks/useTextMorphSequence'
import { classicColors } from './classicConstants'
import { ClassicLeftNav } from './classicLeftNav'
import { ClassicRightNav } from './classicRightNav'

export interface IPageProps {
	headerBackgroundImage: string
	Pivots: JSX.Element
	Content: JSX.Element
	showRightNav: boolean
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicPage: React.FunctionComponent<IPageProps> = (
	props: IPageProps
): JSX.Element => {
	const {
		Pivots,
		Content,
		headerBackgroundImage,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		showRightNav,
	} = props
	const mediaSize = useContext(MediaContext)

	const skipMorph = mediaSize === MediaSize.Small

	const title = useTextMorphSequence(
		[
			{ texts: ['RAMBLING', 'AFTER'], wait: 4000 },
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

	let titleFontSize = '96px'
	let titleLetterSpacing = '18px'
	let titleLineHeight = '144px'
	if (mediaSize === MediaSize.Small) {
		titleFontSize = '64px'
		titleLetterSpacing = '12px'
		titleLineHeight = '96px'
	}

	return (
		<div
			style={{
				...defaultTextStyle,
				...parallaxRootStyle,
				backgroundColor: classicColors.primary,
				position: 'absolute',
			}}
		>
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
						fontSize: titleFontSize,
						lineHeight: titleLineHeight,
						letterSpacing: titleLetterSpacing,
						fontWeight: 600,
						fontFamily: 'Montserrat',
						color: classicColors.primary,
						filter: `drop-shadow(-1px 1px 8px ${Colors.MaroonMud})`,
						cursor: 'pointer',
					}}
				>
					{title}
				</div>
			</div>
			<div>
				<div
					style={{
						backgroundImage: `url(${backgroundTextureImg})`,
						position: 'sticky',
						backgroundAttachment: 'fixed',
						backgroundPosition: 'right center',
					}}
				>
					<div
						style={{
							position: 'sticky',
							top: 0,
							backgroundColor: classicColors.secondary,
							width: '100%',
							height: '64px',
							marginTop: '-1px',
							display: 'flex',
							justifyContent: 'space-between',
							zIndex: 2,
						}}
					>
						<ClassicLeftNav />
						{showRightNav && (
							<ClassicRightNav
								firstClick={firstClick}
								backClick={backClick}
								nextClick={nextClick}
								latestClick={latestClick}
							/>
						)}
					</div>
					<div style={{ margin: '44px 0' }}>{Pivots}</div>
					<div
						style={{
							maxWidth: '972px',
							margin: 'auto',
							padding: '0 5% 5% 5%',
							textAlign: 'left',
						}}
					>
						{Content}
					</div>
				</div>
			</div>
		</div>
	)
}
