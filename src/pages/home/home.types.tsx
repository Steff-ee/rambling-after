import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Posts = 'posts',
	Resume = 'resume',
}

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about the author
	[HomePivots.About, 'the', 'author'],
	// all posts by date
	['all', HomePivots.Posts, 'by date'],
	// view my resume
	['view', 'my', HomePivots.Resume],
]
