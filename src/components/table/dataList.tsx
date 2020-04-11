import React from 'react'
import { Datum, ITableProps } from './table.types'

const EmphasisStyle: React.CSSProperties = {
	fontWeight: 600,
}

/**
 * This is a table, but condensed for mobile screens:
 * Instead of a list of rows of cells, it is a list of cells that contain a row's worth of information.
 * Hence, DataList.
 */
export function DataList(props: ITableProps): JSX.Element {
	const { data, headers } = props

	return (
		<>
			{headers && <DataListCell datum={headers} isHeader={true} />}
			{data.map((datum, index) => (
				<DataListCell datum={datum} index={index} />
			))}
		</>
	)
}

export function DataListCell(props: {
	datum: ITableProps['data'][0]
	index?: number
	isHeader?: boolean
}): JSX.Element {
	const { datum, index, isHeader } = props

	let propList: Datum[]
	if (Array.isArray(datum)) {
		propList = datum
	} else {
		propList = Object.keys(datum).map((key) => datum[key])
	}

	return (
		<div key={`dataListCell-${index}`}>
			{propList.map((prop, propIndex) => {
				let style: React.CSSProperties = {}
				if (isHeader || propIndex === 0) {
					style = EmphasisStyle
				}

				return (
					<div key={`cellProperty-${index}-${prop}`} style={style}>
						{prop}
					</div>
				)
			})}
		</div>
	)
}
