import React from 'react'
import { Colors } from '../../shared/helpers/constants'
import { bottomContentMargin, transparentBackground } from '../../shared/helpers/styles'
import { useLightTextStyle } from '../../shared/helpers/useStyles'

export interface IPullQuoteProps {
	by: string | JSX.Element
	lines: Array<string | JSX.Element>
}

export const PullQuote: React.FunctionComponent<IPullQuoteProps> = (
	props: IPullQuoteProps
): JSX.Element => {
	const { lines, by } = props
	const lightTextStyle = useLightTextStyle()

	return (
		<div
			style={{
				backgroundColor: transparentBackground,
				marginBottom: bottomContentMargin,
				padding: '6px 0px',
			}}
		>
			<div
				style={{
					...lightTextStyle,
					fontStyle: 'italic',
					padding: '4px 28px 4px 14px',
					borderLeft: `2px solid ${Colors.DarkGray}`,
				}}
			>
				{lines.map(
					(line, index: number): JSX.Element => {
						return (
							<div key={`line-${index}`} style={{}}>
								{line}
							</div>
						)
					}
				)}
				<div style={{ textAlign: 'right' }}>—{by}</div>
			</div>
		</div>
	)
}
