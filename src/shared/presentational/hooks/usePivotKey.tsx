import { IPivotProps, PivotItem } from 'office-ui-fabric-react/lib'
import { useState } from 'react'

export interface IUsePivotKeyReturns<TPivotKeys> {
	pivotKey: TPivotKeys
	setPivot: IPivotProps['onLinkClick']
}

export const usePivotKey = <TPivotKeys extends string>(
	defaultPivotKey: TPivotKeys
): IUsePivotKeyReturns<TPivotKeys> => {
	const [pivotKey, setPivotKey] = useState<TPivotKeys>(defaultPivotKey)

	// (TODO) memoize to avoid re-constructing function
	const setPivot = (item?: PivotItem): void => {
		const newKey =
			(item && (item.props.itemKey as TPivotKeys)) || defaultPivotKey
		setPivotKey(newKey)
	}

	return { pivotKey, setPivot }
}
