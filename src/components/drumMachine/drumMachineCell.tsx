import React, { useState } from 'react'
import { getColorString, IColor } from './colors'
import { IDrumMachineCellProps } from './drumMachineDisplay.types'

const Grey: IColor = { R: 175, G: 175, B: 175, A: 1 }

/**
 * NOTE: Requires a black background in order for transparency to correctly highlight cells
 */
export function DrumMachineCell(props: IDrumMachineCellProps): JSX.Element {
	const { canBeHit, instrument, isHighlighted, isOnBeat, isBeingHit } = props
	const [isHovering, setIsHovering] = useState(false)

	// (TODO V2) implement onClick, toggle canBeHit

	let color: IColor
	if (canBeHit && !!instrument) {
		color = instrument.color
	} else {
		color = Grey
	}

	let darkenRatio = 0
	if (!isHighlighted) {
		darkenRatio += 0.1
	}
	if (!isHovering) {
		darkenRatio += 0.1
	}
	if (!isBeingHit) {
		darkenRatio += 0.2
	}
	if (!isOnBeat) {
		darkenRatio += 0.1
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
