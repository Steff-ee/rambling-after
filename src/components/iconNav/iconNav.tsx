import { ActionButton, INavLink, INavProps, Nav } from 'office-ui-fabric-react/lib'
import React from 'react'

// (TODO) add opening/closing animation
export interface IIconNavProps extends INavProps {
	showIconsOnly: boolean
	toggleShowIconsOnly: () => void
	iconsOnlyToggleNavLink?: INavLink
}

const onRenderLink = (showIconsOnly: boolean): INavProps['onRenderLink'] => (
	props: INavLink | undefined
): JSX.Element => {
	if (showIconsOnly || !props) {
		return <></>
	}

	return <>{props.name}</>
}

/**
 * Implemented as a HOC to allow composition with other Fabric Nav variants.
 */
export function withIconNavBehavior(
	InnerComponent: typeof Nav
): React.FunctionComponent<IIconNavProps> {
	return (props: IIconNavProps): JSX.Element => {
		let {
			showIconsOnly,
			toggleShowIconsOnly,
			iconsOnlyToggleNavLink,
			styles,
			...remainingProps
		} = props

		if (!iconsOnlyToggleNavLink) {
			iconsOnlyToggleNavLink = {
				iconProps: { iconName: 'GlobalNavButton' },
				name: '',
				onClick: toggleShowIconsOnly,
				url: '',
			}
		}

		// (TODO) don't over write styles
		styles = {
			root: {
				border: '1px solid #eee',
				width: showIconsOnly ? '50px' : '300px',
			},
		}

		return (
			<>
				<ActionButton
					iconProps={{ iconName: 'GlobalNavButton' }}
					onClick={toggleShowIconsOnly}
				/>
				<InnerComponent
					{...remainingProps}
					styles={styles}
					onRenderLink={onRenderLink(showIconsOnly)}
				/>
			</>
		)
	}
}

export const IconNav = withIconNavBehavior(Nav)
