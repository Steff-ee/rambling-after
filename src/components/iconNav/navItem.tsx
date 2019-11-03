import React, { useContext } from 'react'
import { ColorsContext } from '../../shared/presentational/hooks/useColors'
import { INavItem, NavOrientation } from './iconNav.types'
const ReactHoverObserver = require('react-hover-observer').default

export enum NavItemLabelPosition {
	Right,
	Hover,
	None,
}

export type INavItemProps = Omit<INavItem, 'id'> & {
	labelPosition: NavItemLabelPosition
	width: string
	height: string
	labelWidth: string
	orientation: NavOrientation
}

export const NavItem: React.FunctionComponent<INavItemProps> = (
	props: INavItemProps
): JSX.Element => {
	const { labelPosition, icon, onClick, label, width, height, labelWidth, orientation } = props
	const colors = useContext(ColorsContext)

	return (
		<ReactHoverObserver>
			{({ isHovering }: { isHovering: boolean }): JSX.Element => {
				let filter = ''
				let labelElement: JSX.Element | undefined
				if (isHovering) {
					filter = 'invert(0.5)'

					if (labelPosition === NavItemLabelPosition.Hover) {
						const labelStyle =
							orientation === NavOrientation.Left ? { right: 0 } : { left: 0 }
						labelElement = (
							<div
								style={{
									position: 'absolute',
									display: 'flex',
									height,
									marginTop: height,
									backgroundColor: colors.secondary,
									color: colors.primary,
									minWidth: '160px',
									...labelStyle,
								}}
							>
								<div style={{ margin: 'auto', padding: '0 16px' }}>{label}</div>
							</div>
						)
					}
				}

				if (labelPosition === NavItemLabelPosition.Right) {
					labelElement = (
						<div
							style={{
								margin: 'auto 0',
								textAlign: 'left',
								paddingLeft: '4%',
								width: labelWidth,
								filter,
							}}
							onClick={onClick}
						>
							{label}
						</div>
					)
				}

				const button = (
					<div
						style={{
							width,
							height,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							filter,
						}}
						onClick={onClick}
					>
						{icon}
					</div>
				)

				if (labelElement) {
					return (
						<div style={{ display: 'flex' }}>
							{button}
							{labelElement}
						</div>
					)
				}

				return button
			}}
		</ReactHoverObserver>
	)
}
