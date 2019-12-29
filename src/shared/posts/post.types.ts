import { ConjecturePivots } from '../../pages/conjectures/conjectures.types'
import { GamePivots } from '../../pages/games/games.types'
import { HomePivots } from '../../pages/home/home.types'
import { StoryPivots } from '../../pages/stories/stories.types'
import { PageRoutes } from '../helpers/routes'

export type PivotRoutes = GamePivots | StoryPivots | HomePivots | ConjecturePivots

export interface IPost {
	id: number
	title: string
	content: JSX.Element
	createdTime: number
	route: PageRoutes
	pivot: PivotRoutes
}
