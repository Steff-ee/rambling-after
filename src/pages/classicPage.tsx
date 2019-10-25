import React from 'react'
import { Colors, websiteTitle } from '../shared/helpers/constants'
import { defaultTextStyle, entirePageStyle, flexCenterStyle } from '../shared/helpers/styles'
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

	return (
		<div style={{ ...defaultTextStyle, ...entirePageStyle, position: 'absolute' }}>
			<div
				style={{
					...flexCenterStyle,
					backgroundImage: `url(${headerBackgroundImage})`,
					height: '400px',
					width: '100vw',
				}}
			>
				<div
					style={{
						...flexCenterStyle,
						flexDirection: 'column',
						backgroundColor: Colors.OffBlack,
						width: '600px',
						height: '180px',
					}}
				>
					<div
						style={{
							fontSize: '32px',
							fontFamily: 'Montserrat',
							letterSpacing: '5px',
							color: 'white',
						}}
					>
						{websiteTitle}
					</div>
					<div style={{ color: 'lightgrey', fontSize: subtitleFontSize }}>
						{subtitleText}
					</div>
				</div>
			</div>
			<NavBar rootStyle={{ backgroundColor: 'lightGrey', display: 'inline-block' }} />
		</div>
	)
}
