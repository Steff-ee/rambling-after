import { initializeIcons } from '@uifabric/icons'
import { loadTheme } from '@uifabric/styling'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { MediaProvider } from '../components/mediaProvider'
import { classicColors } from '../modes/classic/classicConstants'
import { Modes, ModesContext } from '../modes/modeSwitcher'
import { SeasonsProvider } from '../modes/seasons/seasons'
import { PageRoutes } from '../shared/helpers/routes'
import { IsNavBarOpenContext } from '../shared/presentational/components/navBarHelpers'
import {
	ColorsContext,
	defaultColorsContext,
	IColorsContext,
} from '../shared/presentational/hooks/useColors'
import { Conjecture } from './conjectures/conjectures'
import { Games } from './games/games'
import { Home } from './home/home'
import './root.css'
import { Stories } from './stories/stories'

initializeIcons()

export const Root: React.FunctionComponent = (): JSX.Element => {
	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
	const [mode, setMode] = useState<Modes>(Modes.Classic)

	return (
		<ModesContext.Provider value={{ mode, setMode }}>
			<SeasonsProvider>
				{(colors: IColorsContext): JSX.Element => {
					if (mode === Modes.Classic) {
						colors = { ...defaultColorsContext, ...classicColors }
					}

					useEffect(() => {
						loadTheme({
							semanticColors: {
								inputBackgroundChecked: colors.secondary,
							},
						})
					}, [])

					return (
						<ColorsContext.Provider value={colors}>
							<IsNavBarOpenContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
								<link
									href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Comfortaa|Muli|Montserrat&display=swap"
									rel="stylesheet"
								/>
								<MediaProvider>
									<BrowserRouter>
										<Switch>
											<Redirect exact={true} from="/" to={PageRoutes.Home} />
											<Route path={PageRoutes.Home} component={Home} />
											<Route path={PageRoutes.Stories} component={Stories} />
											<Route path={PageRoutes.Games} component={Games} />
											<Route
												path={PageRoutes.Conjecture}
												component={Conjecture}
											/>
										</Switch>
									</BrowserRouter>
								</MediaProvider>
							</IsNavBarOpenContext.Provider>
						</ColorsContext.Provider>
					)
				}}
			</SeasonsProvider>
		</ModesContext.Provider>
	)
}
