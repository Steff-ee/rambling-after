import React, { useContext } from 'react'
import { NavBarContainer } from '../shared/presentational/components/navBarContainer'
import { ColorsContext } from '../shared/presentational/hooks/useColors'

export interface IPageProps {
	Header: JSX.Element
	Pivots: JSX.Element
	Content: JSX.Element
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { Header, Pivots, Content } = props
	const { primary, secondary, accent } = useContext(ColorsContext)

	return (
		<div style={{ height: '100%', backgroundColor: primary }}>
			<NavBarContainer />
			<div style={{ backgroundColor: secondary }}>{Header}</div>
			<div style={{ backgroundColor: accent }}>{Pivots}</div>
			{Content}
		</div>
	)
}
