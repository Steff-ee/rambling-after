import React from 'react'
import Particles from 'react-particles-js'
import { Colors } from '../../helpers/constants'

export interface IFirefliesProps {
	style?: React.CSSProperties
}

export const Fireflies: React.FunctionComponent<IFirefliesProps> = (
	props: IFirefliesProps
): JSX.Element => {
	const { style } = props
	const count = 30
	const animSpeed = 3
	const moveSpeed = 2
	const maxSize = 3

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
						type: 'circle',
					},
					opacity: {
						value: 0.8,
						random: true,
						anim: {
							enable: true,
							speed: animSpeed,
							opacity_min: 0.2,
							sync: false,
						},
					},
					size: {
						value: maxSize,
						random: true,
						anim: {
							enable: true,
							speed: animSpeed,
							size_min: 1,
							sync: false,
						},
					},
					line_linked: {
						enable: false,
					},
					move: {
						enable: true,
						speed: moveSpeed,
						// direction: MoveDirection;
						// random: boolean;
						// straight: boolean;
						out_mode: 'out',
						bounce: false,
						// attract: {
						//     enable: boolean;
						//     rotateX: number;
						//     rotateY: number;
						// };
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: 'grab',
						},
						onclick: {
							enable: true,
							mode: 'bubble',
						},
					},
					modes: {
						grab: {
							distance: 120,
							line_linked: {
								opacity: 0.5,
							},
						},
						bubble: {
							distance: 120,
							size: maxSize,
							duration: 1,
							opacity: 1,
						},
					},
				},
			}}
		/>
	)
}
