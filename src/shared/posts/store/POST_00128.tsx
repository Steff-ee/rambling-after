import React from 'react'
import { ContentImage } from '../../../components/content/contentImage'
import { ConjecturePivots } from '../../../pages/conjectures/conjectures.types'
import { PageRoutes } from '../../helpers/routes'
import { IPost } from '../post.types'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	return (
		<>
			<p>
				Humans tend to think about blame in binary terms. Either you committed the crime or
				you didn’t. Even if consequences fall into a range (like jail time varying based on
				mitigating circumstances), you’re either responsible or you’re not.
			</p>
			<p>
				The trolley problem is often framed this way: If you pull the lever, do you become
				responsible? If you refuse to pull the lever, are you responsible anyhow?
			</p>
			<p>
				The typical presentation of the problem (leave the lever alone to kill five
				strangers or pull the lever to kill one) is a poor standard: Anyone who doesn’t pull
				the lever is obviously a monster. It’s the variants that are interesting.
			</p>
			<ContentImage
				src={'https://i.imgur.com/yS34XqY.png'}
				caption={
					'Well. Watching souls get demonically tortured by involuntary trolley problems can also be interesting.'
				}
			/>
			<p>
				For instance, there’s the transplant variation. You’re a doctor. Would you kill a
				random person who happens to be near the hospital to harvest their organs and save
				the lives of five transplant patients? It’s a more difficult question to answer, but
				the question is: Why? What makes this scenario different?
			</p>
			<p>
				Maybe the only difference is one of separation. With the original variant, all
				participants were inexorably bound to the tracks and their impending, possible
				dooms. With this one, an exterior bystander became involved. Maybe society needs a
				certain degree of separation between individuals and their individual problems. To
				be kind, donate a kidney to a sibling in need, if you have one to spare. To be even
				kinder, donate any non-essential organ to any stranger in need—but living this way,
				in all aspects of life, might leave you destitute. Not sustainable, is it?
			</p>
			<p>
				I don’t know. Maybe society could function this way, and fearing such a society is
				simply an expression of selfishness. Whatever your thoughts on the matter might be,
				it’s clear that trolley problem variants can lead to{' '}
				<a
					href="https://www.lesswrong.com/posts/3xhrqxNAwHZYjNj7C/the-unselfish-trolley-problem"
					target="_blank"
				>
					interesting results
				</a>
				.
			</p>
			<p>So I’d like to introduce a new variant.</p>
			<p>
				Let’s go back to the train. In the train’s “default” path is Person A, who in this
				case is a child. Pulling the lever will result in the death of Person B, who in this
				case is an adult. Easy choice; pull the lever. But now let’s say both persons are
				adult, but Person B is thirty years senior. Still an easy choice? Now let’s say the
				age difference is only ten years. Where do you draw the line?
			</p>
			<p>
				Maybe you always pull the lever as soon as you’ve determined any objective metric
				that identifies Person A as more deserving of life, if you believe that any such
				metric exists. But maybe that’s not the case. Maybe you’re told there’s a
				twenty-three year old on one track and a twenty-eight year old on the other and you
				don’t want to mess with fate. You leave the lever the hell alone because you’re
				afraid to regret the choice. Maybe there was a reason, unknown to you, why the lever
				was in its current position. Why tamper?
			</p>
			<p>
				The existence of such a line is evidence of a human bias: Best not to interfere with
				things we don’t understand, without good reason.
			</p>
			<p>But wait, I lied.</p>
			<p>
				You’re not in control of the lever that determines Person A’s fate. That lever is
				controlled by a stranger, Decider 1, whose own decision making process is obfuscated
				from you. You instead control a different lever that is dependent on Decider 1’s
				decision. Should Decider 1 pull nothing, your choice will not matter. Should Decider
				1 pull Lever 1 and divert the train from Person A, your choice will determine
				whether Person B or Person C survives.
			</p>
			<ContentImage src={'https://i.imgur.com/T93G630.jpeg'} />
			<p>
				You make your choice before you know what Decider 1 will do with Lever 1; if we
				assume Decider 1 has a 50% chance of choosing not to pull, then that’s a 50% chance
				your choice won’t matter at all.
			</p>
			<p>
				Now let’s revisit age differences. Person B is twenty-three, while Person C is
				twenty-eight. If you weren’t willing to pull the lever before, are you willing now?
				If there was a line before (the line representing when the perceived need to pull
				the lever becomes stronger than the bias for non-interference), that line has now
				moved.
			</p>
			<p>
				This system of tracks can be extended ad nauseum, with you being the last of N
				deciders. You could be the hundredth Decider, or the millionth, with an absolutely
				miniscule chance of your choice actually mattering. You know your ordinal; the
				higher your ordinal, the easier it is to pull your lever. The bias for
				non-interference lies on a spectrum. The higher your ordinal, the less responsible
				you feel—and perhaps, the less responsible you actually are.
			</p>
			<p>
				Consider one final variant. Again, there is a tree of tracks that extends ad
				nauseum, but this time each lever pull is an arguable act of evil rather than good.
				The default track has nobody bound to it. The next default track (the default for
				Decider 2) has one individual bound to it. The next (Decider 3’s default) has two
				individuals bound, and so on.
			</p>
			<p>
				When N = 1, pulling the lever equates to murder. But what if N = 100? What if N is
				so high that there’s only a 0.0000000001% chance that your lever matters? Maybe
				pulling the lever becomes 0.0000000001% as evil as murder. Or maybe not.
			</p>
			<p>
				At the very least, however, we can state that the moral weight of pulling the lever
				at N = 1 is not equivalent to pulling the lever at much higher N’s. If each lever
				has a different moral weight, then we should expect a different level of punishment
				for each (regardless of whether anyone actually ends up dying). This results in a
				sliding scale of punishment, to reflect a sliding scale of responsibility: Because
				responsibility isn’t a binary thing. It’s a spectrum.
			</p>
		</>
	)
}

export const POST_00128: IPost = {
	id: 128,
	title: 'Trolley Spectrum',
	subtitle: `Another way to think about the classic problem.`,
	createdTime: 1623353700000,
	route: PageRoutes.Conjecture,
	pivot: ConjecturePivots.Posts,
	content: <PostContent />,
}
