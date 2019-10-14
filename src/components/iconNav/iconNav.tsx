import { ActionButton, INavLink, INavProps, Nav } from 'office-ui-fabric-react/lib'
import React from 'react'
import { useToggle } from '../../shared/helpers/useToggle'

// (TODO) add opening/closing animation
export interface IIconNavProps extends INavProps {
	// if isShowIconsOnlyControlled is true, controls whether to display the Nav as icons-only or not
	// if isShowIconsOnlyControlled is false, sets the initial state of the display
	showIconsOnly: boolean
	isShowIconsOnlyControlled: boolean
	onIconsMenuIconClick?: () => void
	// optionally override the nav link to toggle whether to show icons only
	iconsOnlyToggleNavLink?: INavLink
	// content to show below the tabs only when showIconsOnly is false
	onRenderBelowContent?: () => JSX.Element
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
			showIconsOnly: showIconsOnlyProp,
			isShowIconsOnlyControlled,
			onIconsMenuIconClick,
			iconsOnlyToggleNavLink,
			styles,
			onRenderBelowContent,
			...remainingProps
		} = props
		const { value: showIconsOnlyState, toggleValue: toggleShowIconsOnlyState } = useToggle(
			showIconsOnlyProp
		)
		// if not being controlled by the prop, use the state instead
		const showIconsOnly = isShowIconsOnlyControlled ? showIconsOnlyProp : showIconsOnlyState

		// (TODO) don't over write styles
		styles = {
			root: {
				border: '1px solid #eee',
				width: showIconsOnly ? '60px' : '300px',
			},
			link: {
				height: '60px',
			},
		}

		// (TODO) fix below content (or move to a different component!)

		return (
			<>
				<ActionButton
					iconProps={{ iconName: 'GlobalNavButton' }}
					onClick={(): void => {
						// only call if uncontrolled
						if (!isShowIconsOnlyControlled) {
							toggleShowIconsOnlyState()
						}
						// always call
						if (onIconsMenuIconClick) {
							onIconsMenuIconClick()
						}
					}}
				/>
				<InnerComponent
					{...remainingProps}
					styles={styles}
					onRenderLink={onRenderLink(showIconsOnly)}
				/>
				{onRenderBelowContent && !showIconsOnly && onRenderBelowContent()}
			</>
		)
	}
}

export const IconNav = withIconNavBehavior(Nav)
