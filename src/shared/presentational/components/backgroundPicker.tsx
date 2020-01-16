import React, { useContext } from 'react'
import { BackgroundsContext } from '../hooks/useBackgrounds'

export const BackgroundPicker: React.FunctionComponent = (): JSX.Element => {
	const { backgrounds, selectedIndex, setSelectedIndex } = useContext(BackgroundsContext)

	const minLength = 1

	if (backgrounds.length <= minLength) {
		return <></>
	}

	return <></>

	// return (
	// 	<Slider
	// 		label={'Select background'}
	// 		value={selectedIndex + 1}
	// 		onChange={(index: number): void => setSelectedIndex(index - 1)}
	// 		min={minLength}
	// 		max={backgrounds.length}
	// 	/>
	// )
}
