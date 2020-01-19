import React from 'react'
import { Divider } from '../../../components/content/divider'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { lightTextStyle, listStyle } from '../../helpers/styles'
import { IPost } from '../post.types'

export const POST_00114: IPost = {
	id: 114,
	title: 'Reflections - 01/18/2020',
	createdTime: 1579403782000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: (
		<>
			<p>
				Welcome to the new site! I had fun building it. I'd originally envisioned a blog
				with four pages, each themed over a different season of the year, with lots of color
				customizations and other things to play around with. Problem is, it didn't look very
				good... so I decided to go with a design closer to the original WordPress blog, but
				improved.
			</p>

			<p>Most notable among the improvements:</p>

			<div style={listStyle}>
				<li>Easy First/Back/Next/Latest navigation</li>
				<li>When navigating, no need for page refreshing</li>
				<li>
					Pivots allow delineation between posts and static content, like the new Links
					pages
				</li>
				<li>No more nested menus difficult to use on mobile</li>
				<li>GitHub doesn't have ads!</li>
				<li>Also, new animations~</li>
			</div>

			<p>
				More features are planned for the future—though perhaps not the near future, as I
				have other projects begging my attention.
			</p>

			<p>
				So as many have already pointed out, it's a new year and (depending on how you
				count) a new decade. Here are some brief reflections:
			</p>

			<Divider />

			<p>
				The <b>best movies</b> I've seen since Endgame were Bong Joon-Ho's <i>Parasite</i>{' '}
				and Rian Johnson's <i>Knives Out</i>. Despite tackling the same themes, they
				couldn't be more different: Parasite is as crazy as it is darkly hilarious, while
				Knives Out is just sheer fun. Check them both out.
			</p>

			<Divider />

			<p>
				The <b>best books</b> I've read over the past year have been altogether a delight:
			</p>

			<div style={listStyle}>
				<li>
					<i>The Goblin Emperor</i> by Katherine Addison. So many fantasy stories focus on
					the arduous journey from farmboy to king, or from fated prince to masterful
					emperor. How about a slice-of-life story about what comes after, and how the
					heck you're supposed to even rule an empire—especially one that you, an unwanted
					half-Goblin son and fourth in line to throne, were never <i>supposed</i> to
					rule?
				</li>
				<li>
					<i>Senline Ascends</i> by Josiah Bancroft. The tower is a bastion of culture and
					renowned delights, and you've always wanted to explore its level. Now's your
					chance—your honeymoon!—but remember the warnings: Always hold on to your lover's
					hand. People get lost in these crowds. People find new lives in the
					tower—whether they want to or not.
				</li>
				<li>
					<i>The Test</i> by Sylvan Neuvel. Short and affecting, like a well-executed
					Black Mirror episode. Go read it.
				</li>
				<li>
					<i>Orconomics</i> by J. Zachary Pike. Go in expecting a tongue-in-cheek satire
					about collateralized threat obligations and the like. Go out realizing you
					actually care about the fate of this D&D-adjacent party of would-be friends.
				</li>
				<li>
					<i>Unsouled</i> series by Will Wight. This is the most addictive videogame I've
					ever played, in book form. It's a power progression fantasy, pure and simple,
					and I love it—I just wish there were more.
				</li>
			</div>

			<Divider />

			<p>
				The <b>best Democratic candidate</b> I've donated to... ah, now this is bound to be
				a controversial topic. (I'm a bit leery of getting too political on my public blog,
				but... this is important enough to warrant it, I believe.) I spent most of 2019 not
				feeling strongly about any of the candidates. Few of my friends held strong
				opinions, and struggled to find forums online for debating the Primary among others
				who were undecided. (Look how sparsely populated the{' '}
				<a href="https://www.reddit.com/r/DemocraticPrimary/" target="_blank">
					Reddit
				</a>{' '}
				is for the Democratic Primary!) But eventually, I found a progressive{' '}
				<a
					href="https://www.currentaffairs.org/2019/04/the-case-for-free-college"
					target="_blank"
				>
					site
				</a>{' '}
				with no{' '}
				<a href="https://www.currentaffairs.org/2019/03/all-about-pete" target="_blank">
					dearth
				</a>{' '}
				<a
					href="https://www.currentaffairs.org/2019/07/andrew-yangs-curious-plans"
					target="_blank"
				>
					of
				</a>{' '}
				<a
					href="https://www.currentaffairs.org/2019/09/the-prospect-of-an-elizabeth-warren-nomination-should-be-very-worrying/"
					target="_blank"
				>
					opinions
				</a>
				. And, hell, I found their arguments{' '}
				<a
					href="https://www.currentaffairs.org/2020/01/a-biden-nomination-means-a-second-trump-term "
					target="_blank"
				>
					convincing
				</a>
				.
			</p>

			<p>
				For lack of a better of candidate, I've decided to support{' '}
				<a
					href="https://www.currentaffairs.org/2019/10/why-bernie-has-to-win"
					target="_blank"
				>
					Bernie Sanders
				</a>
				.
			</p>

			<Divider />

			<p>
				In other news, I discovered that robots can{' '}
				<a
					href="https://slatestarcodex.com/2019/03/14/gwerns-ai-generated-poetry/"
					target="_blank"
				>
					write poetry
				</a>
				! Here are{' '}
				<a
					href="https://www.gwern.net/docs/ai/poetry/2019-03-06-gpt2-poetry-1000samples.txt"
					target="_blank"
				>
					some samples
				</a>
				.
			</p>

			<p>
				I thought it would be a neat idea to, as a human, read machine learning poems and
				curate, edit, and revise them, as a sort of shortcut to writing my own poetry. I
				ended up doing something a little different. I browsed Es Devlin's randomly
				generated{' '}
				<a href="https://artsexperiments.withgoogle.com/poemportraits" target="_blank">
					Poem Portraits
				</a>{' '}
				and wrote a poem inspired by this line I found:
			</p>

			<p>
				<i>The dream of the world, the altar,</i>
			</p>

			<p>I'll leave you with the poem. Happy 2020, and happy 2020's!</p>

			<div style={{ ...lightTextStyle, textAlign: 'center', marginTop: '40px' }}>
				<div>The dream of the world, its altar and crown,</div>
				<div>floats betwixt the legs of the Overchild.</div>
				<div>Elbows on her knees, she stares without tears</div>
				<div>at her misty ball hiding people like trees</div>
				<div>inside forests inside forests inside, inside.</div>
				<div>Never can she learn nor grow within</div>
				<div>the confines of her own galactic outsize, outsize.</div>
				<div>She controls us all, in this blue-green ball</div>
				<div>-thundering lightless when she tries to mouth</div>
				<div>of what she can never know, or to who-</div>
				<div>in a fate altogether, arbitrarily bound.</div>
			</div>
		</>
	),
}
