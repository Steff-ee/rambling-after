import { ActionButton, INavLink, INavProps, Nav } from 'office-ui-fabric-react/lib'
import React from 'react'
import { useToggle } from '../../shared/helpers/useToggle'

// (TODO) add opening/closing animation
export interface IIconNavProps extends INavProps {
	// if isShowIconsOnlyControlled is true, showIconsOnly controls whether to display the Nav as icons-only or not
	// if isShowIconsOnlyControlled is false, sets the initial state of the display
	showIconsOnly: boolean
	isShowIconsOnlyControlled: boolean
	onIconsMenuIconClick?: () => void
	// optionally override the nav link to toggle whether to show icons only
	iconsOnlyToggleNavLink?: INavLink
	// content to show below the tabs only when showIconsOnly is false
	onRenderBelowContent?: () => JSX.Element
	rootStyle?: React.CSSProperties
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
			rootStyle,
			...remainingProps
		} = props
		const { value: showIconsOnlyState, toggleValue: toggleShowIconsOnlyState } = useToggle(
			showIconsOnlyProp
		)
		// if not being controlled by the prop, use the state instead
		const showIconsOnly = isShowIconsOnlyControlled ? showIconsOnlyProp : showIconsOnlyState

		const minWidth = '60px'
		const width = showIconsOnly ? minWidth : '300px'

		// (TODO) don't over write styles; handle div style in Fabric way
		styles = {
			root: {
				width,
			},
			link: {
				height: minWidth,
			},
		}

		return (
			<div style={{ ...rootStyle }}>
				<div style={{ display: 'inline-block', width }}>
					<div style={{ width: minWidth }}>
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
					</div>
					<InnerComponent
						{...remainingProps}
						styles={styles}
						onRenderLink={onRenderLink(showIconsOnly)}
					/>
					{onRenderBelowContent && !showIconsOnly && onRenderBelowContent()}
				</div>
			</div>
		)
	}
}

export const IconNav = withIconNavBehavior(Nav)
