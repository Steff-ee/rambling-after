import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const conjectureTitle = 'conjecture'

export enum ConjecturePivots {
	Posts = 'posts',
	Links = 'links',
}

export const conjecturePivotTitlePhrases: IPivotTitlePhrases = [
	// posts to persuade
	[ConjecturePivots.Posts, 'to persuade'],
	// interesting links
	['interesting', ConjecturePivots.Links],
]
