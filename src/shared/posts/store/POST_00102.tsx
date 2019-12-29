import React from 'react'
import { ContentImage } from '../../../components/content/contentImage'
import { GamePivots } from '../../../pages/games/games.types'
import { PageRoutes } from '../../helpers/routes'
import { IPost } from '../post.types'

export const POST_00102: IPost = {
	id: 102,
	title: 'Which attributes best describe player characters?',
	createdTime: 1509019200000,
	route: PageRoutes.Games,
	pivot: GamePivots.Posts,
	content: (
		<>
			<p>
				Let’s say you had to rank every human on the planet on their proficiencies at
				everything. Maybe you work as a government official in a dystopian society trying to
				encourage competition between its denizens, or maybe you’re an alien observer
				gathering data on human dynamics. Such a task would be impossible, because the list
				of skills that could be enumerated is limitless (literally so: though my sister
				might be more proficient at weaving, I might be better underwater basket weaving,
				and she at drunken underwater basket weaving, and so on, ad infinitum). However,
				your dystopian dictator or alien boss allows you to choose a handful of qualities to
				rank, each quality representing the average proficiency at a whole category of
				skills. Which qualities would you choose to make your job of ranking humans easier?
			</p>
			<ContentImage
				src="https://i.pinimg.com/736x/1c/7f/f2/1c7ff25c4aa1b6aa10b117a7a8f4f8ac--wedding-rehearsal-four-.jpg"
				caption="Perhaps you choose wisdom, kindness, courage, and cunning, because you're the
				headmaster of a school of wizardry and you want to segregate and stereotype students
				by personality... for some reason."
			/>
			<p>
				For instance, I could choose critical thinking, emotional stability,
				self-discipline, bravery, people skills, and athleticism. A politician with deep-set
				insecurities who’s also adept at inspiring followers might score highly on people
				skills but low in emotional intelligence. A clever student who never achieves his
				goals in life might score high in critical thinking but low in self-discipline, and
				a visionary who goes against the fold might score highest in bravery than in any
				other category.{' '}
			</p>
			<p>
				In videogames, these categories are used to track the growth of players’ characters,
				though they focus less on interpersonal distinctions and more on the raw necessities
				of violence. In the hack-and-slash classic Diablo, for example, the attributes that
				represented a character’s proficiencies were Strength, Dexterity, Vitality, and
				Magic, which corresponded to the power of your attacks, your accuracy, your health,
				and your spellcasting. The rampantly popular World of Warcraft kept Strength,
				swapped Dexterity for Agility, Vitality for Stamina, and split Magic into
				Intelligence and Spirit. The examples are{' '}
				<a
					href="http://tvtropes.org/pmwiki/pmwiki.php/Main/ThreeStatSystem"
					target="_blank"
					rel="noopener"
				>
					myriad
				</a>
				, in both JRPG’s and Western RPG’s and games of other genres (like Dota 2), and
				every one of them can trace the roots of this system to the early 1970’s, before
				even the advent of personal computing.
			</p>
			<p>
				Dungeons & Dragons, which has inspired so many videogames in so many ways, was
				itself inspired by miniature wargame campaign called Blackmoor. In this campaign,
				Dave Arneson—one of the two fathers of D&D—chose various{' '}
				<a
					href="http://dmdavid.com/tag/how-dungeons-dragons-gained-its-ability-scores/"
					target="_blank"
					rel="noopener"
				>
					aspects
				</a>{' '}
				to represent individuals’ personalities, including notably Brains, Looks,
				Credibility, Sex, Courage and Cunning. Gary Gygax—Arneson’s friend at the{' '}
				<a
					href="https://www.believermag.com/issues/200609/?read=article_lafarge"
					target="_blank"
					rel="noopener"
				>
					time
				</a>{' '}
				and the other father of D&D—wisely folded the trio of Looks, Credibility, and Sex
				into the single kid-friendlier attribute of Charisma. The final list had six:
				Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. The first
				three of those covered the basics of non-magical combat familiar from Diablo as well
				as so many other modern games, and they adequately distinguish the hardy from the
				quick-footed, the barbarians from the rogues. The next three, on the other hand,
				created a mess that the fifth and current edition of D&D (or “5e”) still deals with.
			</p>
			<p>
				I’ve seen the difference between Intelligence and Wisdom explained through analogy:
				A mathematician might be intelligent, able to solve complex problems and retain
				ample knowledge, and yet lack the experience and empathy needed to navigate the
				turbulent waters of a relationship. I’ve also seen it explained pithily, as the
				difference between knowing how to do something versus knowing whether to do it.
				Unfortunately, the two qualities bleed into one another, as a lack of intelligence
				can lead to poor judgement, and the wisdom of accrued experience can easily cross
				into the domain of knowledge. Consider, for example, the turbulent waters of
				religion, a kind of relationship steered as much by faith as by love, and governed
				in 5e not by Wisdom but by Intelligence. Or consider the copious amounts of
				knowledge required to survive med school and then consider 5e’s medicine skill,
				which is governed by Wisdom, not Intelligence.
			</p>
			<p>
				Charisma would make sense if it wasn’t for magic. While wizards and druids
				respectively use Intelligence and Wisdom for their spells (speaking to the
				difference between booksmarts and streetsmarts), paladins and sorcerers use
				Charisma. In the mechanics of D&D, the notion of Charisma has been overloaded to
				also represent the mostly unrelated notion of willpower, and then this notion of
				willpower was made irrelevant for half of the spellcasting classes. When defending
				against spells, rather than casting them, these three attributes become more
				confusing still. Charisma can help to deter the Calm Emotions spell, but not so for
				the Charm Person spell, which only Wisdom can deter. Most illusion spells fail to
				the Wise, except for Phantasmal Force, which fails to high Intelligence, and
				Seeming, which fails to Charisma. An enemy tries to banish you to another plane of
				existence? Roll a Charisma check. A scrying enemy tries to spy upon you from within
				the same plane of existence? Roll for Wisdom. Maybe these choices all have
				explanations, but they’re not intuitive, and they’re not the only alternative.
			</p>
			<p>
				Here’s <a href="https://ramblingafter.wordpress.com/dd-homebrew/">mine</a>.
			</p>
			<ContentImage
				src="https://ramblingafter.files.wordpress.com/2017/10/skyrim-skills.jpg?w=1024"
				caption="Skyrim's only attributes are magicka, health, and stamina. Skills level up
					individually."
			/>
			<p>
				Postscriptum: Ironically, my{' '}
				<a href="http://en.uesp.net/wiki/Oblivion:Skills" target="_blank" rel="noopener">
					favorite attribute system
				</a>{' '}
				I’ve encountered was from a videogame in a series that has since dispensed with
				attributes entirely. The developers realized that players could manage their skills
				(archery, alchemy, speechcraft, etc.) directly and that the attributes that governed
				them (agility, intelligence, personality, etc.) were redundant. The same cannot be
				said for D&D, which is prone to requiring ability checks outside the scope of any
				one skill, since the scope of what you might attempt in D&D is rather larger
				(infinite) than in any videogame.
			</p>
		</>
	),
}
