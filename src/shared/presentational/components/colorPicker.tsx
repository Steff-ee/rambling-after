import React, { useContext } from 'react'
import { HuesContext } from '../hooks/useHues'

export const ColorPicker: React.FunctionComponent = (): JSX.Element => {
	const {
		primary,
		setPrimary,
		secondHueDistance,
		setSecondHueDistance,
		thirdHueDistance,
		setThirdHueDistance,
	} = useContext(HuesContext)

	// (TODO) add a color wheel

	const max = 345
	const step = 5

	return <></>

	// return (
	// 	<>
	// 		<Slider
	// 			label={'Select hue distance'}
	// 			value={secondHueDistance}
	// 			onChange={(value: number): void => {
	// 				setSecondHueDistance(value)
	// 				const secondHueDifference = value - secondHueDistance
	// 				setThirdHueDistance((thirdHueDistance + secondHueDifference + max) % max)
	// 			}}
	// 			max={max}
	// 			step={step}
	// 		/>
	// 		<Slider
	// 			label={'Select hue distance'}
	// 			value={thirdHueDistance}
	// 			onChange={setThirdHueDistance}
	// 			max={max}
	// 			step={step}
	// 		/>
	// 	</>
	// )
}
