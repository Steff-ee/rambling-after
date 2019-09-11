import { LocationDescriptorObject } from 'history'
import React from 'react'
import { RouterProps, withRouter } from 'react-router'
import { NavBar } from './navBar'

type IOwnProps = RouterProps

export function withNavBarBehavior(
	InnerComponent: typeof NavBar
): React.FunctionComponent<IOwnProps> {
	return (props: IOwnProps): JSX.Element => {
		const { history } = props

		return (
			<InnerComponent
				navigate={(destination: LocationDescriptorObject): void =>
					history.push(destination)
				}
			/>
		)
	}
}

export const NavBarContainer = withRouter(withNavBarBehavior(NavBar))
