import React from 'react'
import { PageRoutes } from '../helpers/routes'
import { capitalize } from '../helpers/strings'
import { titleTextStyle } from '../helpers/styles'
import { dateTimeFormatOptions } from '../helpers/time'
import { IPost } from './post.types'

export interface IPostProps {
	post: IPost
}

export const Post: React.FunctionComponent<IPostProps> = (props: IPostProps): JSX.Element => {
	const { post } = props
	const { title, content, createdTime, route } = post
	const createdDate = new Date(createdTime)
	const dateStr = createdDate.toLocaleDateString('en-US', dateTimeFormatOptions)
	const label = route === PageRoutes.Home ? dateStr : `${dateStr} / ${capitalize(route)}`

	return (
		<div style={{ maxWidth: '972px' }}>
			<div style={titleTextStyle}>{title}</div>
			<div
				style={{
					fontFamily: 'Source Code Pro',
					fontSize: '17px',
					padding: '0px 0px 32px 44px',
					marginTop: '-12px',
				}}
			>
				{label}
			</div>
			<div>{content}</div>
		</div>
	)
}
