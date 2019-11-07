import React, { useContext } from 'react'
import { ClassicPage } from '../modes/classic/classicPage'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsPage } from '../modes/seasons/seasonsPage'

export interface IPageProps {
	headerBackgroundImage: string
	titleText: string
	Pivots: JSX.Element
	Content: JSX.Element
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { headerBackgroundImage, titleText, ...remainingProps } = props
	const { mode } = useContext(ModesContext)

	if (mode === Modes.Classic) {
		return <ClassicPage headerBackgroundImage={headerBackgroundImage} {...remainingProps} />
	}

	return <SeasonsPage titleText={titleText} {...remainingProps} />
}
