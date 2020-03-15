import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { PageRoutes } from '../helpers/routes'
import { capitalize } from '../helpers/strings'
import { titleTextStyle, titleTextStyleSlim } from '../helpers/styles'
import { dateTimeFormatOptions } from '../helpers/time'
import { IPost } from './post.types'

export interface IPostProps {
	post: IPost
}

export const Post: React.FunctionComponent<IPostProps> = (props: IPostProps): JSX.Element => {
	const { post } = props
	const { title, content, createdTime, route } = post
	const mediaSize = useContext(MediaContext)
	const createdDate = new Date(createdTime)
	const dateStr = createdDate.toLocaleDateString('en-US', dateTimeFormatOptions)
	const label = route === PageRoutes.Home ? dateStr : `${dateStr} / ${capitalize(route)}`

	return (
		<div style={{ maxWidth: '736px' }}>
			<div style={mediaSize === MediaSize.Small ? titleTextStyleSlim : titleTextStyle}>
				{title}
			</div>
			<div
				style={{
					fontFamily: 'Source Code Pro',
					fontSize: '17px',
					lineHeight: '22px',
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
