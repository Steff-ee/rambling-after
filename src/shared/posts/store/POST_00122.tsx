import sellNewsImg from 'Assets/images/sell_news.jpg'
import React from 'react'
import { ContentImage } from '../../../components/content/contentImage'
import { Divider } from '../../../components/content/divider'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { useListStyle } from '../../helpers/useStyles'
import { IPost } from '../post.types'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	const listStyle = useListStyle()

	return (
		<>
			<p>Social distancing!</p>
			<p>It bears repeating.</p>

			<p>
				Even if you don't have symptoms, you might be carrying Covid-19 and can spread it to
				others. Me and my wife have gone on walks and seen others not being careful, not
				maintaining six-foot separation zones. It's dismaying to see.
			</p>

			<p>
				We've been working from home since March 3rd. It's been weird, but I'm grateful for
				the increased amount of connection I've had with friends across the country.
			</p>

			<Divider />

			<p>Some improvements to the blog:</p>

			<div style={listStyle}>
				<li>Better typography</li>
				<li>Added subtitles to each post</li>
				<li>
					Added a "Change theme" command. "Winter" is currently the only other theme
					available; I'll release other seasons once I've picked out good color palettes
				</li>
				<li>
					Made the currently selected route more legible by replacing icon opacity with
					icon underlining
				</li>
			</div>

			<Divider />

			<p>
				Don't day trade unless you have a{' '}
				<a
					href="https://www.reddit.com/r/thewallstreet/comments/bscoev/trading_methodologies_how_to_make_money_and_not/"
					target="_blank"
				>
					trading methodology
				</a>{' '}
				that you abide by strictly. If instead you trade by informal guidelines like "Buy
				low, sell high" or "Sell the news", you're liable to be trapped by the whims of the
				market or your own fallible psychology.
			</p>

			<ContentImage src={sellNewsImg} maxHeight={''} />

			<p>If you are going to day trade, only trade what you can afford to lose. Take care.</p>
		</>
	)
}

export const POST_00122: IPost = {
	id: 114,
	title: 'Reflections - 03/29/2020',
	subtitle: `Blog upgrades and stock market tribulations.`,
	createdTime: 1585510902000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: <PostContent />,
}
