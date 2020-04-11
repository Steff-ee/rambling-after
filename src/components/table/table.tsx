import _Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../mediaProvider'
import { DataList } from './dataList'
import { Datum, ITableProps } from './table.types'

/**
 * Advantage of this over Material UI's table is that this is responsive
 */
export function Table(props: ITableProps): JSX.Element {
	const { headers, data } = props
	const mediaSize = useContext(MediaContext)

	if (data.length === 0) {
		return <></>
	}

	if (mediaSize === MediaSize.Small) {
		return <DataList {...props} />
	}

	return (
		<_Table>
			{headers && (
				<TableHead>
					<TableRow>
						{headers.map((header, index) => (
							<TableCell key={`header-${index}`}>{header}</TableCell>
						))}
					</TableRow>
				</TableHead>
			)}
			<TableBody>
				{data.map((datum, rowIndex) => {
					let propList: Datum[]
					if (Array.isArray(datum)) {
						propList = datum
					} else {
						propList = Object.keys(datum).map((key) => datum[key])
					}

					return (
						<TableRow key={`row-${rowIndex}`}>
							{propList.map((prop, columnIndex) => (
								<TableCell key={`data-${rowIndex}-${columnIndex}`}>
									{prop}
								</TableCell>
							))}
						</TableRow>
					)
				})}
			</TableBody>
		</_Table>
	)
}
