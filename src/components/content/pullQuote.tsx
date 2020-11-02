import React, { useContext } from 'react'
import { bottomContentMargin, transparentBackground } from '../../shared/helpers/styles'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { MediaContext, MediaSize } from '../mediaProvider'

export interface IPullQuoteProps {
	lines: Array<string | JSX.Element>
	by?: string | JSX.Element
}

const pullQuoteTextStyleLarge: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontStyle: 'italic',
	fontSize: '27px',
	lineHeight: '40px',
}

const pullQuoteTextStyleSmall: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontStyle: 'italic',
	fontSize: '20px',
	lineHeight: '30px',
}

export const PullQuote: React.FunctionComponent<IPullQuoteProps> = (
	props: IPullQuoteProps
): JSX.Element => {
	const { lines, by } = props
	const mediaSize = useContext(MediaContext)
	const { subtitle: subtitleColor } = useColors()
	let textStyle =
		mediaSize === MediaSize.Small ? pullQuoteTextStyleSmall : pullQuoteTextStyleLarge
	const attributionFontSize = mediaSize === MediaSize.Small ? '17px' : '20px'
	const border = `2px solid ${subtitleColor}`

	// decrease font size when there are many lines
	if (lines.length > 3) {
		const { fontSize, lineHeight, ...remainingStyle } = textStyle
		textStyle = remainingStyle
	}

	return (
		<div
			style={{
				backgroundColor: transparentBackground,
				marginBottom: bottomContentMargin,
				padding: '10px 20px 10px 10px',
			}}
		>
			<div
				style={{
					...textStyle,
					padding: '20px 30px',
					borderLeft: border,
					borderBottom: border,
				}}
			>
				{lines.map(
					(line, index: number): JSX.Element => {
						return <div key={`line-${index}`}>{line}</div>
					}
				)}
				{by && (
					<div style={{ paddingTop: '12px', fontSize: attributionFontSize }}>—{by}</div>
				)}
			</div>
		</div>
	)
}
