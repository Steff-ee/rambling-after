import React, { useContext } from 'react'
import Particles from 'react-particles-js'
import { Colors } from '../../helpers/constants'
import { IsNavBarOpenContext } from './navBarHelpers'

export interface IFirefliesProps {
	style?: React.CSSProperties
}

interface IHighlightProps {
	maxSize: number
	minSize: number
	maxOpacity: number
	minOpacity: number
	interactionEnabled: boolean
}

export const Fireflies: React.FunctionComponent<IFirefliesProps> = (
	props: IFirefliesProps
): JSX.Element => {
	const { style } = props
	const { isNavBarOpen } = useContext(IsNavBarOpenContext)
	const count = 30
	const animSpeed = 3
	const moveSpeed = 2
	const interactionDistance = 200
	const bubbleSize = 7

	let options: IHighlightProps
	if (isNavBarOpen) {
		options = {
			maxSize: 5,
			minSize: 2,
			maxOpacity: 1,
			minOpacity: 0.8,
			interactionEnabled: true,
		}
	} else {
		options = {
			maxSize: 3,
			minSize: 1,
			maxOpacity: 0.8,
			minOpacity: 0.2,
			interactionEnabled: false,
		}
	}

	return (
		<Particles
			style={style}
			params={{
				particles: {
					number: {
						value: count,
					},
					color: {
						value: Colors.Firefly,
					},
					shape: {
						type: 'circle' as const,
					},
					opacity: {
						value: options.maxOpacity,
						random: true,
						anim: {
							enable: true,
							speed: animSpeed,
							opacity_min: options.minOpacity,
							sync: false,
						},
					},
					size: {
						value: options.maxSize,
						random: true,
						anim: {
							enable: true,
							speed: animSpeed,
							size_min: options.minSize,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
						color: Colors.Firefly,
						width: 2,
					},
					move: {
						enable: true,
						speed: moveSpeed,
						random: true,
						out_mode: 'out' as const,
						bounce: false,
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: options.interactionEnabled,
							mode: 'grab',
						},
						onclick: {
							enable: options.interactionEnabled,
							mode: 'bubble',
						},
					},
					modes: {
						grab: {
							distance: interactionDistance,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							size: bubbleSize,
							distance: interactionDistance,
						},
					},
				},
			}}
		/>
	)
}
