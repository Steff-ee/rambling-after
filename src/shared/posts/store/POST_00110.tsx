import React from 'react'
import { ContentImage } from '../../../components/content/contentImage'
import { Table } from '../../../components/table'
import { ConjecturePivots } from '../../../pages/conjectures/conjectures.types'
import { PageRoutes } from '../../helpers/routes'
import { IPost } from '../post.types'

export const POST_00110: IPost = {
	id: 110,
	title: 'Which is the best voting scheme?',
	subtitle: `The best way to vote might be a voting scheme that's unintuitively restrictive.`,
	createdTime: 1519905600000,
	route: PageRoutes.Conjecture,
	pivot: ConjecturePivots.Posts,
	content: (
		<>
			<p>
				To become the most powerful human on the planet, you really only need the support of
				about 7% of Americans.
			</p>
			<p>
				{' '}
				I have a friend who filled out his entire 2016 general election ballot except for
				one spot, right at the very top: the spot for President of the United States. It
				wasn’t that he felt both candidates were equal in measure, and it wasn’t that he
				didn’t want to. He just couldn’t bear to. When it came time to bubble in the circle
				next to “Hillary Clinton,” he could feel a sickly unease growing in his gut.
				Endorsing either Clinton or Trump was too loathsome a prospect for him to contend.
				Anyone he might have voted for—including the likes of both Bernie Sanders and John
				Kasich—wasn’t on the ballot. But why was that? And why were the two most{' '}
				<a
					href="https://fivethirtyeight.com/features/americans-distaste-for-both-trump-and-clinton-is-record-breaking/"
					target="_blank"
					rel="noopener"
				>
					historically
				</a>{' '}
				<a
					href="http://news.gallup.com/poll/197231/trump-clinton-finish-historically-poor-images.aspx"
					target="_blank"
					rel="noopener"
				>
					unliked
				</a>{' '}
				candidates of any modern American presidential election the only two with a
				realistic chance of winning?
			</p>
			<p>
				The answer lies with the American voting system, which only allows one vote for one
				candidate per ballot—a system known as Plurality, or First-past-the-post. When
				you’ve only got the one vote, you can’t waste it, and when third-placing parties are
				seen as a waste of a vote, voters will flock to the{' '}
				<a
					href="https://en.wikipedia.org/wiki/Duverger%27s_law"
					target="_blank"
					rel="noopener"
				>
					top two
				</a>{' '}
				parties. This is where our 7% figure starts to come into play: To win the
				presidency, a candidate needs only win the primary of whichever party is stronger
				that year. Once they’ve won the primary, the infernal machine of partisanship will
				starts its engines, herding voters who despise the opposition (because the{' '}
				<i>other</i> party is obviously full of ignorance, incompetence, or sheer insanity).
				The general election narrows the field of two candidates down to one; it’s the
				primaries that narrow from two-hundred and fifty million Americans down to two.
				Thus, a politician like Donald Trump could find success with his 44.9% of the
				Republican primary’s votes, of which an embarrassing 14.8% of eligible voters
				participated in, for a grand product of less than 7%.
			</p>
			<p>
				Admittedly, this estimation glosses over the influence of swing voters, but the fact
				remains that the proportion of key voters is far too low—all thanks to Plurality
				voting, the worst among <i>many </i>options. There’s{' '}
				<a href="https://en.wikipedia.org/wiki/Borda_count" target="_blank" rel="noopener">
					Borda count
				</a>
				,{' '}
				<a
					href="https://en.wikipedia.org/wiki/Nanson%27s_method"
					target="_blank"
					rel="noopener"
				>
					Nanson’s method
				</a>
				,{' '}
				<a
					href="https://en.wikipedia.org/wiki/Majority_judgment"
					target="_blank"
					rel="noopener"
				>
					majority judgement
				</a>
				,{' '}
				<a
					href="https://en.wikipedia.org/wiki/Two-round_system"
					target="_blank"
					rel="noopener"
				>
					two-round systems
				</a>
				, and a{' '}
				<a
					href="https://plato.stanford.edu/entries/voting-methods/"
					target="_blank"
					rel="noopener"
				>
					myriad
				</a>{' '}
				other schemes, each with its idiosyncratic upsides, downsides, staunch supporters,
				and vociferous critics. This article briefly covers the ones I think most important
				to know, while arguing for the one I think best. I hope I can convince you, but
				anything I argue unconvincingly, I assure you, will already have articles written on
				it for both sides. Google (or Google Scholar) is your friend!
			</p>
			<ContentImage
				src="https://i.cbc.ca/1.4540294.1518837685!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/black-panther-movie.jpg"
				caption="Forget voting, trial by combat's where it's at."
			/>{' '}
			<p>
				What should a voting scheme ideally achieve? Roughly speaking, a perfect voting
				scheme would elect the candidate most preferred by the most people. But there are
				two major problems with this: One, rarely do “most people” prefer the “most
				preferred” candidate—and if that sounds confusing, don’t worry, I’ve got a
				superhero-centric example coming up to explain it. And two—the bigger problem—most
				people lie.
			</p>
			<Table
				headers={['% of voters', 'True candidate preferences']}
				data={[
					['55%', 'Captain America (10/10) > Spiderman (7/10) > Iron Man (1/10)'],
					['45%', 'Iron Man (9/10) > Spiderman (7/10) > Captain America (2/10)'],
				]}
			/>
			<p>
				In the above example, Captain America and Iron Man are people’s top choices, but
				Spiderman is everyone’s second favorite, universally ranked at a
				respectable-but-not-superb 7 out of 10. Who should win the election, Cap’ or Spidey?
				I would say Spidey. Others might say Cap’. But Spidey should at the very least have
				a <i>shot</i> at winning—and in Plurality voting, he sure as shots doesn’t.{' '}
			</p>
			<p>
				So that’s problem number one: A good voting scheme needs to consider more than just
				voters’ top choices if compromise choices like Spiderman (preferred by “most
				people”) are to ever have a chance. On the other hand, a voting scheme that only
				ever elects compromise choices would be just as bad; if Spiderman had been ranked at
				a universal 4/10 instead of 7/10, we would want Captain America (the “most
				preferred” candidate) to win instead.
			</p>
			<p>
				Then why not just let voters rate all candidates on a scale from 0 to 10 and elect
				the candidate with the highest total number of points? That’s{' '}
				<a href="https://en.wikipedia.org/wiki/Range_voting" target="_blank" rel="noopener">
					Range voting
				</a>{' '}
				(also known as Score voting), and that’s where problem number two comes in: People
				lie.
			</p>
			<ContentImage src="https://ramblingafter.files.wordpress.com/2018/03/range-voting-ballot.png?w=960" />
			<p>
				I could give Iron Man a 9 and Spidey a 7 to reflect my true preferences. Or I could
				give both of them a 10 to boost their chances of winning relative to Captain
				America, who I (in this hypothetical) loathe. This kind of behavior is known as
				“tactical voting” and is on full display in Plurality voting: Many liberals, for
				instance, vote Democrat instead of for more progressive parties because they know
				only Democrats and Republicans stand a chance of winning. This creates a feedback
				loop whereby the more people who tactically vote, the stronger the primary two
				parties become, the more people tactically vote, and that’s how a freedom of
				two-hundred and fifty million choices becomes constricted down to two. With regards
				to Range voting, this means most people will give either a 0 or a 10 to all
				candidates (essentially reducing the scheme to a needlessly complex version of one
				called Approval voting).
			</p>
			<p>
				{' '}
				If people can’t be trusted to rate candidates sincerely, what if they were forced to
				rank them? Many voting schemes are built off of ordered rankings, and I’ll cover two
				of the most commonly discussed ones: Condorcet, and Instant-Runoff Voting (IRV).
			</p>
			<Table
				headers={['% of voters', 'True candidate preferences']}
				data={[
					['46%', 'Black Widow > Hawkeye > Nick Fury'],
					['9%', 'Hawkeye > Black Widow > Nick Fury'],
					['45%', 'Nick Fury > Hawkeye > Black Widow'],
				]}
			/>
			<p>
				<a
					href="https://en.wikipedia.org/wiki/Condorcet_method"
					target="_blank"
					rel="noopener"
				>
					Condorcet
				</a>{' '}
				takes the idea of Round-Robin tournaments and applies it to voting, positing that
				the best candidate is the one that would win against the most other candidates in
				imaginary head-to-head contests. In the example above, 55% of voters prefer Black
				Widow to Nick Fury, so she gets one “win” there. The same 55% of voters prefer
				Hawkeye to Nick Fury, so he gets one win there, and 54% of voters prefer Hawkeye to
				Black Widow, so he gets a second win:
			</p>
			<Table
				data={[
					['Hawkeye > Nick Fury'],
					['Hawkeye > Black Widow'],
					['Black Widow > Nick Fury'],
				]}
			/>
			<p>
				And Hawkeye wins the election. That’s good news for our humble archer, but there’s a
				major drawback: Moderates{' '}
				<a
					href="http://www.fairvote.org/why-the-condorcet-criterion-is-less-important-than-it-seems"
					target="_blank"
					rel="noopener"
				>
					always
				</a>{' '}
				win Condorcet competitions. Taking us back to the real world, for a moment, who
				would a Hillary Clinton hater rank higher between her or some random Joe Schmoe
				moderate? And who would a Donald Trump hater rank higher between him and the Joe
				Schmoe? Joe Schmoe will win by virtue of being the least hated, even if he is bereft
				of virtues himself.
			</p>
			<p>
				Also, Spidey would stand no chance of winning against Cap’ in a Condorcet method
				either. And that’s not cool.
			</p>
			<ContentImage
				src="http://www.syfy.fr/sites/default/files/coversmb2048.jpg"
				caption="Alright, alright, I admit it. I'm biased. Spiderman's totally my favorite."
			/>{' '}
			<p>
				<a
					href="https://en.wikipedia.org/wiki/Instant-runoff_voting"
					target="_blank"
					rel="noopener"
				>
					Instant-Runoff Voting
				</a>{' '}
				proceeds by eliminating the least favorite candidate, then doing a recount with that
				candidate struck from all ballots, then eliminating the next least favorite
				candidate, recounting, and so on until only one candidate remains. This scheme is
				used in various provinces and municipalities around the world, and most notably
				elects Australia’s House of Representatives. And though it’s better than Plurality,
				it still puts too much emphasis on first place votes, and thus still encourages the
				same kind of{' '}
				<a href="http://rangevoting.org/IRVcs.html" target="_blank" rel="noopener">
					tactical voting
				</a>{' '}
				that leads to two candidate dominance.
			</p>
			<Table
				headers={['% of voters', 'True candidate preferences']}
				data={[
					['34', 'Hulk > Star-Lord > Thor'],
					['17', 'Star-Lord > Hulk > Thor'],
					['49', 'Thor > Star-Lord > Hulk'],
				]}
			/>
			<p>
				In this example, Star-Lord is eliminated first. The 17% of ballots that ranked him
				first now support Hulk as first, giving Hulk a 51% majority and a win over
				Thor—despite the fact that 66% of voters would have preferred Star-Lord, and are now
				incentivized to tactically vote for him instead of Thor.{' '}
			</p>
			<p>Also, Spidey still doesn’t stand a shot of winning. </p>
			<p>
				As it turns out, any preferential ranking system will lead to tactical voting, as
				proven by the difficult-to-pronounce{' '}
				<a
					href="https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem"
					target="_blank"
					rel="noopener"
				>
					Gibbard–Satterthwaite theorem
				</a>
				. But if ranking systems are all flawed, what’s the alternative?
			</p>
			<p>
				<a
					href="https://electology.org/blog/ten-critiques-and-defenses-approval-voting"
					target="_blank"
					rel="noopener"
				>
					Approval
				</a>{' '}
				<a
					href="https://electology.org/approval-voting-versus-irv"
					target="_blank"
					rel="noopener"
				>
					voting
				</a>
				.
			</p>
			<ContentImage src="https://ramblingafter.files.wordpress.com/2018/03/approval-voting-ballot1.png" />
			<p>
				Of all the options I’ve encountered since beginning my research on this topic,{' '}
				<a
					href="https://en.wikipedia.org/wiki/Approval_voting#Compliance_with_voting_system_criteria"
					target="_blank"
					rel="noopener"
				>
					Approval voting
				</a>
				—now my favorite option—had always been by far the easiest option for me to dismiss.
				It’s simple a scheme: You vote for as many candidates as you want but neither rank
				nor rate them, and the candidate listed on the most ballots is the one who wins.
				Simple, and yet unintuitive: To better reflect the preferences of a population, a
				perfect voting scheme should collect more information about individuals’
				preferences, not less. Voting for Thor and Star-Lord doesn’t feel enough; I want to
				vote Thor <i>higher</i> than Star-Lord. I want my ballot to reflect my desires: for
				Thor to have the best chance of winning, and Star-Lord the second best.{' '}
			</p>
			<p>
				Unfortunately, I was born in a universe where I can’t always get what I want.
				Approval voting makes the effect of my ballot clear: Either I’m supporting Star-Lord
				or I’m not. Ranking systems lead to tactical voting, which leads to aggregation of
				power, which imbalances the scales. With Approval voting, every candidate stands a
				chance.{' '}
			</p>
			<p>Even Spidey.</p>
			<ContentImage src="http://media.comicbook.com/uploads1/2014/12/spiderman-america-captain-115732.jpg" />
			<p>
				The question of whether Spiderman would defeat Captain America, in that original
				example, depends. It depends on how many voters choose to support only their top
				candidate. Maybe Cap’ wins one election, which will lead to disenchanted Iron Man
				voters approving Spidey next time and giving him the next win. Then if Spidey
				governs poorly, some proportion of both Cap’ and Iron Man voters will cease to
				approve of Spidey, and the pendulum will swing back, and what we see is something
				missing, in a way, from all the other schemes: an equilibrium.{' '}
			</p>
			<p>
				And my friend? With the two-party stranglehold on, he’d be able to vote for Bernie
				Sanders, or John Kasich, or whoever else—as would the rest of the nation. He’d have
				had a voice despite not being one of the approximately 15% of voters who catapulted
				Clinton and Trump out of the primaries.{' '}
			</p>
			<p>
				Maybe you can come up with an even better system. Maybe play around with existing
				schemes, tweak the rules, experiment with the{' '}
				<a
					href="https://www.vox.com/platform/amp/policy-and-politics/2017/10/11/16453512/gerrymandering-proportional-representation"
					target="_blank"
					rel="noopener"
				>
					parameters
				</a>
				. Don’t take my word as gospel; find your own favorite. No matter what you choose,
				it’ll be better than what we have now in America.
			</p>
		</>
	),
}
