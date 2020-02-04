export const defaultTextStyle: React.CSSProperties = {
	fontFamily: 'Muli, Lato, sans-serif',
	fontSize: '19px',
	lineHeight: '32px',
	textAlign: 'center',
}

export const defaultTextStyleSlim: React.CSSProperties = {
	fontFamily: 'Muli, Lato, sans-serif',
	fontSize: '17px',
	lineHeight: '24px',
	textAlign: 'center',
}

export const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '36px',
	lineHeight: '44px',
	paddingBottom: '32px',
}

export const titleTextStyleSlim: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '31px',
	lineHeight: '36px',
	paddingBottom: '32px',
}

export const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '18px',
	lineHeight: '28px',
}

export const subscriptStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '14px',
	lineHeight: '18px',
}

export const entirePageStyle: React.CSSProperties = {
	top: 0,
	left: 0,
	right: 0,
	width: '100vw',
	height: '100vh',
}

export const flexCenterStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}

export const parallaxRootStyle: React.CSSProperties = {
	...entirePageStyle,
	overflowX: 'hidden',
	overflowY: 'scroll',
	perspective: '1px',
	perspectiveOrigin: '0 0',
	position: 'fixed',
}

export const parallaxGroupStyle: React.CSSProperties = {
	position: 'relative',
	transformStyle: 'preserve-3d',
}

export const listStyle: React.CSSProperties = {
	...lightTextStyle,
	margin: '16px 5% 32px 5%',
}

export const smallestDeviceWidth = '320px'

export const bottomContentMargin = '34px'
