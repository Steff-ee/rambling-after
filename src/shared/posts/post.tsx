import React from 'react'
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
			<div>{title}</div>
			<div>{createdDate.toString()}</div>
			<div>{content}</div>
		</>
	)
}
