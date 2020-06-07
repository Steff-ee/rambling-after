import { useContext } from 'react'
import { getConjecturePageBackground } from '../../pages/conjectures/conjecture.helpers'
import { getGamePageBackground } from '../../pages/games/game.helpers'
import { getHomePageBackground } from '../../pages/home/home.helpers'
import { getStoriesPageBackground } from '../../pages/stories/stories.helpers'
import { PageRoutes } from '../../shared/helpers/routes'
import { classicBackgroundTextureStyle } from '../../shared/helpers/styles'
import { useColors } from '../../shared/presentational/hooks/useColors'
import { SeasonsContext } from './seasons'
import { Seasons } from './seasonsHelpers'

// tslint:disable:typedef
export const useSeasonalBackgroundProps = (page: string | undefined) => {
	const { season } = useContext(SeasonsContext)
	const { background: backgroundColor } = useColors()

	let backgroundStyle: React.CSSProperties
	if (season === Seasons.None) {
		backgroundStyle = classicBackgroundTextureStyle
	} else {
		backgroundStyle = {
			backgroundColor,
			// this prevents the nav bar bouncing on scroll. Unknown why.
			backgroundImage: `url()`,
			backgroundRepeat: 'repeat',
			backgroundPosition: 'right top',
		}
	}

	switch (page) {
		case PageRoutes.Stories:
			return {
				...getStoriesPageBackground(),
				backgroundStyle,
			}

		case PageRoutes.Games:
			return {
				...getGamePageBackground(),
				backgroundStyle,
			}

		case PageRoutes.Conjecture:
			return {
				...getConjecturePageBackground(),
				backgroundStyle,
			}

		case PageRoutes.Home:
		default:
			return {
				...getHomePageBackground(),
				backgroundStyle,
			}
	}
}
