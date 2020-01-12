import React from 'react'
import { titleTextStyle } from '../helpers/styles'
import { dateTimeFormatOptions } from '../helpers/time'
import { IPost } from './post.types'

export interface IPostProps {
	post: IPost
}

export const Post: React.FunctionComponent<IPostProps> = (props: IPostProps): JSX.Element => {
	const { post } = props
	const { title, content, createdTime } = post
	const createdDate = new Date(createdTime)

	return (
		<>
			<div style={titleTextStyle}>{title}</div>
			<div style={{ fontSize: '18px', padding: '8px 0px 16px 44px' }}>
				{createdDate.toLocaleDateString('en-US', dateTimeFormatOptions).toUpperCase()}
			</div>
			<div style={{ padding: '16px 0' }}>{content}</div>
		</>
	)
}
