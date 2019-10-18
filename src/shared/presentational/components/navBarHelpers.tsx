import React from 'react'

export const IsNavBarOpenContext = React.createContext<{
	isNavBarOpen: boolean
	setIsNavBarOpen: (value: boolean) => void
}>({
	isNavBarOpen: false,
	setIsNavBarOpen: (value: boolean): void => {
		return
	},
})
