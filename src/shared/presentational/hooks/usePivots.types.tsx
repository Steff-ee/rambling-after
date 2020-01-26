import { IPivotItem, IPivotsProps } from '../../../components/pivots/pivots.types'
import { PivotRoutes } from '../../posts/post.types'

// when showing a full title,
// 		each string corresponds to one pivot, together making a phrase
// when regularly showing one title per pivot
// 		the ith string will be used as the title, where i is the index of IPivotTitle among other IPivotTitles
export type IPivotTitlePhrases = string[][]

export interface ITitleMap {
	[title: string]: number | undefined
}

export interface IUsePivotProps {
	titlePhrases: IPivotTitlePhrases
	defaultTitle: PivotRoutes
	titleMap: ITitleMap
	skip?: boolean
}

export interface IUsePivotKeyReturns {
	selectedPivotTitle: PivotRoutes | undefined
	setPivot: (item: IPivotItem) => void
	pivotsItems: IPivotsProps['pivotItems']
	redirectPath?: string
}
