export type Datum = string | number | JSX.Element

export interface ITableProps {
	headers?: Datum[]

	/**
	 * Either format is acceptable:
	 *
	 * [[ '50 cal', '10 g' ], ['100 cal', '20 g']]
	 * [{ calories: 50, sugar: 10 }, { calories: 100, sugar: 20 }]
	 */
	data: Array<Datum[] | { [key: string]: Datum }>
}
