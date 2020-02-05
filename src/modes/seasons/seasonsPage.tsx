import React, { useContext } from 'react'
import { IconLayout } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { Colors } from '../../shared/helpers/constants'
import {
	parallaxGroupStyle,
	parallaxRootStyle,
	smallestDeviceWidth,
} from '../../shared/helpers/styles'
import { CircadianMood, getCircadianMood } from '../../shared/helpers/time'
import { useDefaultTextStyle } from '../../shared/helpers/useStyles'
import { Fireflies } from '../../shared/presentational/components/fireflies'
import { BackgroundsContext } from '../../shared/presentational/hooks/useBackgrounds'
import { ColorsContext } from '../../shared/presentational/hooks/useColors'
import { IUsePivotKeyReturns } from '../../shared/presentational/hooks/usePivots.types'
// (TODO) fade-in is not hiding the loading bars
// import { Img } from 'react-progressive-loader'
import { SeasonsNav } from './seasonsNav'

export interface IPageProps {
	titleText: string
	Content: JSX.Element

	/* Pivots */
	selectedPivotTitle: string | undefined
	setPivot: IUsePivotKeyReturns['setPivot']
	pivotsItems: IUsePivotKeyReturns['pivotsItems']
}

const transparentColor = 'rgba(10, 10, 10, 0.5)'

const titleStyle: React.CSSProperties = {
	fontFamily: 'Cabin Sketch',
	fontSize: '2.5rem',
	margin: '30px auto',
	padding: '30px',
	width: '200px',
}

const pivotsStyle: React.CSSProperties = {
	margin: '30px auto',
	maxWidth: '500px',
}

const contentFrameStyle: React.CSSProperties = {
	backgroundColor: `${transparentColor}`,
	border: '1px solid black',
	padding: '5vh 5vw',
	marginTop: '30px',
}

const contentTextStyle: React.CSSProperties = {
	maxWidth: 600,
	minWidth: 200,
	maxHeight: 2800,
	overflowY: 'auto',
	margin: '6vh 6vw',
	color: Colors.OffBlack,
	textAlign: 'left',
}

const artistAttributionStyle: React.CSSProperties = {
	position: 'relative',
	width: '100vw',
	maxWidth: '600px',
	height: '32px',
	padding: '6px',
	margin: 'auto',
	marginTop: '-44px',
}

export const SeasonsPage: React.FunctionComponent<IPageProps> = (
	props: IPageProps
): JSX.Element => {
	const { selectedPivotTitle, setPivot, pivotsItems, titleText, Content } = props
	const { primary, secondary, accent } = useContext(ColorsContext)
	const { backgrounds, selectedIndex } = useContext(BackgroundsContext)
	const mediaSize = useContext(MediaContext)
	const defaultTextStyle = useDefaultTextStyle()
	const background = backgrounds[selectedIndex]

	const mood = getCircadianMood()
	let brightness: string
	if (mood === CircadianMood.Day) {
		brightness = '100%'
	} else if (mood === CircadianMood.Night) {
		brightness = '50%'
	} else {
		brightness = '75%'
	}

	let seasonsNav: JSX.Element
	if (mediaSize === MediaSize.Small) {
		seasonsNav = <SeasonsNav iconLayout={IconLayout.Horizontal} />
	} else {
		seasonsNav = (
			<SeasonsNav iconLayout={IconLayout.Vertical} rootStyle={{ position: 'absolute' }} />
		)
	}

	// const pivotStyles: Partial<IPivotStyles> = {
	// 	text: [
	// 		{
	// 			fontFamily: 'Comfortaa',
	// 			fontSize: '22px',
	// 			width: '96px',
	// 		},
	// 	],
	// }

	return (
		<div
			style={{
				...parallaxRootStyle,
				...defaultTextStyle,
				minWidth: smallestDeviceWidth,
			}}
		>
			<div
				style={{
					...parallaxGroupStyle,
					position: 'absolute',
					transformOrigin: '0 0',
					transform: 'translateZ(-4px) scale(5)',
					zIndex: 1,
				}}
			>
				<Fireflies width={'100vw'} height={'200vh'} />
			</div>
			<div
				style={{
					...parallaxGroupStyle,
					position: 'absolute',
					transformOrigin: '0 0',
					transform: 'translateZ(-7px) scale(8)',
					zIndex: -3,
					filter: `brightness(${brightness})`,
				}}
			>
				<img src={background.src} />
			</div>
			<div>
				<div
					style={{
						backgroundColor: accent,
						position: 'sticky',
						top: '0px',
						left: '0px',
						zIndex: 5,
					}}
				>
					{seasonsNav}
				</div>
				<div
					style={{
						...parallaxGroupStyle,
						transformOrigin: '0 -25px',
						transform: 'translateZ(-4px) scale(5)',
					}}
				>
					<div style={{ ...titleStyle, backgroundColor: secondary, zIndex: 2 }}>
						{titleText}
					</div>
				</div>
				<div
					style={{
						...parallaxGroupStyle,
						transformOrigin: '0px -190px',
						transform: 'translateZ(-1px) scale(2)',
						zIndex: 4,
					}}
				>
					<div style={{ ...pivotsStyle, backgroundColor: accent }}>
						{/* <Pivot
							selectedKey={selectedPivotTitle}
							onLinkClick={setPivot}
							styles={pivotStyles}
						>
							{pivotsItems.map((pivotProps) => (
								<PivotItem {...pivotProps} />
							))}
						</Pivot> */}
					</div>
				</div>
				<div
					style={{
						...parallaxGroupStyle,
						display: 'inline-block',
						zIndex: 3,
						marginBottom: '100vh',
						marginTop: '4px',
					}}
				>
					<div style={{ ...contentFrameStyle, borderColor: primary }}>
						<div style={{ display: 'inline-block', backgroundColor: primary }}>
							<div style={contentTextStyle}>{Content}</div>
						</div>
					</div>
				</div>
				<div style={{ ...artistAttributionStyle, backgroundColor: accent, zIndex: 6 }}>
					{`Art by `}
					<a href={background.artistLink} target="_blank">
						{background.artistName}
					</a>
				</div>
			</div>
		</div>
	)
}
