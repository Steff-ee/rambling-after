import React from 'react'
import { PageRoutes } from '../helpers/routes'
import { capitalize } from '../helpers/strings'
import { dateTimeFormatOptions } from '../helpers/time'
import { useSubtitleTextStyle, useTitleTextStyle } from '../helpers/useStyles'
import { useColors } from '../presentational/hooks/useColors'
import { IPost } from './post.types'

export interface IPostProps {
	post: IPost
}

export const Post: React.FunctionComponent<IPostProps> = (props) => {
	const { post } = props
	const { title, subtitle, content, createdTime, route } = post
	const { subtitle: subtitleColor } = useColors()
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
						color: subtitleColor,
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
					color: subtitleColor,
					fontWeight: 300,
				}}
			>
				{label}
			</div>
			<div style={{ marginTop: '48px' }}>{content}</div>
		</div>
	)
}
