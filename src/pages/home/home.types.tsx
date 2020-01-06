import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Posts = 'posts',
}

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about me
	[HomePivots.About, 'me'],
	// latest posts
	['latest', HomePivots.Posts],
]
