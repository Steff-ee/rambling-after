import React from 'react'
import { Table } from 'semantic-ui-react'
import { bottomContentMargin, lightTextStyle } from '../../shared/helpers/styles'

export const StyledTable: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
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
