import React, { useState } from 'react'
import { getColorString, IColor } from './colors'
import { IDrumMachineCellProps } from './drumMachineDisplay.types'

const OffBlack: IColor = { R: 19, G: 19, B: 19, T: 1 }

export function DrumMachineCell(props: IDrumMachineCellProps): JSX.Element {
	const { canBeHit, instrumentColor, isHighlighted, isOnBeat, isBeingHit } = props
	const [isHovering, setIsHovering] = useState(false)

	// (TODO V2) implement onClick, toggle canBeHit

	let color: IColor
	if (canBeHit) {
		color = instrumentColor
	} else {
		color = OffBlack
	}

	let transparency = color.T
	if (isHighlighted) {
		transparency *= 0.75
	}
	if (isHovering) {
		transparency *= 0.75
	}
	if (isBeingHit) {
		transparency *= 0.75
	}
	if (isOnBeat) {
		transparency *= 0.75
	}

	const colorString = getColorString(color)

	// use extra div with white background so lower transparencies lead to brighter colors
	return (
		<div style={{ backgroundColor: 'white' }}>
			<div
				style={{ backgroundColor: colorString }}
				onMouseEnter={(): void => {
					setIsHovering(true)
				}}
				onMouseLeave={(): void => {
					setIsHovering(false)
				}}
			/>
		</div>
	)
}
