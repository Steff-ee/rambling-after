import React, { useContext } from 'react'
import { ClassicPage } from '../modes/classic/classicPage'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsPage } from '../modes/seasons/seasonsPage'

export interface IPageProps {
	headerBackgroundImage: string
	titleText: string
	Pivots: JSX.Element
	Content: JSX.Element
	backClick?: () => void
	nextClick?: () => void
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const { headerBackgroundImage, titleText, backClick, nextClick, ...remainingProps } = props
	const { mode } = useContext(ModesContext)

	if (mode === Modes.Classic) {
		return (
			<ClassicPage
				headerBackgroundImage={headerBackgroundImage}
				backClick={backClick}
				nextClick={nextClick}
				{...remainingProps}
			/>
		)
	}

	return <SeasonsPage titleText={titleText} {...remainingProps} />
}
