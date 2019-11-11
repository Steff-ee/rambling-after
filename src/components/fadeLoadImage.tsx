import React, { useState } from 'react'
// (TODO) Add fade
// import { animated, useSpring, useTransition } from 'react-spring'

export interface IFadeLoadImageProps {
	src: string
	style?: React.CSSProperties
}

export const FadeLoadImage: React.FunctionComponent<IFadeLoadImageProps> = (
	props: IFadeLoadImageProps
): JSX.Element => {
	const { src, style } = props
	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	return (
		<img
			src={src}
			style={{ ...style, opacity: isLoaded ? 1 : 0 }}
			onLoad={(): void => setIsLoaded(true)}
		/>
	)
}
