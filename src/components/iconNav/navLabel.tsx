import Fade from '@material-ui/core/Fade'
import React from 'react'

export interface INavLabelProps {
	label: string

	/* Styling */
	width: string
	height: string
	rootStyle: React.CSSProperties
	textStyle?: React.CSSProperties
	applyTextFade?: boolean
	applyRootFade?: boolean
	fadeDelay?: number

	/* Callbacks */
	onClick?: () => void
}

/**
 * This is an atomic component:
 * It should avoid using Context and avoid behavior-specific props.
 */
export const NavLabel: React.FunctionComponent<INavLabelProps> = (
	props: INavLabelProps
): JSX.Element => {
	const {
		label,
		width,
		height,
		rootStyle,
		textStyle,
		onClick,
		applyTextFade = true,
		applyRootFade = true,
		fadeDelay = 250,
	} = props

	return (
		<Fade in={applyRootFade} timeout={fadeDelay}>
			<div
				style={{
					display: 'flex',
					width,
					height,
					minWidth: '160px',
					cursor: 'pointer',
					...rootStyle,
				}}
				onClick={onClick}
			>
				<Fade in={applyTextFade} timeout={fadeDelay} key={label}>
					<div style={{ margin: 'auto', padding: '0 16px', ...textStyle }}>{label}</div>
				</Fade>
			</div>
		</Fade>
	)
}
