import React, { useContext } from 'react'
import { NavBarContainer } from '../shared/presentational/components/navBarContainer'
import { ColorsContext } from '../shared/presentational/hooks/useColors'

export interface IHeaderProps {
	titleText: string
}

export const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps): JSX.Element => {
	const { titleText } = props
	const { secondary } = useContext(ColorsContext)

	return (
		<div
			style={{
				backgroundColor: secondary,
				padding: '30px',
			}}
		>
			{titleText}
		</div>
	)
}

export interface IPageProps extends IHeaderProps {
	Pivots: JSX.Element
	Content: JSX.Element
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { titleText, Pivots, Content } = props
	const { primary, accent } = useContext(ColorsContext)

	return (
		<div style={{ height: '100%', backgroundColor: primary, textAlign: 'center' }}>
			<Header titleText={titleText} />
			<div style={{ backgroundColor: accent }}>{Pivots}</div>
			<div
				style={{
					position: 'absolute',
				}}
			>
				<NavBarContainer />
			</div>
			<div
				style={{
					padding: '40px',
				}}
			>
				{Content}
			</div>
		</div>
	)
}
