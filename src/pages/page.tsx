import React, { useContext } from 'react'
import { PageRoutes } from '../shared/helpers/routes'
import { Modes, ModesContext } from '../shared/presentational/hooks/modeSwitcher'
import { ClassicPage } from './classicPage'
import { SeasonsPage } from './seasonsPage'

export interface IPageProps {
	pageRoute: PageRoutes
	titleText: string
	Pivots: JSX.Element
	Content: JSX.Element
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { pageRoute, ...remainingProps } = props
	const { mode } = useContext(ModesContext)

	if (mode === Modes.Classic) {
		return <ClassicPage pageRoute={pageRoute} {...remainingProps} />
	}

	return <SeasonsPage {...remainingProps} />
}
