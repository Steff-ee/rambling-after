export enum IconLayout {
	Horizontal,
	Vertical,
}

export enum NavOrientation {
	Left,
	Right,
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
	selectedId: string

	/* Whether to show icons vertically or horizontally */
	iconLayout: IconLayout

	/* Whether the nav is on the left or right */
	orientation: NavOrientation

	/* In vertical mode, this controls whether or not to show the icon labels */
	showIconLabels?: boolean

	/* In vertical mode, this triggers on the clicking the menu icon, intended to open or close the icon labels */
	onIconsMenuIconClick?: () => void

	/* In vertical mode, this content will show below opened icon labels */
	onRenderBelowContent?: () => JSX.Element

	/* Styling for the component as a whole */
	rootStyle?: React.CSSProperties

	/* STYLING */
	iconWidth?: string
	iconHeight?: string
	labelWidth?: string
}
