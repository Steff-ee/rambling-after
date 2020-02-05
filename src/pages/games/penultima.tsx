import React from 'react'
import { titleTextStyle } from '../../shared/helpers/styles'
import { useListStyle } from '../../shared/helpers/useStyles'

export const Penultima: React.FunctionComponent = (): JSX.Element => {
	const listStyle = useListStyle()

	return (
		<div>
			<div style={titleTextStyle}>Penultima</div>
			<div>
				<p>Enjoy Chess, but looking for a change?</p>
				<p>
					Yearning for a game that emphasizes <i>creativity</i> more than strategy?
				</p>
				<p>In need of a 3-player game?</p>
				<p>
					Any of these questions alone have plenty of answers—formidable answers, even. If
					you want a game with even more history, depth and beauty than Chess, look no
					further than{' '}
					<a href={'https://en.wikipedia.org/wiki/Go_(game)'} target="_blank">
						Go
					</a>
					. If you want to flex your creativity, then I recommend assuming the mantel of{' '}
					<a href={'/games/posts/100'}>Dungeon Master</a>,{' '}
					<a
						href={'https://boardgamegeek.com/boardgame/178900/codenames'}
						target="_blank"
					>
						spy master
					</a>
					, or{' '}
					<a
						href={'https://boardgamegeek.com/boardgame/181304/mysterium'}
						target="_blank"
					>
						dream master
					</a>
					. And if you just want a 3 player game,{' '}
					<a href={'https://boardgamegeek.com/boardgame/148228/splendor'} target="_blank">
						take
					</a>{' '}
					<a
						href={
							'https://boardgamegeek.com/boardgame/31627/ticket-ride-nordic-countries'
						}
						target="_blank"
					>
						your
					</a>{' '}
					<a
						href={'https://boardgamegeek.com/boardgame/232832/century-golem-edition'}
						target="_blank"
					>
						pick
					</a>
					.
				</p>
				<p>
					But if you want a single game that can fulfill all three, I've got an answer.
					Better yet, it won't cost you a dime—that is, if you've already got access to a
					chess board.
				</p>
				<p>
					Penultima is a game whose exact origins I don't remember. What I remember is
					playing it afterschool with a friend and math teacher, happily experimenting
					with new ideas, not looking for new ways to win, but looking for a laugh.
				</p>
				<p>
					The idea of the game is simple: Two people play a game of Chess, but before they
					start, a third person makes a modification to the rules... and{' '}
					<i>doesn't tell anyone</i>. The third person, who presides over the match and is
					thus referred to as the president, can make any modification they want (though
					it helps to not make things too complicated). The two combatants will, in
					addition to trying to checkmate one another, try to deduce exactly which rules
					were changed and in what way, in order to gain an edge over their opponent.
				</p>
				<p>What exactly does this look like?</p>
				<p>Any time a combatant makes a move, the president can do one of three things:</p>
				<div style={listStyle}>
					<li>Modify the board (by moving pieces, removing them, or anything else)</li>
					<li>Declare a move to be illegal</li>
					<li>Do nothing</li>
				</div>
				<p>
					One important addendum: In the case of illegal moves, the person who made the
					illegal move is penalized by play proceeding to their opponent. An exception is
					made when the person who made the illegal move is in check (which effectively
					frees them to experiment (up until they, deliberately or not, make a legal
					move)).
				</p>
				<p>And that's it for the rules!</p>
				<p>
					The goal of the combatants should be to enjoy the wacky surprises and not get
					too frustrated with the randomness that will ensue.
				</p>
				<p>
					The president's goal is whatever they want it to be, but here's a few
					possiblities:
				</p>
				<div style={listStyle}>
					<li>
						Devise rules that meaningfully impact gameplay without imbalancing the game
						so much it becomes a short, swingy slaughterfest.
					</li>
					<li>Devise rules that are simple, elegant, and yet difficult to deduce.</li>
					<li>
						Devise rules that test your own memory skills (for example, think of{' '}
						<i>mines</i>).
					</li>
				</div>
				<p>
					Also, as the president, don't be afraid to give hints (simply giving your rule a
					name can be a fun way to get your players thinking in the right direction,
					especially those rules that only affect particular pieces).
				</p>
				<p>Please give it a shot—I don't often enough get a chance to play myself.</p>
				<p>Good luck, and of course, have fun!</p>
			</div>
		</div>
	)
}
