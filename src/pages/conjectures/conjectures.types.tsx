import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const conjectureTitle = 'conjecture'

export enum ConjecturePivots {
	Posts = 'posts',
	Code = 'code',
	Links = 'links',
}

export const conjecturePivotTitlePhrases: IPivotTitlePhrases = [
	// posts positing conjecture
	[ConjecturePivots.Posts, 'arguing', conjectureTitle],
	// my code hub
	['my', ConjecturePivots.Code, 'hub'],
	// some interesting links
	['some', 'interesting', ConjecturePivots.Links],
]
