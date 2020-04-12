import { bottomContentMargin } from '../../shared/helpers/styles'
import { useLightTextStyle } from '../../shared/helpers/useStyles'
import { useColors } from '../../shared/presentational/hooks/useColors'

export const useDisplayTableStyle = (): React.CSSProperties => {
	const lightTextStyle = useLightTextStyle()
	const { border: borderColor } = useColors()

	return {
		...lightTextStyle,
		marginBottom: bottomContentMargin,
		borderRadius: '3px',
		border: `1px solid ${borderColor}`,
		padding: '8px',
	}
}

export const DisplayListEmphasizedPropStyle: React.CSSProperties = {
	fontWeight: 600,
}

export const DisplayListLeftPropStyle: React.CSSProperties = {
	textAlign: 'left',
	marginRight: '50px',
	marginBottom: '10px',
}

export const DisplayListRightPropStyle: React.CSSProperties = {
	textAlign: 'right',
	marginLeft: '50px',
	marginBottom: '10px',
}
