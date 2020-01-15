import React, { useContext } from 'react'
import { ClassicPageTemplate } from '../modes/classic/classicPageTemplate'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsPage } from '../modes/seasons/seasonsPage'
import { IUsePivotKeyReturns } from '../shared/presentational/hooks/usePivots'

export interface IPageProps {
	headerBackgroundImage: string
	titleText: string
	Content: JSX.Element
	showPostsNav: boolean

	/* Pivots */
	selectedPivotTitle: string | undefined
	setPivot: IUsePivotKeyReturns['setPivot']
	pivotsItems: IUsePivotKeyReturns['pivotsItems']

	/* Posts Navigation */
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
		showPostsNav,
		...remainingProps
	} = props
	const { mode } = useContext(ModesContext)

	if (mode === Modes.Classic) {
		return (
			<ClassicPageTemplate
				headerBackgroundImage={headerBackgroundImage}
				showPostsNav={showPostsNav}
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
