import React, { useContext } from 'react'
import { Modes, ModesContext } from '../shared/presentational/hooks/modeSwitcher'
import { ClassicPage } from './classicPage'
import { SeasonsPage } from './seasonsPage'

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
