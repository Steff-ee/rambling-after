import React from 'react'
import { bottomContentMargin, transparentBackground } from '../../shared/helpers/styles'
import { useLightTextStyle } from '../../shared/helpers/useStyles'

export interface IDialogueLine {
	by?: string | JSX.Element
	says: string | JSX.Element
}

export interface IDialogueProps {
	lines: IDialogueLine[]
}

export const Dialogue: React.FunctionComponent<IDialogueProps> = (props) => {
	const { lines } = props
	const lightTextStyle = useLightTextStyle()

	return (
		<div
			style={{
				...lightTextStyle,
				textAlign: 'center',
				backgroundColor: transparentBackground,
				marginBottom: bottomContentMargin,
			}}
		>
			{lines.map(
				(line: IDialogueLine, index: number): JSX.Element => {
					return (
						<div key={`line-${index}`} style={{ padding: '13px' }}>
							{line.by && <div style={{ fontFamily: 'Montserrat' }}>{line.by}</div>}
							<div>{line.says}</div>
						</div>
					)
				}
			)}
		</div>
	)
}
