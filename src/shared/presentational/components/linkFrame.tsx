import React, { useState } from 'react'
import { useLightTextStyle } from '../../helpers/useStyles'

export interface ILinkFrameProps {
	title: JSX.Element | string
	description: JSX.Element | string
	link: string
	// put the shadow on bottom and right, instead of the default bottom and left
	rightShadow?: boolean
}

// (TODO) Styling
export const LinkFrame: React.FunctionComponent<ILinkFrameProps> = (
	props: ILinkFrameProps
): JSX.Element => {
	const { title, description, link, rightShadow } = props
	const [isHovering, setIsHovering] = useState<boolean>(false)
	const lightTextStyle = useLightTextStyle()

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
			className={isHovering ? 'linkHover' : ''}
			style={{
				padding: '24px 24px 24px 36px',
				marginBottom: '40px',
				boxShadow,
				cursor: isHovering ? 'pointer' : 'none',
			}}
			onMouseEnter={(): void => {
				setIsHovering(true)
			}}
			onMouseLeave={(): void => {
				setIsHovering(false)
			}}
			onClick={(): void => {
				window.open(link, '_blank')
			}}
		>
			<a href={link} target="_blank" style={{ fontSize: '24px' }}>
				{title}
			</a>
			<div style={{ ...lightTextStyle, padding: '6px 0px 0px 6px' }}>{description}</div>
		</div>
	)
}
