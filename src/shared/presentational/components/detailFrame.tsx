import React, { useState } from 'react'
import { lightTextStyle } from '../../helpers/styles'

export interface IDetailFrameProps {
	title: JSX.Element | string
	description: JSX.Element | string
	// put the shadow on bottom and right, instead of the default bottom and left
	rightShadow?: boolean
}

// (TODO) Styling
export const DetailFrame: React.FunctionComponent<IDetailFrameProps> = (
	props: IDetailFrameProps
): JSX.Element => {
	const { title, description, rightShadow } = props
	const [isHovering, setIsHovering] = useState<boolean>(false)

	let horizontalShadow = '24px'
	if (rightShadow) {
		horizontalShadow = '-24px'
	}

	let boxShadow = `inset ${horizontalShadow} -24px 100px -100px rgb(0, 0, 0, 1)`
	if (isHovering) {
		boxShadow = `inset ${horizontalShadow} -24px 70px -70px rgb(0, 0, 0, 1)`
	}

	return (
		<div
			style={{
				padding: '24px 0px 24px 36px',
				marginBottom: '40px',
				boxShadow,
			}}
			onMouseEnter={(): void => {
				setIsHovering(true)
			}}
			onMouseLeave={(): void => {
				setIsHovering(false)
			}}
		>
			<div style={{ fontSize: '24px' }}>{title}</div>
			<div style={{ ...lightTextStyle, padding: '6px 0px 0px 6px' }}>{description}</div>
		</div>
	)
}
