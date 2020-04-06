import React, { useState } from 'react'
import { getColorString, IColor } from './colors'
import { IDrumMachineCellProps } from './drumMachineDisplay.types'

const Grey: IColor = { R: 175, G: 175, B: 175, A: 1 }
const White: IColor = { R: 255, G: 255, B: 255, A: 1 }

/**
 * NOTE: Requires a black background in order for transparency to correctly highlight cells
 */
export function DrumMachineCell(props: IDrumMachineCellProps): JSX.Element {
	const { canBeHit, instrumentColor, isDisabled, isOnBeat, isBeingHit } = props
	const [isHovering, setIsHovering] = useState(false)

	// (TODO V2) implement onClick, toggle canBeHit

	let color: IColor
	let darkenRatio = 0

	if (canBeHit && !isDisabled && isBeingHit) {
		color = White
	} else {
		if (canBeHit && !isDisabled && instrumentColor) {
			color = instrumentColor
		} else {
			color = Grey
		}

		if (isHovering) {
			darkenRatio += 0.15
		}
		if (!isBeingHit) {
			darkenRatio += 0.2
		}
		if (!canBeHit && !isOnBeat) {
			darkenRatio += 0.15
		}
		if (isDisabled) {
			darkenRatio += 0.5
		}
	}

	const colorString = getColorString({ ...color, A: color.A - darkenRatio })

	return (
		<div
			style={{
				backgroundColor: colorString,
				width: '35px',
				height: '35px',
				borderRadius: '6px',
				margin: '3px',
			}}
			onMouseEnter={(): void => {
				setIsHovering(true)
			}}
			onMouseLeave={(): void => {
				setIsHovering(false)
			}}
		/>
	)
}
