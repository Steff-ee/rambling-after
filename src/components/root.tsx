import * as React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './home/home'

export enum PageRoutes {
	Home = '/home',
	Stories = '/stories',
	Games = '/games',
	MathScience = '/math-science',
}

export const Root: React.FunctionComponent = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact={true} from="/" to={PageRoutes.Home} />
				<Route path={PageRoutes.Home} component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
