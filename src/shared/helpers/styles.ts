export const defaultTextStyle: React.CSSProperties = {
	fontFamily: 'Muli, Lato, sans-serif',
	fontSize: '21px',
	lineHeight: '34px',
	textAlign: 'center',
}

export const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '19px',
	lineHeight: '29px',
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
