// import React from 'react'
// import { Table, TableProps } from 'semantic-ui-react'
// import { bottomContentMargin } from '../../shared/helpers/styles'
// import { useLightTextStyle } from '../../shared/helpers/useStyles'

// export type IStyledTableProps = React.PropsWithChildren<Partial<TableProps>>

// export const StyledTable: React.FunctionComponent<IStyledTableProps> = (
// 	props: IStyledTableProps
// ): JSX.Element => {
// 	const { children, ...tableProps } = props
// 	const lightTextStyle = useLightTextStyle()

// 	return (
// 		<div
// 			style={{
// 				...lightTextStyle,
// 				display: 'flex',
// 				justifyContent: 'center',
// 				marginBottom: bottomContentMargin,
// 			}}
// 		>
// 			<Table
// 				collapsing={true}
// 				celled={true}
// 				inverted={true}
// 				textAlign={'center'}
// 				{...tableProps}
// 			>
// 				{children}
// 			</Table>
// 		</div>
// 	)
// }
