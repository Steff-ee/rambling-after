import React from 'react'
import { Colors, websiteTitle } from '../shared/helpers/constants'
import { PageRoutes } from '../shared/helpers/routes'
import { defaultTextStyle, entirePageStyle, flexCenterStyle } from '../shared/helpers/styles'
import { NavBar } from '../shared/presentational/components/navBar'

export interface IPageProps {
	pageRoute: PageRoutes
	titleText: string
	Pivots: JSX.Element
	Content: JSX.Element
}

export const ClassicPage: React.FunctionComponent<IPageProps> = (
	props: IPageProps
): JSX.Element => {
	const { titleText, Pivots, Content, pageRoute } = props

	// (TODO) upload these assets
	let headerBackground: string
	switch (pageRoute) {
		case PageRoutes.Home:
			// foggy trees
			headerBackground = 'https://wallpaperaccess.com/full/109538.jpg'
			break
		case PageRoutes.Stories:
			// books
			headerBackground =
				'https://ramblingafter.files.wordpress.com/2017/12/cropped-books-1835753_19201.jpg'
			break
		case PageRoutes.Games:
			// lightbulbs
			headerBackground =
				'https://ramblingafter.files.wordpress.com/2017/12/cropped-photo-1491944799262-a5be522e23002.jpg'
			break
		case PageRoutes.MathScience:
		default:
			// bookshelf with lights
			headerBackground =
				'https://ramblingafter.files.wordpress.com/2017/10/cropped-bookshelf-with-lights.jpeg'
	}

	return (
		<div style={{ ...defaultTextStyle, ...entirePageStyle, position: 'absolute' }}>
			<div
				style={{
					...flexCenterStyle,
					backgroundImage: `url(${headerBackground})`,
					height: '400px',
					width: '100vw',
				}}
			>
				<div
					style={{
						...flexCenterStyle,
						backgroundColor: Colors.OffBlack,
						width: '600px',
						height: '180px',
					}}
				>
					<div
						style={{
							fontSize: '32px',
							fontFamily: 'Montserrat',
							letterSpacing: '2px',
							color: 'white',
						}}
					>
						{websiteTitle}
					</div>
				</div>
			</div>
			<NavBar rootStyle={{ backgroundColor: 'lightGrey', display: 'inline-block' }} />
		</div>
	)
}
