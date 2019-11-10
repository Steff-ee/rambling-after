import React from 'react'

export interface INavLabelProps {
	label: string

	/* Styling */
	width: string
	height: string
	rootStyle: React.CSSProperties
	textStyle?: React.CSSProperties

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
	const { label, width, height, rootStyle, textStyle, onClick } = props

	return (
		<div>
			<div
				aria-label={label}
				key={`NavLabel-${label}`}
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
				<div style={{ margin: 'auto', padding: '0 16px', ...textStyle }}>{label}</div>
			</div>
		</div>
	)
}
