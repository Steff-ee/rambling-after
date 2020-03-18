import { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const defaultTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Open Sans, Lato, sans-serif',
	fontSize: '19px',
	lineHeight: '32px',
	textAlign: 'center',
}

const defaultTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Open Sans, Lato, sans-serif',
	fontSize: '17px',
	lineHeight: '25px',
	textAlign: 'center',
}

const lightTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '18px',
	lineHeight: '27px',
}

const lightTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '16px',
	lineHeight: '22px',
}

const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '54px',
	lineHeight: '76px',
	fontWeight: 600,
}

const titleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '31px',
	lineHeight: '42px',
	fontWeight: 600,
}

const subtitleTextStyle: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '24px',
	lineHeight: '36px',
}

const subtitleTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Raleway',
	fontSize: '20px',
	lineHeight: '30px',
}

export const useTitleTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return titleTextStyleSmall
	}

	return titleTextStyle
}

export const useSubtitleTextStyle = (): React.CSSProperties => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return subtitleTextStyleSmall
	}

	return subtitleTextStyle
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
