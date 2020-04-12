import React from 'react'
import { useColors } from '../../shared/presentational/hooks/useColors'

export const DisplayTableDivider = (): JSX.Element => {
	const { border: borderColor } = useColors()

	return (
		<div
			style={{
				width: '100%',
				borderBottom: `1px solid ${borderColor}`,
			}}
		/>
	)
}
