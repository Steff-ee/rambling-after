import { useState } from 'react'

interface IUseToggleResult {
	value: boolean
	toggleValue: () => void
}

export const useToggle = (defaultValue: boolean): IUseToggleResult => {
	const [value, setValue] = useState<boolean>(defaultValue)

	const toggleValue = (): void => setValue(!value)

	return { value, toggleValue }
}
