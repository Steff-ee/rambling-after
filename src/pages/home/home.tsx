import cartographyImg from 'Assets/images/cartography.jpg'
import React, { useContext, useEffect } from 'react'
import { SeasonsContext } from '../../modes/seasons/seasons'
import { getNextSeason } from '../../modes/seasons/seasonsHelpers'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { Page } from '../page'

export const homeTitle = 'home'

export enum HomePivots {
	About = 'about',
	Blog = 'blog',
	Recent = 'recent',
}

export const homePivotTitlePhrases: IPivotTitlePhrases = [
	// about this site
	[HomePivots.About, 'this', 'site'],
	// all blog posts
	['all', HomePivots.Blog, 'posts'],
	// only most recent
	['only', 'most', HomePivots.Recent],
]

const titleMap = makeTitleMap(homePivotTitlePhrases)

export const Home: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots } = usePivots(homePivotTitlePhrases, HomePivots.Blog, titleMap)
	const { setSeason } = useContext(SeasonsContext)
	useEffect(() => {
		setSeason(getNextSeason(0))
	}, [])

	let pageContent
	switch (pivotName) {
		case HomePivots.About:
			pageContent = (
				<>
					Dice icon used in the Nav bar courtesy of <i>my name is mud</i>. Book icon
					courtesy of <i>catyline_Icon</i>. Tea mug icon courstey of <i>y. onaldi</i>. All
					icons taken from the Noun Project.
				</>
			)
			break
		case HomePivots.Blog:
			pageContent = (
				<>
					<p>
						Avengers: Infinity War left audiences with the greatest cliffhanger of
						cinematic history, more shocking and far more interesting to speculate about
						than even any of the twists in The Empire Strikes Back. The cliffhanger: How
						could our heroes possibly undo the mass murder of half the universe? Now the
						splendid Avengers: Endgame has been released and we’ve been given our
						answers, but while some of these answers can be taken at face value, others
						may be much more elaborate, and not at all obvious after a single viewing.
					</p>
					<p>
						(1) Why didn’t Dr. Strange see any futures where he, Tony, Peter, and the
						Guardians managed to remove Thanos’s Infinity Gauntlet? Surely Strange could
						have convinced Nebula to stop Quill from interfering, or simply convinced
						her to never mention Gamora, and they could have removed the gauntlet while
						Mantis had Thanos slumbering.
					</p>
					<p>(2) Were there really no futures where Thor aimed for the head?</p>
					<p>
						(3) In the final confrontation on Earth, the Avengers had the combined might
						of Iron Man, Thor with Stormbreaker, Captain America with Mjonir, Captain
						Marvel, Wanda, all of Wakanda, and all of the Masters of the Mystic Arts.
						Why didn’t Dr. Strange see any futures where the Avengers played hot potato
						well enough to keep the Iron Gauntlet out of Thanos’s hands?
					</p>
					<p>
						Curabitur tempus venenatis tortor. Ut rutrum enim elit, interdum ornare
						lectus condimentum quis. Sed dapibus tincidunt urna a feugiat. Phasellus
						molestie commodo risus, sed semper neque convallis eu. Morbi sagittis
						malesuada dui a aliquam. Aliquam vel commodo libero, quis vehicula lectus.
						Cras tempus nulla in mauris vehicula aliquet. Nunc ac nisl neque. Aliquam
						efficitur velit ligula, sed rutrum odio molestie eu. Pellentesque id
						condimentum enim, in lacinia nisi. Etiam luctus nisl a neque placerat, non
						aliquet elit facilisis. Nam vel cursus purus.
					</p>
				</>
			)
			break
		// (TODO) Change this to All?
		case HomePivots.Recent:
		default:
			pageContent = <>BLOG POST ONE</>
	}

	return (
		<Page
			headerBackgroundImage={cartographyImg}
			titleText={homeTitle}
			Pivots={pivots}
			Content={pageContent}
			showPostsNav={pivotName === HomePivots.Blog || pivotName === HomePivots.Recent}
		/>
	)
}

export default Home
