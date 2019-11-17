import React from 'react'
import { ContentImage } from '../../../components/contentImage'
import { PageRoutes } from '../../helpers/routes'
import { IPost } from '../post.types'

export const POST_00108: IPost = {
	id: 108,
	title: 'Writing code is like...',
	createdTime: 1517054400000,
	route: PageRoutes.Conjecture,
	content: (
		<>
			<p>
				The two are related, both by theory and—depending on the job—sometimes in practice,
				but no matter how much they cross paths, and no matter how much they might
				technically both rely on zeroes and ones, coding is NOT math.
			</p>
			<p>
				{' '}
				“I don’t think I’d be good at coding, I never liked math” makes about as much sense
				as “I don’t think I could play the guitar, I was never good at dancing”, and yet I
				hear that sentiment often when recommending the field. The demand for software
				developers is high, the supply is low, the pay’s good, and it’s not too hard to
				learn the basics well enough for an entry-level position. And still there’s this
				resistance to it, as reflexive as heartburn, that rises from this notion that coding
				is all about managing numbers that stream down spreadsheets like the symbols in The
				Matrix. It’s the machine that minces the numbers; the programmer instead strings
				together words, albeit words with highly contextualized meanings. Although, writing
				code isn’t quite like writing prose either.{' '}
			</p>
			<p>It’s more like editing.</p>
			<ContentImage
				src="https://ramblingafter.files.wordpress.com/2018/01/matrix-3109795_1280.jpg?w=960"
				caption="This might look cool, but it has nothing to do with coding."
				style={{ maxHeight: '384px' }}
			/>
			<p>
				Whether it’s a book, a movie, or even a Youtube video, every piece of media has a
				purpose—to amuse, to educate, to shock or inspire, but always, invariably, to
				maintain the audience’s attention. Every scene, every line should serve this
				ultimate goal. Sometimes, though, the author screws up: Readers stumble over poorly
				constructed sentences, give up out of confusion, rage unexpectedly at the
				unfulfilled promise of abandoned plotlines, or simply lose interest out of boredom.
				Computers are the same. Readers stop reading; programs crash. Readers complain
				loudly; programs behave wildly. The diligently editing author must fix the grammar
				of his sentences; the programmer, her syntax. Authors reorder and reorganize
				concepts for clarity, trim unneeded plotlines or expand upon those accidentally left
				unfinished, and speed up pacing as necessary. Programmers do the same—except with
				plotlines that spell the fate of data instead of characters.
			</p>
			<p>
				{' '}
				But there’s one big difference: The programmer is not writing a stand-alone story.
				She’s writing a piece of a much larger tapestry, like an episode of a series, or a
				movie in the Marvel universe. She can’t just write for the reader (the program), but
				for other writers: Other script writers will have to pick up the plot threads one
				episode leaves dangling, and they’ll need to be able to understand the intent behind
				every plot or character choice. Nobody likes forced retcons to cover plotholes, and
				no programmer likes messy code that can’t be understood or reused. Unlike what
				Hollywood might have audiences believing about the geeky, hacker lifestyle, most
				coding done today is deeply, intrinsically collaborative.
			</p>
			<ContentImage
				src="http://a.abcnews.com/images/Entertainment/don-cheadle-mark-ruffalo-avengers-abc-jc-170719_1x1_1600.jpg"
				caption="The MCU has never had to retcon anything. Left: Terrence Howard. Right: Edward
					Norton."
			/>
			<p>
				In either case, the writer must maintain multiple threads alive in his or her head,
				gradually growing each and interweaving them, layer by layer, lest the resulting
				whole collapse upon its weakest leg. Perhaps the same could be said of a
				mathematician writing proofs, and I’m in the wrong for disparaging the comparison.
				But the comparison to editing rings truest to me, though, like any analogy, it’s an
				imperfect comparison at best—because programming is its own thing. You don’t need to
				be good at math to be good at programming, because you don’t need to be good at
				anything else to be good at programming. Don’t worry about whether you’ll be good at
				it, just try it.
			</p>
			<p>Go code.</p>
			<p>  I’ll leave you with this: </p>
			<p> Writing code is like...</p>
			<p>...playing Scrabble in a language you never learned to write.</p>
			<p>...or building a plane with money enough for a kite.</p>
			<p>Writing code is like…</p>
			<p>...writing recipes even a drunkard could follow.</p>
			<p>...or teaching a parrot to pass for human, solo.</p>
			<p>Writing code is like…</p>
			<p>...building a bike for users of any shape or size.</p>
			<p>...or playing Twenty Questions with any number of lies.</p>
			<p>Writing code is like…</p>
			<p>...teaching a cat the consequences of cruelty.</p>
			<p>...or writing a poem without knowledge of beauty.</p>
			<p>Writing code is like…</p>
			<p>...drawing a flowchart for every occasion.</p>
			<p>...or drawing by dictation, a dozen words at a time.</p>
		</>
	),
}
