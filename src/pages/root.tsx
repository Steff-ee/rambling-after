import { initializeIcons } from '@uifabric/icons'
import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { PageRoutes } from '../shared/helpers/routes'
import { IsNavBarOpenContext } from '../shared/presentational/components/navBarHelpers'
import { SeasonsProvider } from '../shared/presentational/seasons/seasons'
import { Games } from './games/games'
import { Home } from './home/home'
import { MathScience } from './mathScience/mathScience'
import { Stories } from './stories/stories'

initializeIcons()

export const Root: React.FunctionComponent = (): JSX.Element => {
	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)

	return (
		<SeasonsProvider>
			<IsNavBarOpenContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
				<link
					href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Comfortaa|Muli&display=swap"
					rel="stylesheet"
				/>
				<BrowserRouter>
					<Switch>
						<Redirect exact={true} from="/" to={PageRoutes.Home} />
						<Route path={PageRoutes.Home} component={Home} />
						<Route path={PageRoutes.Stories} component={Stories} />
						<Route path={PageRoutes.Games} component={Games} />
						<Route path={PageRoutes.MathScience} component={MathScience} />
					</Switch>
				</BrowserRouter>
			</IsNavBarOpenContext.Provider>
		</SeasonsProvider>
	)
}
