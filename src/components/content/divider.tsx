import React from 'react'

export const Divider: React.FunctionComponent = (): JSX.Element => {
	return (
		<div style={{ width: '100%', padding: `40px 5% 48px 5%` }}>
			<div
				style={{
					width: '100%',
					borderBottom: `1px solid rgba(80, 80, 80, 0.8)`,
				}}
			/>
		</div>
	)
}
