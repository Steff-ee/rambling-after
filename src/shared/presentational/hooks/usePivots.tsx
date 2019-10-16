import {
	IPivotItemProps,
	IPivotProps,
	IPivotStyles,
	Pivot,
	PivotItem,
	PivotLinkSize,
} from 'office-ui-fabric-react/lib'
import React, { useState } from 'react'
import { useTextMorph } from './useTextMorph'

// (TODO) do an efficiency pass (use memoization)
// (TODO) add documentation

export interface IUsePivotKeyReturns {
	pivotName: string | undefined
	pivots: JSX.Element
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

const styles: Partial<IPivotStyles> = {
	text: [
		{
			fontFamily: 'Comfortaa',
			width: '96px',
		},
	],
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
			titles = titlePhrases[titlePhraseIndex]
		}
	}

	const bypassIfNoHover = !hoverPivotTitle
	const morphedTitles = useTextMorph(baseTitles, titles, bypassIfNoHover)

	const pivotsItems: IPivotItemProps[] = baseTitles.map((baseTitle, index) => ({
		onRenderItemLink,
		headerText: morphedTitles[index],
		itemKey: baseTitle,
		key: baseTitle,
	}))

	const pivots = (
		<Pivot
			selectedKey={selectedPivotTitle}
			onLinkClick={setPivot}
			styles={styles}
			linkSize={PivotLinkSize.large}
		>
			{pivotsItems.map((pivotProps) => (
				<PivotItem {...pivotProps} />
			))}
		</Pivot>
	)

	return { pivotName: selectedPivotTitle, pivots, setPivot }
}
