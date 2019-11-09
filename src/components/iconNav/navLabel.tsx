import Fade from '@material-ui/core/Fade'
import React, { useContext } from 'react'
import { ColorsContext } from '../../shared/presentational/hooks/useColors'

export interface INavLabelProps {
	label: string
	width: string
	height: string
	style: React.CSSProperties
	onClick?: () => void
}

export const NavLabel: React.FunctionComponent<INavLabelProps> = (
	props: INavLabelProps
): JSX.Element => {
	const { label, width, height, style, onClick } = props
	const { primary: primaryColor, secondary: secondaryColor } = useContext(ColorsContext)
	const fadeDelay = 250

	return (
		<Fade in={true} timeout={fadeDelay}>
			<div
				style={{
					display: 'flex',
					width,
					height,
					backgroundColor: secondaryColor,
					color: primaryColor,
					minWidth: '160px',
					cursor: 'pointer',
					...style,
				}}
				onClick={onClick}
			>
				<Fade in={true} timeout={fadeDelay} key={label}>
					<div style={{ margin: 'auto', padding: '0 16px' }}>{label}</div>
				</Fade>
			</div>
		</Fade>
	)
}
