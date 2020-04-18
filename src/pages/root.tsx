import React, { useState } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { DrumMachinePage } from '../components/drumMachine/drumMachinePage'
import { MediaProvider } from '../components/mediaProvider'
import { ClassicPageContainer } from '../modes/classic/classicPageContainer'
import { SeasonsProvider } from '../modes/seasons/seasons'
import '../scss/root.scss'
import { PageRoutes, RouteContext } from '../shared/helpers/routes'
import { OpenPostsProvider } from '../shared/posts/openPosts'
import { PivotRoutes } from '../shared/posts/post.types'
import { IsNavBarOpenContext } from '../shared/presentational/components/navBarHelpers'
import { ColorsProvider } from '../shared/presentational/hooks/useColors'
import { PageNotFound } from './pageNotFound'

export const Root: React.FunctionComponent = (): JSX.Element => {
	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
	const [prevPivots, setPrevPivots] = useState<{ [page: string]: PivotRoutes | undefined }>({})
	const setPrevPivot = (page: string, pivot: PivotRoutes): void => {
		setPrevPivots({ ...prevPivots, [page]: pivot })
	}

	return (
		<RouteContext.Provider value={{ prevPivots, setPrevPivot }}>
			<OpenPostsProvider>
				<SeasonsProvider>
					<ColorsProvider>
						<IsNavBarOpenContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
							<link
								href="https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400|Open+Sans:400,400i,600|Montserrat:400,500,600&display=swap"
								rel="stylesheet"
							/>
							<MediaProvider>
								<HashRouter>
									<Switch>
										<Redirect exact={true} from="/" to={PageRoutes.Home} />
										<Route path={`/home`} component={ClassicPageContainer} />
										<Route path={`/stories`} component={ClassicPageContainer} />
										<Route path={`/games`} component={ClassicPageContainer} />
										<Route
											path={`/conjecture`}
											component={ClassicPageContainer}
										/>
										<Route path={`/drumkit`} component={DrumMachinePage} />
										<Route component={PageNotFound} />
									</Switch>
								</HashRouter>
							</MediaProvider>
						</IsNavBarOpenContext.Provider>
					</ColorsProvider>
				</SeasonsProvider>
			</OpenPostsProvider>
		</RouteContext.Provider>
	)
}
