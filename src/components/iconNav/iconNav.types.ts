export enum IconLayout {
	Horizontal,
	Vertical,
}

export enum LabelPosition {
	Left,
	Right,
}

export enum NavOrientation {
	Left,
	Right,
}

export interface INavItem {
	id: string | undefined
	icon: JSX.Element
	label: string
	onClick?: () => void
	disabled?: boolean
}

export interface ICommonIconNavProps {
	/* List of icons to display */
	navItems: INavItem[]

	/* Indicates the currently selected navItem, so that it can be highlighted */
	selectedId: string

	/* Whether the nav is on the left or right */
	orientation: NavOrientation

	/* Styling for the component as a whole */
	rootStyle?: React.CSSProperties

	/* STYLING */
	iconWidth?: string
	iconHeight?: string
	labelWidth?: string
}

export type IHorizontalIconNavProps = ICommonIconNavProps

export interface IVerticalIconNavProps extends ICommonIconNavProps {
	/* Whether or not to show the icon labels */
	showIconLabels: boolean

	/* This triggers on the clicking the menu icon, intended to open or close the icon labels */
	onIconsMenuIconClick: () => void

	/* This content will show below opened icon labels */
	onRenderBelowContent?: () => JSX.Element
}
