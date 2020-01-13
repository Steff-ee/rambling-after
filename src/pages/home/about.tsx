import profileImg from 'Assets/images/me.jpg'
import React from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import {
	lightTextStyle,
	smallestDeviceWidth,
	subscriptStyle,
	titleTextStyle,
} from '../../shared/helpers/styles'

const Attributions: React.FunctionComponent = (): JSX.Element => {
	return (
		<div
			style={{
				...subscriptStyle,
				margin: '128px 10% 0px 10%',
				textAlign: 'center',
			}}
		>
			Cartography photo on Home page courtesy of Dariusz Sankowski, from Unsplash. Books photo
			on Stories page courtesy of Drew Coffman, from Unsplash. Light bulbs photo on Games page
			courtesy of Kari Shea, from Unsplash. Bookshelf photo on Conjecture page courtesy of
			Janko Ferlič, from Unsplash. All icons courtesy of Font Awesome.
		</div>
	)
}

export const AboutPage: React.FunctionComponent = (): JSX.Element => {
	return (
		<div style={{ display: 'block', marginTop: '32px' }}>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					width: '100%',
					justifyContent: 'space-around',
				}}
			>
				<FadeLoadImage
					src={profileImg}
					style={{ width: '360px', height: '480px', margin: '0px 4% 32px 4%' }}
				/>
				<div style={{ minWidth: smallestDeviceWidth, maxWidth: '800px', flexGrow: 1 }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
						}}
					>
						<div style={titleTextStyle}>Hola!</div>
						<div
							style={{
								...lightTextStyle,
								textAlign: 'right',
								marginBottom: '32px',
								lineHeight: '24px',
								minWidth: '320px',
								flexGrow: 1,
							}}
						>
							<div>Daniel Steffee</div>
							<div>dsteffee@alumni.stanford.edu</div>
							<div>Microsoft Software Developer</div>
							<div>Bellevue, Washington</div>
						</div>
					</div>
					<p>When not writing code, writing stories.</p>
					<p>
						Always curious, always learning, and not always <i>not</i> making mistakes
						(así será).
					</p>
					<p>
						Wrote this blog using React 16.12. Check out the code{' '}
						<a href="https://github.com/Steff-ee/rambling-after/" target="_blank">
							here
						</a>
						!
					</p>
					<div>
						<div>I hope you have enjoyed your stay</div>
						<div>and as well I hope</div>
						<div>wherever you're going, wherefore,</div>
						<div>—or perhaps wherever you're took—</div>
						<div>you're joined by good company, or</div>
						<div>the company of a good book</div>
					</div>
				</div>
			</div>
			<Attributions />
		</div>
	)
}
