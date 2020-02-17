import React from 'react'
import { Table } from 'semantic-ui-react'
import { ContentImage } from '../../../components/content/contentImage'
import { Divider } from '../../../components/content/divider'
import { StyledTable } from '../../../components/content/styledTable'
import { HomePivots } from '../../../pages/home/home.types'
import { PageRoutes } from '../../helpers/routes'
import { useLightTextStyle, useListStyle } from '../../helpers/useStyles'
import { IPost } from '../post.types'

const PostContent: React.FunctionComponent = (): JSX.Element => {
	const lightTextStyle = useLightTextStyle()
	const listStyle = useListStyle()

	return (
		<>
			<p>Rating books has become anathema to my enjoyment of them.</p>
			<p>
				I started using GoodReads four years ago to track my reading list and discover more
				books. I recommend the app. For a few months, I was reading reviews of books{' '}
				<a href="https://www.fantasyliterature.com/" target="_blank">
					online
				</a>{' '}
				followed by more reviews on GoodReads, spending almost as much time curating books
				to read as actual reading.
			</p>
			<p>
				That habit faded, but it was replaced with a new habit: I started rating books that
				I read.
			</p>
			<p>
				Even while in the middle of reading them, I would start to speculate about my
				eventual rating of them, and devise preliminary arguments to defend my rating.
			</p>
			<div style={listStyle}>
				<li>
					"This is really good, but it's not one of the best books <i>ever</i>, so unless
					the ending blows me away, this is probably four stars."
				</li>
				<li>
					"This is better than The Malaise of Mediocrity, but it's not as good as The
					Satisfying Satyr. I want to give it three-and-a-half stars, but I can't. Ugh."
				</li>
			</div>
			<p>Etc.</p>
			<p>
				I reserved five star ratings for the best of the best, and distributed my ratings
				somewhat like this:
			</p>
			<StyledTable>
				<Table.Body>
					<Table.Row>
						<Table.Cell>1</Table.Cell>
						<Table.Cell>2</Table.Cell>
						<Table.Cell>3</Table.Cell>
						<Table.Cell>4</Table.Cell>
						<Table.Cell>5</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>5%</Table.Cell>
						<Table.Cell>20%</Table.Cell>
						<Table.Cell>35%</Table.Cell>
						<Table.Cell>35%</Table.Cell>
						<Table.Cell>5%</Table.Cell>
					</Table.Row>
				</Table.Body>
			</StyledTable>
			<p>
				The more I did it, the more annoying the process became, and yet the harder to stop.
				I didn't want to wage internal debates about the difference between three stars and
				four; I just wanted to enjoy reading.
			</p>
			<p>
				A single person's rating reflects the person rating it as much as the thing being
				rated. The more you put into a book, after all, the more you get out of it. Every
				second I spent critically rating a book was one second I could have spent critically
				engaging with the book's characters and themes. I <i>knew</i> this wasn't ideal, and
				yet I couldn't stop.
			</p>
			<p>Then I read Will Wight's Unsouled series.</p>
			<p>
				By the system I'd set up for myself, the books didn't quite reach the bar to make
				five stars, but I <i>wanted</i> to give them five stars. I wanted other people to
				read these book and share my love of them. Who stood to gain by me withholding an
				arbitrary star?
			</p>
			<p>
				So I said "screw the system" and gave them each five stars, then went back and
				upgraded a bunch of my other ratings as well. Now my distribution looks more like
				this:
			</p>
			<StyledTable>
				<Table.Body>
					<Table.Row>
						<Table.Cell>1</Table.Cell>
						<Table.Cell>2</Table.Cell>
						<Table.Cell>3</Table.Cell>
						<Table.Cell>4</Table.Cell>
						<Table.Cell>5</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>2.5%</Table.Cell>
						<Table.Cell>5%</Table.Cell>
						<Table.Cell>15%</Table.Cell>
						<Table.Cell>25%</Table.Cell>
						<Table.Cell>30%</Table.Cell>
					</Table.Row>
				</Table.Body>
			</StyledTable>
			<p>
				Notice it doesn't add up to 100%: Not having to rate every book means not having to
				worry so much about all this.
			</p>
			<ContentImage
				src={'https://i.imgur.com/7sZo7CF.jpg'}
				caption={'Ratings are to me what charts are to the Stanley Parable.'}
			/>

			<Divider />

			<p>
				The Unsouled series is all about characters leveling up their magical disciplines.
				Check out{' '}
				<a
					href="http://jetreidliterary.blogspot.com/2020/01/getting-to-next-level-as-writer.html"
					target="_blank"
				>
					Janet Reid's post
				</a>{' '}
				on how to level up as an author.
			</p>

			<Divider />

			<p>
				Here's another poem inspired by a randomly generated line. This time the line was
				"Languish on the sun, and reach the tempest,".
			</p>

			<div
				style={{
					...lightTextStyle,
					marginTop: '40px',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div>
					<div>Looking out onto Lake Michigan, I</div>
					<div style={{ marginLeft: '32px' }}>think it an ocean, I think it endless.</div>
					<div>How far to its Eastside? Who lives? What lies?</div>
					<div>My sidewalk ends</div>
					<div style={{ marginLeft: '160px' }}>abruptly (like most things).</div>
					<div>I would dip but even alone I'm shy.</div>
					<div>None here'd notice me</div>
					<div style={{ marginLeft: '224px' }}>trip,</div>
					<div style={{ marginLeft: '256px' }}>slip in,</div>
					<div style={{ marginLeft: '288px' }}>and drown.</div>
					<div>Did you know: Ten thousand sand grains would stack</div>
					<div style={{ marginLeft: '32px' }}>as tall as Chicago's Water Tower?</div>
					<div>Ten thousand such Towers, if stacked would crash</div>
					<div style={{ marginLeft: '32px' }}>
						slowly, as North-long as Lake Michigan.
					</div>
					<div>Ten thousand such lakes would die in a</div>
					<div style={{ marginLeft: '368px' }}>flash</div>
					<div style={{ marginLeft: '32px' }}>into vapor the sun's radius long.</div>
					<div>Ten thousand such suns in any would have</div>
					<div style={{ marginLeft: '32px' }}>still only</div>
					<div style={{ marginLeft: '96px' }}>one</div>
					<div style={{ marginLeft: '128px' }}>languished copy of me.</div>
				</div>
			</div>
		</>
	)
}

export const POST_00118: IPost = {
	id: 118,
	title: 'Reflections - 02/17/2020',
	createdTime: 1581967124000,
	route: PageRoutes.Home,
	pivot: HomePivots.Posts,
	content: <PostContent />,
}
