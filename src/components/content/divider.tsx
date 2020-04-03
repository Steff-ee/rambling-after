import React, { useMemo } from 'react'
import { useColors } from '../../shared/presentational/hooks/useColors'

export interface IDividerProps {
	thickness?: number
	rootStyle?: React.CSSProperties
}

export const Divider: React.FunctionComponent<IDividerProps> = (
	props: IDividerProps
): JSX.Element => {
	const { thickness = 1, rootStyle: rootStyleProp } = props
	const { text: textColor } = useColors()

	let rootStyle: React.CSSProperties = { width: '100%', padding: `40px 5% 48px 5%` }
	rootStyle = useMemo(() => {
		if (rootStyleProp) {
			return { ...rootStyle, ...rootStyleProp }
		}

		return rootStyle
	}, [rootStyleProp])

	return (
		<div style={rootStyle}>
			<div
				style={{
					width: '100%',
					borderBottom: `${thickness}px solid ${textColor}`,
				}}
			/>
		</div>
	)
}
