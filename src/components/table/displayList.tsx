import React from 'react'
import { DisplayTableDivider } from './displayTable.helpers'
import {
	DisplayListEmphasizedPropStyle,
	DisplayListLeftPropStyle,
	DisplayListRightPropStyle,
	useDisplayTableStyle,
} from './displayTable.styles'
import { Datum, ITableProps } from './displayTable.types'

/**
 * This is like a table, but condensed for mobile screens:
 * Instead of a list of rows of cells, it is a list of cells that contain a row's worth of information.
 */
export function DisplayList(props: ITableProps): JSX.Element {
	const { data, headers } = props
	const displayTableStyle = useDisplayTableStyle()

	return (
		<div style={displayTableStyle}>
			{headers && <DisplayListCell datum={headers} isHeader={true} />}
			{data.map((datum, index) => {
				let divider: JSX.Element = <></>
				if (!!headers || index > 0) {
					divider = <DisplayTableDivider />
				}

				return (
					<>
						{divider}
						<DisplayListCell datum={datum} index={index} />
					</>
				)
			})}
		</div>
	)
}

export function DisplayListCell(props: {
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
		<div key={`dataListCell-${index}`} style={{ padding: '15px' }}>
			{propList.map((prop, propIndex) => {
				let style: React.CSSProperties = {}
				if (propIndex === 0) {
					style = DisplayListLeftPropStyle
				} else {
					style = DisplayListRightPropStyle
				}

				if (isHeader) {
					style = { ...style, ...DisplayListEmphasizedPropStyle }
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
