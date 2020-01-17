import backgroundTextureImg from 'Assets/images/background_texture.png'
import { classicColors } from './classicConstants'

export const commonTitleStyle: React.CSSProperties = {
	fontWeight: 600,
	fontFamily: 'Montserrat',
	color: classicColors.primary,
}

export const backgroundStyle: React.CSSProperties = {
	backgroundImage: `url(${backgroundTextureImg})`,
	backgroundRepeat: 'repeat',
	backgroundPosition: 'right center',
}

export const pivotItemStyle: React.CSSProperties = {
	width: '108px',
	height: '64px',
	margin: '0 4%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	whiteSpace: 'nowrap',
}

const navBarStyle = {
	backgroundColor: classicColors.secondary,
	width: '100%',
	height: '64px',
	display: 'flex',
	top: 0,
	zIndex: 2,
}

export const navBarStyleMobile: React.CSSProperties = {
	...navBarStyle,
	position: 'fixed',
}

export const navBarStyleBigScreen: React.CSSProperties = {
	...navBarStyle,
	position: 'sticky',
	marginTop: '-1px',
}

export const contentWrapperStyle: React.CSSProperties = {
	margin: 'auto',
	padding: '0 5% 5% 5%',
	textAlign: 'left',
	display: 'flex',
	justifyContent: 'center',
}

export const fixedBlackBarStyle: React.CSSProperties = {
	backgroundColor: classicColors.secondary,
	width: '100%',
	height: '256px',
	position: 'fixed',
	zIndex: -10,
}
