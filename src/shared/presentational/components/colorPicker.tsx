import { Slider } from 'office-ui-fabric-react/lib/Slider'
import React, { useContext } from 'react'
import { ColorsContext } from '../hooks/useColors'

export const ColorPicker: React.FunctionComponent = (): JSX.Element => {
	const {
		primary,
		setPrimary,
		secondHueDistance,
		setSecondHueDistance,
		thirdHueDistance,
		setThirdHueDistance,
	} = useContext(ColorsContext)

	// (TODO) add a color wheel

	const max = 345
	const step = 5

	return (
		<>
			<Slider
				label={'Select hue distance'}
				value={secondHueDistance}
				onChange={(value: number): void => {
					setSecondHueDistance(value)
					const secondHueDifference = value - secondHueDistance
					setThirdHueDistance((thirdHueDistance + secondHueDifference + max) % max)
				}}
				max={max}
				step={step}
			/>
			<Slider
				label={'Select hue distance'}
				value={thirdHueDistance}
				onChange={setThirdHueDistance}
				max={max}
				step={step}
			/>
		</>
	)
}
