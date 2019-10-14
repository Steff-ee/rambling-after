import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown'
import React, { useContext } from 'react'
import { ColorRatios, ColorsContext } from '../hooks/useColors'

export const ColorPicker: React.FunctionComponent = (): JSX.Element => {
	const { primary, setPrimary, ratio, setRatio } = useContext(ColorsContext)

	// (TODO) add a color wheel
	console.log(primary, setPrimary)

	const options: IDropdownOption[] = [
		{ key: ColorRatios.SplitComplementary, text: 'Split Complementary' },
		{ key: ColorRatios.Triadic, text: 'Triadic' },
	]

	return (
		<Dropdown
			placeHolder={'Select a scheme'}
			options={options}
			selectedKey={ratio}
			onChange={(
				event: React.FormEvent<HTMLDivElement>,
				item: IDropdownOption | undefined
			): void => {
				if (item) {
					setRatio(item.key as ColorRatios)
				}
			}}
		/>
	)
}
