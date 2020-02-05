import { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const defaultTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Muli, Lato, sans-serif',
	fontSize: '19px',
	lineHeight: '32px',
	textAlign: 'center',
}

const defaultTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Muli, Lato, sans-serif',
	fontSize: '17px',
	lineHeight: '24px',
	textAlign: 'center',
}

const lightTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '18px',
	lineHeight: '28px',
}

const lightTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '16px',
	lineHeight: '22px',
}

export const useDefaultTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return defaultTextStyleSmall
	}

	return defaultTextStyleLarge
}

export const useLightTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return lightTextStyleSmall
	}

	return lightTextStyleLarge
}

export const useListStyle = (): React.CSSProperties => {
	const lightTextStyle = useLightTextStyle()

	return {
		...lightTextStyle,
		margin: '16px 5% 32px 5%',
	}
}
