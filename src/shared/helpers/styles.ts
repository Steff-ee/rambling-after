export const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '36px',
	lineHeight: '44px',
	paddingBottom: '32px',
}

export const titleTextStyleSlim: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '31px',
	lineHeight: '36px',
	paddingBottom: '32px',
}

export const subscriptStyle: React.CSSProperties = {
	fontFamily: 'Source Code Pro',
	fontSize: '14px',
	lineHeight: '19px',
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

export const smallestDeviceWidth = '320px'

export const bottomContentMargin = '34px'
