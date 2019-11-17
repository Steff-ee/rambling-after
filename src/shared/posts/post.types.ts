import { PageRoutes } from '../helpers/routes'

export interface IPost {
	id: number
	title: string
	content: JSX.Element
	createdTime: number
	route: PageRoutes
}
