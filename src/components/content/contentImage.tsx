import React from 'react'
import { FadeLoadImage } from '../fadeLoadImage'

export interface IContentLoadImageProps {
	src: string
	maxHeight?: string
	caption?: string | JSX.Element
	style?: React.CSSProperties
}

export const ContentImage: React.FunctionComponent<IContentLoadImageProps> = (props) => {
	const { src, style, caption, maxHeight = '80vh' } = props

	return (
		<div
			style={{
				fontStyle: 'italic',
				fontSize: '16px',
				textAlign: 'center',
				padding: '16px 0px 20px 0px',
			}}
		>
			<FadeLoadImage src={src} style={{ maxWidth: '100%', maxHeight, ...style }} />
			<div>{caption}</div>
		</div>
	)
}
