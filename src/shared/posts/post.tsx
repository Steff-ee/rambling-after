import React from 'react'
import { Colors } from '../helpers/constants'
import { PageRoutes } from '../helpers/routes'
import { capitalize } from '../helpers/strings'
import { dateTimeFormatOptions } from '../helpers/time'
import { useSubtitleTextStyle, useTitleTextStyle } from '../helpers/useStyles'
import { IPost } from './post.types'

export interface IPostProps {
	post: IPost
}

export const Post: React.FunctionComponent<IPostProps> = (props: IPostProps): JSX.Element => {
	const { post } = props
	const { title, subtitle, content, createdTime, route } = post
	const titleTextStyle = useTitleTextStyle()
	const subtitleTextStyle = useSubtitleTextStyle()
	const createdDate = new Date(createdTime)
	const dateStr = createdDate.toLocaleDateString('en-US', dateTimeFormatOptions)
	const label = route === PageRoutes.Home ? dateStr : `${dateStr} / ${capitalize(route)}`

	return (
		<div style={{ maxWidth: '736px' }}>
			<div style={titleTextStyle}>{title}</div>
			{subtitle && (
				<div
					style={{
						...subtitleTextStyle,
						margin: '10px 0px',
						color: Colors.FadedBlack,
					}}
				>
					{subtitle}
				</div>
			)}
			<div
				style={{
					fontFamily: 'Source Code Pro',
					fontSize: '16px',
					lineHeight: '22px',
					color: Colors.FadedBlack,
				}}
			>
				{label}
			</div>
			<div style={{ marginTop: '48px' }}>{content}</div>
		</div>
	)
}
