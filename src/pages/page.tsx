import React, { useContext } from 'react'
import { ClassicPage } from '../modes/classic/classicPage'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsPage } from '../modes/seasons/seasonsPage'

export interface IPageProps {
	headerBackgroundImage: string
	titleText: string
	subtitleText?: string
	Pivots: JSX.Element
	Content: JSX.Element
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	let { headerBackgroundImage, titleText, subtitleText, ...remainingProps } = props
	const { mode } = useContext(ModesContext)

	if (mode === Modes.Classic) {
		if (!subtitleText) {
			subtitleText = titleText
		}

		return (
			<ClassicPage
				headerBackgroundImage={headerBackgroundImage}
				subtitleText={subtitleText}
				{...remainingProps}
			/>
		)
	}

	return <SeasonsPage titleText={titleText} {...remainingProps} />
}
