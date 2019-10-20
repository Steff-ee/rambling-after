import React, { useContext } from 'react'
// (TODO) fade-in is not hiding the loading bars
import { Img } from 'react-progressive-loader'
import { NavBar } from '../shared/presentational/components/navBar'
import { BackgroundsContext } from '../shared/presentational/hooks/useBackgrounds'
import { ColorsContext } from '../shared/presentational/hooks/useColors'

export interface IHeaderProps {
	titleText: string
}

export const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps): JSX.Element => {
	const { titleText } = props
	const { secondary } = useContext(ColorsContext)

	return (
		<div
			style={{
				backgroundColor: secondary,
				fontFamily: 'Cabin Sketch',
				fontSize: '2.5rem',
				margin: '30px auto',
				padding: '30px',
				width: '200px',
			}}
		>
			{titleText}
		</div>
	)
}

export interface IPageProps extends IHeaderProps {
	Pivots: JSX.Element
	Content: JSX.Element
}

const backgroundImgStyle: React.CSSProperties = {
	display: 'flex',
	flex: '1 0 auto',
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	transformOrigin: '0 0',
	transformStyle: 'preserve-3d',
	transform: 'translateZ(-1px) scale(2)',
	zIndex: -1,
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { titleText, Pivots, Content } = props
	const { primary, accent } = useContext(ColorsContext)
	const { backgrounds, selectedIndex } = useContext(BackgroundsContext)
	const background = backgrounds[selectedIndex]

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				overflowX: 'hidden',
				overflowY: 'scroll',
				perspective: '1px',
				perspectiveOrigin: '0 0',
				transformStyle: 'preserve-3d',
			}}
		>
			<div style={backgroundImgStyle}>
				<Img src={background.src} style={backgroundImgStyle} />
			</div>
			<div
				style={{
					display: 'block',
					position: 'relative',
					zIndex: 1,
					fontFamily: 'Lucida Grande, Lucida Sans Unicode, Lucida Sans',
					marginBottom: '50vh',
					textAlign: 'center',
				}}
			>
				<div
					style={{
						backgroundColor: accent,
						position: 'sticky',
						top: '0px',
						left: '0px',
					}}
				>
					<NavBar rootStyle={{ backgroundColor: accent, position: 'absolute' }} />
				</div>
				<div>
					<Header titleText={titleText} />
					<div
						style={{
							backgroundColor: accent,
							margin: '30px auto',
							width: '500px',
						}}
					>
						{Pivots}
					</div>
					<div
						style={{
							backgroundColor: primary,
							margin: '0 auto',
							maxWidth: '800px',
							padding: '40px',
						}}
					>
						{Content}
					</div>
				</div>
			</div>
		</div>
	)
}
