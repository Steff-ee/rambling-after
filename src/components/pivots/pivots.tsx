import React from 'react'
import { PivotItem } from './pivotItem'
import { IPivotsProps } from './pivots.types'

const rootStyle: React.CSSProperties = {
	display: 'flex',
	width: '100%',
	justifyContent: 'space-around',
}

export const Pivots: React.FunctionComponent<IPivotsProps> = (props: IPivotsProps): JSX.Element => {
	const {
		pivotItems,
		activeItemKey,
		rootStyle: inputRootStyle,
		commonItemStyle,
		commonIsActiveStyle,
		onClick: onGenericClick,
	} = props

	return (
		<div style={{ ...rootStyle, ...inputRootStyle }}>
			{pivotItems.map((pivotItem) => {
				let {
					key,
					onClick: onItemClick,
					style: itemStyle,
					isActiveStyle: itemIsActiveStyle,
					...restPivotItemProps
				} = pivotItem

				if (!onItemClick && onGenericClick) {
					onItemClick = (): void => onGenericClick(pivotItem)
				}

				return (
					<PivotItem
						{...restPivotItemProps}
						onClick={onItemClick}
						style={itemStyle || commonItemStyle}
						isActiveStyle={itemIsActiveStyle || commonIsActiveStyle}
						key={key}
						isActive={key === activeItemKey}
					/>
				)
			})}
		</div>
	)
}
