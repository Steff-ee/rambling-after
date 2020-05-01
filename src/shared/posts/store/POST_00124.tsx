import React from 'react'
import { ContentImage } from '../../../components/content/contentImage'
import { GamePivots } from '../../../pages/games/games.types'
import { Maskman626 } from '../../helpers/artists'
import { PageRoutes } from '../../helpers/routes'
import { IPost } from '../post.types'

const tearsInRainSrc =
	'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/769a8335-123e-4b2b-ab0f-839dac92c16b/dbnozxb-5110a27b-f28e-48ae-9e82-9a832a2f8ba8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzY5YTgzMzUtMTIzZS00YjJiLWFiMGYtODM5ZGFjOTJjMTZiXC9kYm5venhiLTUxMTBhMjdiLWYyOGUtNDhhZS05ZTgyLTlhODMyYTJmOGJhOC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.b90GPDWEoZ8aGI5-xY9aI_Msml-JJZauD82NIBHRUtU'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<p>
				After Google launched its game-streaming service Stadia in November of last year,
				its multiplayer offerings were described, at least by{' '}
				<a
					href="https://www.forbes.com/sites/barrycollins/2020/04/27/social-distancing-is-over-on-google-stadia-as-free-tier-rescues-multiplayer-modes"
					target="_blank"
				>
					some
				</a>
				, as oxymoronic, since few people were playing. Then three weeks ago, Google
				announced a two month free trial, as well as two months free to all Stadi Pro
				subscribers, and their Destiny 2 player count quintupled. There remain questions
				about the viability of the product, however: What benefit does streaming games
				provide? Especially in the realm of multiplayer games, where lag is a serious
				hindrance to competitive play, it can be hard to imagine what would compel players
				to stick with the service after their free trials expire.
			</p>
			<p>
				This wouldn’t be the first time Google has invested into a product that eventually
				faded like tears in the rain.
			</p>

			<ContentImage
				src={tearsInRainSrc}
				caption={
					<>
						{`It was either this, or a Dust in the Wind reference. Credit: `}
						<a href={Maskman626.artistLink} target="_blank">
							{Maskman626.artistName}
						</a>
					</>
				}
			/>

			<p>
				There’s a certain schadenfreudenistic pleasure to perusing the{' '}
				<a href="https://killedbygoogle.com/" target="_blank">
					Google Graveyard
				</a>
				, but as many failures as Google may have had, they’ve had as many successes. It’s
				fascinating to me, ruminating on what factors drove Google Maps, Mail, and Drive to
				become permanent facets of my life, but Google Plus a fleeting memory. I predict
				Stadia will number among Google’s successes. Before I can explain my vision for
				Stada’s potential, however, I need to discuss another area of gaming that people
				have questioned since its inception.
			</p>
			<p>Esports.</p>
			<p>
				The highs of Esports can be{' '}
				<a
					href="https://www.engadget.com/2019-08-25-dota-2-the-international-2019-win-sets-records.html"
					target="_blank"
				>
					exhilarating
				</a>
				, but it’s{' '}
				<a
					href="https://www.veebit.com/battling-in-the-dark-how-esports-struggles-to-build-true-community-and-human-engagement/"
					target="_blank"
				>
					unknown
				</a>{' '}
				how high its highs can go. Unlike traditional sports, videogames are geared towards
				players, not{' '}
				<a href="https://www.matthewball.vc/all/esportsrisks" target="_blank">
					spectators
				</a>
				—and videogames’ greatest strength as a medium, that of interactivity, has yet to be
				fully leveraged in Esports.
			</p>
			<p>
				Some games allow for more audience interaction than others. Take{' '}
				<a
					href="https://www.twitch.tv/directory/game/Marbles%20On%20Stream"
					target="_blank"
				>
					Marbles
				</a>
				, for example, which isn’t even really a game. It’s an experience of watching random
				marbles race down random, silly, and sometimes labyrinthe obstacle courses, and root
				for specific marbles to win—its genius being that each marble represents a single
				viewer in the Twitch audience (or the streamer themself). I’ve participated in
				several races myself, and while the appeal may not last long, it’s surprisingly easy
				to get invested in the senseless, vacuous, and sometimes hilarious trajectories of
				these artificially simulated, random marbles.
			</p>
			<ContentImage
				src={
					'https://steamcdn-a.akamaihd.net/steam/apps/1170970/ss_d23e15f420483a1177c5fb1c4e18b34cf15d3daa.1920x1080.jpg?t=1587489220'
				}
				caption={'Marbles.'}
			/>
			<p>
				More important than the marbles themselves, and whether one’s marble wins or loses,
				is whether one’s marble leads a viewer to interaction with the streamer. Every
				marble, and every Twitch chat message, is an opportunity for the streamer to
				recognize a viewer’s existence. This fleeting moments of contact bring sparks of joy
				to viewers who idolize the streamer and can seem to validate their{' '}
				<a href="https://www.youtube.com/watch?v=3IG0Y63LkDM" target="_blank">
					parasocial relationships
				</a>
				. For another example, take Day9’s{' '}
				<a href="https://www.youtube.com/watch?v=8W-JepY7Dbg" target="_blank">
					Gauntlet
				</a>
				, in which subscribers signed up to be murdered, labeled cowards, or labeled heroes
				by a farcical, randomly generated text adventure.
			</p>
			<p>
				These fleeting moments of connection are of course no replacement for real life
				connections—but I welcome experiments like the Gauntlet and Marbles, which make
				these parasocial moments more prominent. And this brings me back to Stadia.
			</p>
			<p>
				While streaming games does introduce lag, it also introduces the ability to scale:
				Personal computers can’t handle Fortnite or Apex maps populated by thousands of
				players, but Google’s servers will. Imagine a Battle Royale game in which the
				maximum team size was not three, or sixteen, but a couple hundred, broken up into a
				dozen squads, together led by a celebrated general. The generals each would be
				streamers of some renown; the squad leaders their highest paying subscribers; the
				foot soldiers their other randomly selected viewers, each vying for a chance at
				parasocial contact. Maybe it’ll be <i>this</i> viewer that spots the enemy sniper
				about to assassinate the general. Maybe it’ll be <i>that</i> viewer who heroically
				jumps on a grenade to save their leader. The possibilities are endless—but only
				possible with Stadia.
			</p>
		</>
	)
}

export const POST_00124: IPost = {
	id: 124,
	title: 'Stadia Royale',
	subtitle: `Answering what makes Stadia special and where does Esports go from here?`,
	createdTime: 1588376923000,
	route: PageRoutes.Games,
	pivot: GamePivots.Posts,
	content: <PostContent />,
}
