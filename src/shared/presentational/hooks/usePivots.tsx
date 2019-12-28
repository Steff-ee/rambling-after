import { IPivotItemProps, IPivotProps, PivotItem } from 'office-ui-fabric-react/lib'
import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'
import { MediaContext, MediaSize } from '../../../components/mediaProvider'
import { RouteContext } from '../../helpers/routes'
import { IPivotTitlePhrases } from './usePivots.types'
import { useTextMorph } from './useTextMorph'

// (TODO) do an efficiency pass (use memoization)
// (TODO) add documentation

export interface IUsePivotKeyReturns {
	selectedPivotTitle: string | undefined
	setPivot: IPivotProps['onLinkClick']
	pivotsItems: IPivotItemProps[]
	redirectTo: JSX.Element | undefined
}

interface ITitleMap {
	[title: string]: number | undefined
}

export const makeTitleMap = (phrases: IPivotTitlePhrases): ITitleMap => {
	const titleMap: ITitleMap = {}
	phrases.forEach((phrase, index) => {
		const title = phrase[index]
		titleMap[title] = index
	})

	return titleMap
}

export const getNewPath = (pageRoute: string, newPivot: string): string => {
	return `/${pageRoute}/${newPivot}`
}

export const usePivots = (
	titlePhrases: IPivotTitlePhrases,
	defaultTitle: string,
	titleMap: ITitleMap
): IUsePivotKeyReturns => {
	const { pivot: selectedPivotTitle } = useParams()
	const history = useHistory()
	const location = useLocation()
	const pageRoute = location.pathname.split('/')[1]
	const [hoverPivotTitle, setHoverPivotTitle] = useState<string | undefined>(undefined)
	const mediaSize = useContext(MediaContext)
	const { prevPivots, setPrevPivot } = useContext(RouteContext)
	const prevPivot = prevPivots[pageRoute]
	const skipMorph = mediaSize === MediaSize.Small

	// keep previously selected pivot up to date
	useEffect(() => {
		if (selectedPivotTitle && selectedPivotTitle !== prevPivot) {
			setPrevPivot(pageRoute, selectedPivotTitle)
		}
	}, [selectedPivotTitle])

	const setPivot = (item?: PivotItem): void => {
		const newSelectedKey = item && item.props.itemKey
		if (newSelectedKey) {
			history.replace(getNewPath(pageRoute, newSelectedKey))
		}
	}

	const onMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		const target = event.target as HTMLDivElement
		const newHoverKey = target.innerText
		setHoverPivotTitle(newHoverKey)
	}

	const onMouseLeave = (): void => {
		setHoverPivotTitle(undefined)
	}

	const onRenderItemLink = (
		props?: IPivotItemProps,
		defaultRender?: (props?: IPivotItemProps) => JSX.Element | null
	): JSX.Element | null => {
		return (
			<div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{defaultRender && defaultRender(props)}
			</div>
		)
	}

	const baseTitles = titlePhrases.map((phrase, index) => phrase[index])
	let titles = baseTitles
	if (hoverPivotTitle !== undefined) {
		const titlePhraseIndex = titleMap[hoverPivotTitle]
		if (titlePhraseIndex !== undefined) {
			titles = titlePhrases[titlePhraseIndex]
		}
	}

	const bypassIfNoHover = !hoverPivotTitle
	const { morphedTexts: morphedTitles } = useTextMorph(
		baseTitles,
		titles,
		bypassIfNoHover,
		skipMorph
	)

	const pivotsItems: IPivotItemProps[] = baseTitles.map((baseTitle, index) => ({
		onRenderItemLink,
		headerText: morphedTitles[index],
		itemKey: baseTitle,
		key: baseTitle,
	}))

	let redirectTo
	const isValidTitle = baseTitles.indexOf(selectedPivotTitle || '') > -1
	if (!isValidTitle) {
		redirectTo = <Redirect to={getNewPath(pageRoute, prevPivot || defaultTitle)} />
	}

	return { selectedPivotTitle, setPivot, pivotsItems, redirectTo }
}
