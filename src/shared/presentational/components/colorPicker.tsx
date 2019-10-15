import { Slider } from 'office-ui-fabric-react/lib/Slider'
import React, { useContext } from 'react'
import { ColorsContext } from '../hooks/useColors'

export const ColorPicker: React.FunctionComponent = (): JSX.Element => {
	const { primary, setPrimary, hueDistance, setHueDistance } = useContext(ColorsContext)

	// (TODO) add a color wheel
	console.log(primary, setPrimary)

	return (
		<Slider
			label={'Select hue distance'}
			value={hueDistance}
			onChange={setHueDistance}
			max={120}
			step={5}
		/>
	)
}
