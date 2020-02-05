import profileImg from 'Assets/images/me.jpg'
import React, { useContext } from 'react'
import { FadeLoadImage } from '../../components/fadeLoadImage'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { subscriptStyle, titleTextStyle } from '../../shared/helpers/styles'
import { useLightTextStyle } from '../../shared/helpers/useStyles'

const Attributions: React.FunctionComponent = (): JSX.Element => {
	return (
		<div
			style={{
				...subscriptStyle,
				margin: '128px 10% 0px 10%',
				textAlign: 'center',
			}}
		>
			Cartography photo (Home page) by Dariusz Sankowski. Books photo (Stories page) by Drew
			Coffman. Light bulbs photo (Games page) by Kari Shea. Bookshelf photo (Conjecture page)
			by Janko Ferlič. All of these photos courtesy of Unsplash. All icons courtesy of Font
			Awesome.
		</div>
	)
}

const aboutImageStyleMobile: React.CSSProperties = {
	width: '300px',
	height: '400px',
	marginBottom: '32px',
}

const aboutImageStyleBigScreen: React.CSSProperties = {
	width: '375px',
	height: '500px',
	margin: '0px 4% 32px 4%',
}

export const AboutPage: React.FunctionComponent = (): JSX.Element => {
	const mediaSize = useContext(MediaContext)
	const lightTextStyle = useLightTextStyle()

	let aboutImageStyle: React.CSSProperties
	if (mediaSize === MediaSize.Small) {
		aboutImageStyle = aboutImageStyleMobile
	} else {
		aboutImageStyle = aboutImageStyleBigScreen
	}

	return (
		<div style={{ display: 'block', padding: '0px 8px', marginTop: '32px' }}>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					width: '100%',
					justifyContent: 'space-around',
				}}
			>
				<FadeLoadImage src={profileImg} style={aboutImageStyle} />
				<div style={{ maxWidth: '800px', flexGrow: 1 }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
						}}
					>
						<div style={{ ...titleTextStyle, margin: '32px' }}>Hola!</div>
						<div
							style={{
								...lightTextStyle,
								textAlign: 'right',
								marginBottom: '32px',
								lineHeight: '24px',
								flexGrow: 1,
							}}
						>
							<div>Daniel Steffee</div>
							<div>dsteffee@alumni.stanford.edu</div>
							<div>Full Stack Software Developer</div>
							<div>At Microsoft in Bellevue, Washington</div>
							<a href={'https://www.linkedin.com/in/daniel-steffee-aba414159/'}>
								LinkedIn
							</a>
						</div>
					</div>
					<p>When not writing code, writing stories.</p>
					<p>
						Always curious, always learning, and not always <i>not</i> making mistakes
						(así será).
					</p>
					<p>
						Wrote this blog using React 16.12. Check out the code{' '}
						<a href="https://github.com/Steff-ee/Steff-ee.github.io" target="_blank">
							here
						</a>
						!
					</p>
					<div style={lightTextStyle}>
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
