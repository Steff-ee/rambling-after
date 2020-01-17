export const fadeFilterValue = 'invert(0.33)'
export const disabledFadeFilterValue = 'invert(0.8)'

export const getFade = (options: {
	isHovering: boolean
	isSelected: boolean
	disabled: boolean
}): string => {
	const { isHovering, isSelected, disabled } = options
	const shouldFade = disabled || (!isHovering && !isSelected)
	const fadeFilter = disabled ? disabledFadeFilterValue : fadeFilterValue

	return shouldFade ? fadeFilter : ''
}
