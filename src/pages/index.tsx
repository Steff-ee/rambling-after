import * as React from 'react'
import { Games } from './games/games'
import { Home } from './home/home'
import { MathScience } from './mathScience/mathScience'
import { Stories } from './stories/stories'

export enum PageRoutes {
	Home = 'home',
	Stories = 'stories',
	Games = 'games',
	MathScience = 'math-science',
}

const Root: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<Home />
			<Stories />
			<Games />
			<MathScience />
		</>
	)
}

export default Root
