import React from 'react'
import { Table } from 'semantic-ui-react'
import { bottomContentMargin } from '../../shared/helpers/styles'
import { useLightTextStyle } from '../../shared/helpers/useStyles'

export const StyledTable: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	const lightTextStyle = useLightTextStyle()

	return (
		<div
			style={{
				...lightTextStyle,
				display: 'flex',
				justifyContent: 'center',
				marginBottom: bottomContentMargin,
			}}
		>
			<Table collapsing={true} celled={true} inverted={true} textAlign={'center'}>
				{props.children}
			</Table>
		</div>
	)
}
