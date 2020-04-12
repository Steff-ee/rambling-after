import React, { useContext } from 'react'
import { MediaContext, MediaSize } from '../mediaProvider'
import { DisplayList } from './displayList'
import { DisplayTableDivider } from './displayTable.helpers'
import { useDisplayTableStyle } from './displayTable.styles'
import { Datum, ITableProps } from './displayTable.types'

/**
 * This is a "Display" Table because it is only meant for display, not for user interactions.
 * No selections; no paging.
 *
 * Its primary advantage is responsiveness, collapsing rows into smaller cells for mobile screens.
 */
export function DisplayTable(props: ITableProps): JSX.Element {
	const { headers, data, disableListMode } = props
	const mediaSize = useContext(MediaContext)
	const displayTableStyle = useDisplayTableStyle()

	if (data.length === 0) {
		return <></>
	}

	let Table: JSX.Element

	if (!disableListMode && mediaSize === MediaSize.Small) {
		Table = <DisplayList {...props} />
	} else {
		Table = (
			<table style={displayTableStyle}>
				{headers && <DisplayTableRow data={headers} isHeader={true} />}
				{data.map((datum, rowIndex) => {
					let propList: Datum[]
					if (Array.isArray(datum)) {
						propList = datum
					} else {
						propList = Object.keys(datum).map((key) => datum[key])
					}

					let divider: JSX.Element = <></>
					if (!!headers || rowIndex > 0) {
						divider = <DisplayTableDivider />
					}

					return <DisplayTableRow key={`tableRow-${rowIndex}`} data={propList} />
				})}
			</table>
		)
	}

	return <div style={{ display: 'flex', justifyContent: 'center' }}>{Table}</div>
}

export function DisplayTableRow(props: { data: Datum[]; isHeader?: boolean }): JSX.Element {
	const { data, isHeader } = props
	const Tdiv = isHeader ? 'th' : 'td'

	return (
		<tr
			style={{
				textAlign: 'center',
				fontWeight: isHeader ? 600 : 400,
			}}
		>
			{data.map((datum, columnIndex) => (
				<Tdiv key={`cell-${columnIndex}`} style={{ padding: '8px' }}>
					{datum}
				</Tdiv>
			))}
		</tr>
	)
}
