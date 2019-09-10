import * as React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { PageRoutes } from '../shared/helpers/routes'
import { NavBar } from '../shared/presentational/components/navBar'
import { Games } from './games/games'
import { Home } from './home/home'
import { MathScience } from './mathScience/mathScience'
import { Stories } from './stories/stories'

export const Root: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Switch>
					<Redirect exact={true} from="/" to={PageRoutes.Home} />
					<Route path={PageRoutes.Home} component={Home} />
					<Route path={PageRoutes.Stories} component={Stories} />
					<Route path={PageRoutes.Games} component={Games} />
					<Route path={PageRoutes.MathScience} component={MathScience} />
				</Switch>
			</BrowserRouter>
		</>
	)
}
