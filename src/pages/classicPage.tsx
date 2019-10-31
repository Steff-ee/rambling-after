import backgroundTextureImg from 'Assets/images/background_texture.png'
import React from 'react'
import Media from 'react-media'
import { Colors, websiteTitle } from '../shared/helpers/constants'
import { defaultTextStyle, parallaxGroupStyle, parallaxRootStyle } from '../shared/helpers/styles'
import { NavBar } from '../shared/presentational/components/navBar'

export interface IPageProps {
	headerBackgroundImage: string
	subtitleText: string
	Pivots: JSX.Element
	Content: JSX.Element
}

export const ClassicPage: React.FunctionComponent<IPageProps> = (
	props: IPageProps
): JSX.Element => {
	const { subtitleText, Pivots, Content, headerBackgroundImage } = props

	const subtitleFontSize = subtitleText.length > 12 ? 18 : 24

	const topBarHeight = 44
	const bannerHeight = 480

	return (
		<Media
			queries={{
				small: '(max-width: 699px)',
				large: '(min-width: 700px)',
			}}
		>
			{(matches): JSX.Element => {
				let titleFontSize = '96px'
				let titleLetterSpacing = '18px'
				let titleLineHeight = '144px'
				if (matches.small) {
					titleFontSize = '64px'
					titleLetterSpacing = '12px'
					titleLineHeight = '96px'
				}

				return (
					<div
						style={{ ...defaultTextStyle, ...parallaxRootStyle, position: 'absolute' }}
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
									backgroundColor: Colors.OffBlack,
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
							}}
						>
							<div
								style={{
									backgroundImage: `url(${headerBackgroundImage})`,
									backgroundSize: 'cover',
									height: `${bannerHeight}px`,
									width: '100vw',
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
									color: Colors.LightSand,
									// filter: `drop-shadow(-1px 1px 1px ${Colors.MaroonMud})`,
								}}
							>
								{websiteTitle}
							</div>
						</div>
						{/* <div style={{ color: 'lightgrey', fontSize: subtitleFontSize }}>
						{subtitleText}
					</div> */}
						<div>
							<div
								style={{
									backgroundColor: Colors.OffBlack,
									width: '100%',
									height: '64px',
									marginTop: '-1px',
								}}
							/>
							<div
								style={{
									backgroundImage: `url(${backgroundTextureImg})`,
									width: '100%',
									height: '100%',
									position: 'sticky',
								}}
							>
								<NavBar
									rootStyle={{
										backgroundColor: 'lightGrey',
										display: 'inline-block',
									}}
								/>
								{Content}
							</div>
						</div>
					</div>
				)
			}}
		</Media>
	)
}
