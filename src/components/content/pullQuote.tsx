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
	const border = `2px solid ${Colors.DarkGray}`

	return (
		<div
			style={{
				backgroundColor: transparentBackground,
				marginBottom: bottomContentMargin,
				padding: '6px 12px 6px 6px',
			}}
		>
			<div
				style={{
					...lightTextStyle,
					fontSize: '27px',
					lineHeight: '40px',
					fontStyle: 'italic',
					padding: '4px 28px 4px 14px',
					borderLeft: border,
					borderBottom: border,
				}}
			>
				{lines.map(
					(line, index: number): JSX.Element => {
						return <div key={`line-${index}`}>{line}</div>
					}
				)}
				<div style={{ textAlign: 'right', fontSize: '20px' }}>—{by}</div>
			</div>
		</div>
	)
}
