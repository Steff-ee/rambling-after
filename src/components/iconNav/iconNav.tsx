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

export const IconNav: React.FunctionComponent<IIconNavProps> = (
	props: IIconNavProps
): JSX.Element => {
	let {
		showIconsOnly,
		toggleShowIconsOnly,
		iconsOnlyToggleNavLink,
		groups,
		styles,
		...remainingProps
	} = props

	if (!groups) {
		return <></>
	}

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

	// (TODO) Decide whether to add button into list of links or make it a separate ActionButton
	const newGroups = [...groups]
	const newGroup = { ...groups[0] }
	const newLinks = [...groups[0].links]
	newLinks.unshift(iconsOnlyToggleNavLink)
	newGroups[0] = newGroup
	newGroup.links = newLinks

	return (
		<>
			<ActionButton
				iconProps={{ iconName: 'GlobalNavButton' }}
				onClick={toggleShowIconsOnly}
			/>
			<Nav
				{...remainingProps}
				groups={newGroups}
				styles={styles}
				onRenderLink={onRenderLink(showIconsOnly)}
			/>
		</>
	)
}
