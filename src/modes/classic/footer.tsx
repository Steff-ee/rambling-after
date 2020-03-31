import React from 'react'
import { subscriptStyle } from '../../shared/helpers/styles'
import { useColors } from '../../shared/presentational/hooks/useColors'

export interface IFooterProps {
	artistName: string
	artistLink: string
}

export const Footer: React.FunctionComponent<IFooterProps> = (props: IFooterProps): JSX.Element => {
	const { artistName, artistLink } = props
	const { navbarText: navbarTextColor, border: borderColor } = useColors()

	return (
		<div
			style={{
				...subscriptStyle,
				color: navbarTextColor,
				backgroundColor: borderColor,
				width: '100%',
				height: '64px',
				paddingTop: '22px',
			}}
		>
			All icons courtesy of Font Awesome. Background art or photo courtesy of{' '}
			<a style={{ fontWeight: 400 }} href={artistLink} target="_blank">
				{artistName}
			</a>
			.
		</div>
	)
}
