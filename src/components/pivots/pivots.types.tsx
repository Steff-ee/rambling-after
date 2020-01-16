export interface IPivotItemProps {
	text: string
	isActive: boolean
	style?: React.CSSProperties
	isActiveStyle?: React.CSSProperties
	onClick?: () => void
	onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	onMouseLeave?: () => void
}

export type IPivotItem = Pick<
	IPivotItemProps,
	'text' | 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'style' | 'isActiveStyle'
> & {
	key: string
}

export interface IPivotsProps {
	pivotItems: IPivotItem[]
	activeItemKey: string | undefined
	onClick?: (item: IPivotItem) => void
	/* styling */
	rootStyle?: React.CSSProperties
	commonItemStyle?: React.CSSProperties
	commonIsActiveStyle?: React.CSSProperties
}
