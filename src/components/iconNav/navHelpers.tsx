export const fadeFilterValue = 'invert(0.44)'

export const getFade = (options: {
	isHovering: boolean
	isSelected: boolean
}): { shouldFade: boolean; fadeFilter: string } => {
	const { isHovering, isSelected } = options
	const shouldFade = !isHovering && !isSelected

	return { shouldFade, fadeFilter: fadeFilterValue }
}
