import { INavProps, Nav } from 'office-ui-fabric-react/lib'
import React from 'react'

export interface IIconNavProps extends INavProps {
	showOnlyIcons: boolean
}

export const IconNav: React.FunctionComponent<IIconNavProps> = (
	props: IIconNavProps
): JSX.Element => {
	const { showOnlyIcons, ...remainingProps } = props

	return <Nav {...remainingProps} />
}
