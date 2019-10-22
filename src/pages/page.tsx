import React, { useContext } from 'react'
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

const parallaxRootStyle: React.CSSProperties = {
	overflowX: 'hidden',
	overflowY: 'scroll',
	perspective: '1px',
	perspectiveOrigin: '0 0',
	width: '100vw',
	height: '100vh',
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
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

const backgroundStyle: React.CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	marginBottom: '120vh',
}

const pivotsStyle: React.CSSProperties = {
	margin: '30px auto',
	width: '500px',
}

const contentStyle: React.CSSProperties = {
	margin: '0 auto',
	maxWidth: '800px',
	padding: '40px',
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { titleText, Pivots, Content } = props
	const { primary, secondary, accent } = useContext(ColorsContext)
	const { backgrounds, selectedIndex } = useContext(BackgroundsContext)
	const background = backgrounds[selectedIndex]

	return (
		<div
			style={{
				...parallaxRootStyle,
				fontFamily: 'Lucida Grande, Lucida Sans Unicode, Lucida Sans',
				textAlign: 'center',
			}}
		>
			<div style={{ position: 'absolute', width: '100%', height: '100%' }}>
				<Fireflies style={{ position: 'relative', zIndex: 1 }} />
			</div>
			<div
				style={{
					...parallaxGroupStyle,
					...backgroundStyle,
					transformOrigin: '0 0',
					transform: 'translateZ(-7px) scale(8)',
					zIndex: -3,
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
						zIndex: 2,
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
					}}
				>
					<div style={{ ...pivotsStyle, backgroundColor: accent, zIndex: 4 }}>
						{Pivots}
					</div>
				</div>
				<div style={{ ...parallaxGroupStyle }}>
					<div style={{ ...contentStyle, backgroundColor: primary, zIndex: 3 }}>
						{Content}
					</div>
				</div>
			</div>
		</div>
	)
}
