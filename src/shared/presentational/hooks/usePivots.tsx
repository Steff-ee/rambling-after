import { IPivotItemProps, IPivotProps, PivotItem } from 'office-ui-fabric-react/lib'
import React, { useState } from 'react'
import { useTextMorph } from './useTextMorph'

// (TODO) do an efficiency pass (use memoization)
// (TODO) add documentation

export interface IUsePivotKeyReturns {
	pivotName: string | undefined
	pivots: IPivotItemProps[]
	setPivot: IPivotProps['onLinkClick']
}

// when showing a full title,
// 		each string corresponds to one pivot, together making a phrase
// when regularly showing one title per pivot
// 		the ith string will be used as the title, where i is the index of IPivotTitle among other IPivotTitles
export type IPivotTitlePhrases = string[][]

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

export const usePivots = (
	titlePhrases: IPivotTitlePhrases,
	defaultTitle: string,
	titleMap: ITitleMap
): IUsePivotKeyReturns => {
	const [selectedPivotTitle, setSelectedPivotTitle] = useState<string | undefined>(defaultTitle)
	const [hoverPivotTitle, setHoverPivotTitle] = useState<string | undefined>(undefined)

	const setPivot = (item?: PivotItem): void => {
		const newSelectedKey = item && item.props.itemKey
		setSelectedPivotTitle(newSelectedKey)
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
			titles = titlePhrases[titlePhraseIndex].map((title) => title.toLowerCase())
		}
	}

	const bypassIfNoHover = !hoverPivotTitle
	titles = useTextMorph(baseTitles, titles, bypassIfNoHover)

	const pivots: IPivotItemProps[] = titles.map((title) => ({
		onRenderItemLink,
		headerText: title,
		itemKey: title,
		key: title,
	}))

	return { pivotName: selectedPivotTitle, pivots, setPivot }
}
