import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Blog = 'blog',
	Recent = 'recent',
}

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about this site
	[HomePivots.About, 'this', 'site'],
	// all blog posts
	['all', HomePivots.Blog, 'posts'],
	// only most recent
	['only', 'most', HomePivots.Recent],
]
