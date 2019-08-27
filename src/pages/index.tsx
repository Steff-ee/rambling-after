import * as React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

export enum PageRoutes {
	Home = '/home',
	Stories = '/stories',
	Games = '/games',
	MathScience = '/math-science',
}

const Root: React.FunctionComponent = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact={true} from="/" to={PageRoutes.Home} />
				{/* <Route path={PageRoutes.Home} component={Home} />
				<Route path={PageRoutes.Stories} component={Stories} />
				<Route path={PageRoutes.Games} component={Games} />
				<Route path={PageRoutes.MathScience} component={MathScience} /> */}
			</Switch>
		</BrowserRouter>
	)
}

export default Root
