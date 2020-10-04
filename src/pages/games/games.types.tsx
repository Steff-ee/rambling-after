import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const gamesTitle = 'games'

export enum GamePivots {
	Posts = 'posts',
	Games = 'games',
	Links = 'links',
}

export const gamePivotTitlePhrases: IPivotTitlePhrases = [
	// posts about gaming
	[GamePivots.Posts, 'about', 'gaming'],
	// homebrew games to try
	['homebrew', GamePivots.Games, 'to try'],
	// some gaming links
	['some', 'gaming', GamePivots.Links],
]
