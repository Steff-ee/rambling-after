import { ActionButton, INavLink, INavProps, Nav } from 'office-ui-fabric-react/lib'
import React from 'react'
import { useToggle } from '../../shared/helpers/useToggle'

export enum IconLayout {
	Horizontal,
	Vertical,
}

// (TODO) add opening/closing animation
export interface IIconNavProps extends INavProps {
	// if isShowIconsOnlyControlled is true, showIconsOnly controls whether to display the Nav as icons-only or not
	// if isShowIconsOnlyControlled is false, sets the initial state of the display
	showIconsOnly: boolean
	isShowIconsOnlyControlled: boolean
	iconLayout: IconLayout
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

interface IHorizontalIconsProps {
	icons: INavLink[]
	style?: React.CSSProperties
}

const HorizontalIcons: React.FunctionComponent<IHorizontalIconsProps> = (
	props: IHorizontalIconsProps
): JSX.Element => {
	const { style, icons } = props

	return (
		<div
			style={{
				position: 'fixed',
				width: '100vw',
				height: '44px',
				top: '213px',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				...style,
			}}
		>
			{icons.map(
				(link: INavLink): JSX.Element => {
					if (!link) {
						return <></>
					}

					return <ActionButton {...link} onClick={link.onClick as any} key={link.key} />
				}
			)}
		</div>
	)
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
			groups,
			iconLayout,
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

		if (iconLayout === IconLayout.Horizontal && groups) {
			// (TODO) handle multiple groups
			const links = groups[0].links

			return <HorizontalIcons style={rootStyle} icons={links} />
		}

		return (
			<div style={rootStyle}>
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
						groups={groups}
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
