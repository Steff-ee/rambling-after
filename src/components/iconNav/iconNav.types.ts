export enum IconLayout {
	Horizontal,
	Vertical,
}

export interface INavItem {
	id: string
	icon: JSX.Element
	onClick?: () => void
	label?: string
}

export interface IIconNavProps {
	/* List of icons to display */
	navItems: INavItem[]

	/* Indicates the currently selected navItem, so that it can be highlighted */
	selectedKey: string

	/* Whether to show icons vertically or horizontally */
	iconLayout: IconLayout

	/* In vertical mode, this controls whether or not to show the icon labels */
	showIconLabels?: boolean

	/* In vertical mode, this triggers on the clicking the menu icon, intended to open or close the icon labels */
	onIconsMenuIconClick?: () => void

	/* In vertical mode, this content will show below opened icon labels */
	onRenderBelowContent?: () => JSX.Element

	/* Styling for the component as a whole */
	rootStyle?: React.CSSProperties

	/* Optionally override the default NavItem component */
	NavItem?: React.ComponentType

	/* STYLING */
	iconWidth?: string
	iconHeight?: string
	labelWidth?: string
}
