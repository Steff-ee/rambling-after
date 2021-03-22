import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const pagePadding = 88
// this creates an 8.5 x 11 ratio
const pageWidth = 850 - 2 * pagePadding
const pageHeight = 1100 - 2 * pagePadding
const commonVerticalMargin = '30px'

const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontSize: '15px',
	lineHeight: '21px',
}

const h1Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontWeight: 600,
	fontSize: '34px',
	lineHeight: '48px',
	paddingBottom: '2px',
	letterSpacing: '1px',
}

const h2Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '23px',
	fontWeight: 600,
	lineHeight: '33px',
}

const h3Style: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '18px',
	fontWeight: 600,
	lineHeight: '25px',
}

const dividerStar = <div>✧</div>

interface IResumeHeaderProps {
	isMobile: boolean
}

const ResumeHeader: React.FunctionComponent<IResumeHeaderProps> = (props) => {
	const { isMobile } = props

	return (
		<div style={{ textAlign: 'center' }}>
			<div style={h1Style}>DANIEL STEFFEE</div>
			<div style={{ ...h2Style, fontWeight: 400 }}>Software Engineer</div>
			<div
				style={{
					paddingTop: '10px',
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>dsteffee@alumni.stanford.edu</div>
				{dividerStar}
				<div>Bellevue, WA</div>
				{dividerStar}
				<div>steff-ee.github.io</div>
				{dividerStar}
				<div>linkedin.com/in/steff-ee</div>
			</div>
			<Divider thickness={2} rootStyle={{ width: '96%', padding: '8px 2% 8px 2%' }} />
			<div style={{ ...lightTextStyle, lineHeight: '21px' }}>
				Resourceful and collaborative Full Stack Software Engineer with 11 years of coding
				experience. Adept at maximizing customer impact through a balance of rapid feature
				deployment and robust, performant code design. Motivated to optimize, redesign, or
				altogether revamp outdated code, patterns, and architecture.
			</div>
		</div>
	)
}

interface IResumeSectionProps {
	title: string
	body: JSX.Element
	isMobile: boolean
	rootStyle?: React.CSSProperties
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = (props) => {
	const { title, body, isMobile, rootStyle } = props

	return (
		<div style={{ ...rootStyle, marginTop: commonVerticalMargin }}>
			<div
				style={{
					...h2Style,
					fontSize: '24px',
					textAlign: 'center',
					margin: isMobile ? '25px 0px 25px 0px' : '0px 0px 15px 0px',
					letterSpacing: '1px',
				}}
			>
				{title}
			</div>
			<div>{body}</div>
		</div>
	)
}

// replaces use of <li> to get around the univeral li styling in root.css
const ListItem: React.FunctionComponent = (props) => {
	return <li style={{ margin: '0px 0px 2px 11px' }}>{props.children}</li>
}

const ListHeader: React.FunctionComponent = (props) => {
	return (
		<div style={{ marginTop: '8px', fontWeight: 600, lineHeight: '25px' }}>
			{props.children}
		</div>
	)
}

interface IExperienceSubSectionProps {
	title: string
	subtitle?: string
	timeRange: string
	subtext?: string
	body: JSX.Element
	isMobile: boolean
}

const ExperienceSubSection: React.FunctionComponent<IExperienceSubSectionProps> = (props) => {
	const { title, subtitle, timeRange, body, subtext, isMobile } = props

	return (
		<div style={{ marginBottom: commonVerticalMargin }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: isMobile ? 'column' : 'row',
					lineHeight: '25px',
				}}
			>
				<div style={h2Style}>{title}</div>
				<div style={{ margin: '0px 6px' }}>{timeRange}</div>
			</div>
			{subtitle && <div style={h3Style}>{subtitle}</div>}
			{subtext && <div style={{ marginTop: 2 }}>{subtext}</div>}
			<div style={{ margin: isMobile ? '10px 0px 0px 5px' : '4px 50px 0px 15px' }}>
				{body}
			</div>
		</div>
	)
}

export const ResumePage: React.FunctionComponent = (props) => {
	const mediaSize = useContext(MediaContext)
	const isMobile = mediaSize === MediaSize.Small

	return (
		<div
			style={{
				...lightTextStyle,
				color: 'black',
				maxWidth: pageWidth,
				height: mediaSize === MediaSize.Large ? pageHeight : '',
				backgroundColor: 'white',
				padding: isMobile ? '10px' : pagePadding,
				border: '1px black solid',
				boxShadow: '3px 3px 1px darkgray',
				marginBottom: commonVerticalMargin,
			}}
		>
			{props.children}
		</div>
	)
}

export const Resume: React.FunctionComponent = () => {
	const mediaSize = useContext(MediaContext)
	const isMobile = mediaSize === MediaSize.Small

	return (
		<>
			<ResumePage>
				<ResumeHeader isMobile={isMobile} />
				<ResumeSection
					title={'WORK EXPERIENCE'}
					isMobile={isMobile}
					body={
						<>
							<ExperienceSubSection
								title={'Microsoft'}
								subtitle={'PowerApps Lifecycle Management'}
								timeRange={'Sept 2020 - Present'}
								subtext={`PowerApps empowers organizations to build apps easily with project solutions that incorporate Microsoft's Common Data Service. App Lifecycle Management supports the back end for solution layering and full-stack experiences for managing the app lifeycle and app settings.`}
								isMobile={isMobile}
								body={
									<>
										<ListHeader>Complex Challenges</ListHeader>
										<ListItem>
											Build back-end APIs and front-end components,
											collaborate with project managers and designers, and
											manage junior engineers to drive the creation of SiteMap
											Settings.
										</ListItem>
										<ListItem>
											Refashion the intricate layering logic for solution app
											components to eliminate inconsistencies and drive down
											our customer reported incident load by ~25%.
										</ListItem>
									</>
								}
							/>
							<ExperienceSubSection
								title={'Microsoft'}
								subtitle={'PowerApps Portal'}
								timeRange={'July 2018 - Sept 2020'}
								subtext={
									'Portal develops the front-end Home page, Apps list page, and Solutions list page for PowerApps.'
								}
								isMobile={isMobile}
								body={
									<>
										<ListHeader>Teamwork</ListHeader>
										<ListItem>
											Assist partner teams, mentor interns, and guide vendors
											with code changes.
										</ListItem>
										<ListItem>
											2nd highest pull request reviewer in monorepo and top 10
											contributor.
										</ListItem>
										<ListItem>
											Responsively dive into at-risk featurework to aid any
											team members in need.
										</ListItem>
										<ListItem>
											Drive team to adopt React Hooks and Function Components
											in lieu of Redux.
										</ListItem>
										<ListHeader>Reliability</ListHeader>
										<ListItem>
											Generate weekly service reports, triage customer
											incidents, and assist bug triage.
										</ListItem>
										<ListItem>
											Revamped telemetry framework to better distinguish error
											rates.
										</ListItem>
										<ListItem>
											Increase apps page reliability (98.5% to 99.3%) by
											reducing client errors and preventing failure state with
											partial loading.
										</ListItem>
									</>
								}
							/>
						</>
					}
				/>
			</ResumePage>
			<ResumePage>
				<ExperienceSubSection
					title={'TreeRing'}
					timeRange={'Feb 2015 - July 2018'}
					subtext={
						'TreeRing provides flexible software for designing yearbooks, customizing them per student, and benefits the environment by planting a tree for every book printed.'
					}
					isMobile={isMobile}
					body={
						<>
							<ListHeader>Lead Back-End Engineer</ListHeader>
							<ListItem>
								"Xylem" project: Re-architect the client/server framework in a team
								of two: unifying duplicate code, simplifying data access, and
								increasing expressiveness.
							</ListItem>
							<ListItem>
								Supervise all SQL queries and APIs: optimizing for efficiency,
								producing for new features, and advancing the duplicate user
								detection algorithm.
							</ListItem>
							<ListItem>
								Identify, triage, and resolve customer issues with rapid repairs,
								then preventing regressions with automated testing.
							</ListItem>
						</>
					}
				/>
				<ResumeSection
					title={'EDUCATION'}
					isMobile={isMobile}
					body={
						<ExperienceSubSection
							title={'Stanford University'}
							timeRange={'Sept 2010 - June 2015'}
							isMobile={isMobile}
							body={
								<>
									<ListItem>
										Focus on graduate-level Theoretical Computer Science
										(algorithms and computability).
									</ListItem>
									<ListItem>
										Teaching Assistant for “Logic and Automated Reasoning”.
									</ListItem>
									<ListItem>
										Resident Assistant collaborating to build a safe, supportive
										community.
									</ListItem>
								</>
							}
						/>
					}
				/>
				<ResumeSection
					title={'SKILLS'}
					isMobile={isMobile}
					rootStyle={{ marginTop: '14px' }}
					body={
						<div style={{ padding: '6px 50px 0px 15px' }}>
							<ListItem>
								TypeScript, JavaScript, Python, C#, React, Redux, GraphQL, Moq,
								Jest.
							</ListItem>
							<ListItem>
								Prior Proficiencies: MySQL, Angular, AWS, PHP, Java, C, C++, Ruby.
							</ListItem>
							<ListItem>
								Eager to learn new skills, learn from the best, and share what I
								learn.
							</ListItem>
							<ListItem>
								Interested in computer science theory, algorithms, cryptography, and
								quantum computing.
							</ListItem>
						</div>
					}
				/>
			</ResumePage>
		</>
	)
}
