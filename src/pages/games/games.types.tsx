import { IPivotTitlePhrases } from '../../shared/presentational/hooks/usePivots.types'

export const gamesTitle = 'games'

export enum GamePivots {
	Posts = 'posts',
	Games = 'games',
}

export const gamePivotTitlePhrases: IPivotTitlePhrases = [
	// posts on gaming
	[GamePivots.Posts, 'on gaming'],
	// homebrew games
	['homebrew', GamePivots.Games],
]
