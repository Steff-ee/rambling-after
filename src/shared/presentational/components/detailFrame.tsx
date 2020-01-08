import React from 'react'

export interface IDetailFrameProps {
	title: JSX.Element | string
	description: JSX.Element | string
}

// (TODO) Styling
export const DetailFrame: React.FunctionComponent<IDetailFrameProps> = (
	props: IDetailFrameProps
): JSX.Element => {
	const { title, description } = props

	return (
		<div style={{ padding: '16px' }}>
			<div style={{ fontSize: '24px' }}>{title}</div>
			<div>{description}</div>
		</div>
	)
}
