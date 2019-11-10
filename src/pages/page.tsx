import React, { useContext } from 'react'
import { ClassicPage } from '../modes/classic/classicPage'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsPage } from '../modes/seasons/seasonsPage'

export interface IPageProps {
	headerBackgroundImage: string
	titleText: string
	Pivots: JSX.Element
	Content: JSX.Element
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const Page: React.FunctionComponent<IPageProps> = (props: IPageProps): JSX.Element => {
	const {
		headerBackgroundImage,
		titleText,
		firstClick,
		backClick,
		nextClick,
		latestClick,
		...remainingProps
	} = props
	const { mode } = useContext(ModesContext)

	if (mode === Modes.Classic) {
		return (
			<ClassicPage
				headerBackgroundImage={headerBackgroundImage}
				firstClick={firstClick}
				backClick={backClick}
				nextClick={nextClick}
				latestClick={latestClick}
				{...remainingProps}
			/>
		)
	}

	return <SeasonsPage titleText={titleText} {...remainingProps} />
}
