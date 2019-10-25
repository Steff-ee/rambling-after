import React, { useContext } from 'react'
import { Colors } from '../shared/helpers/constants'
import { defaultTextStyle, entirePageStyle } from '../shared/helpers/styles'
import { CircadianMood, getCircadianMood } from '../shared/helpers/time'
import { Fireflies } from '../shared/presentational/components/fireflies'
// (TODO) fade-in is not hiding the loading bars
// import { Img } from 'react-progressive-loader'
import { NavBar } from '../shared/presentational/components/navBar'
import { BackgroundsContext } from '../shared/presentational/hooks/useBackgrounds'
import { ColorsContext } from '../shared/presentational/hooks/useColors'

export interface IPageProps {
	titleText: string
	Pivots: JSX.Element
	Content: JSX.Element
}

const transparentColor = 'rgba(10, 10, 10, 0.5)'

const parallaxRootStyle: React.CSSProperties = {
	...entirePageStyle,
	overflowX: 'hidden',
	overflowY: 'scroll',
	perspective: '1px',
	perspectiveOrigin: '0 0',
	position: 'fixed',
}

const parallaxGroupStyle: React.CSSProperties = {
	position: 'relative',
	transformStyle: 'preserve-3d',
}

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
	const { titleText, Pivots, Content } = props
	const { primary, secondary, accent } = useContext(ColorsContext)
	const { backgrounds, selectedIndex } = useContext(BackgroundsContext)
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

	return (
		<div
			style={{
				...parallaxRootStyle,
				...defaultTextStyle,
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
					<NavBar rootStyle={{ backgroundColor: accent, position: 'absolute' }} />
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
					<div style={{ ...pivotsStyle, backgroundColor: accent }}>{Pivots}</div>
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
