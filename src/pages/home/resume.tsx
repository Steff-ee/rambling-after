import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { subscriptStyle } from '../../shared/helpers/styles'

const pageWidth = 850
const pageHeight = 1100

const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '14px',
	lineHeight: '23px',
}

const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '36px',
	lineHeight: '39px',
	paddingBottom: '8px',
	letterSpacing: '3px',
}

const subtitleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '21px',
	letterSpacing: '1px',
}

const dividerStar = <div>✧</div>

interface IResumeHeaderProps {
	isMobile: boolean
}

const ResumeHeader: React.FunctionComponent<IResumeHeaderProps> = (
	props: IResumeHeaderProps
): JSX.Element => {
	const { isMobile } = props

	return (
		<div style={{ textAlign: 'center' }}>
			<div style={titleTextStyle}>DANIEL STEFFEE</div>
			<div style={subtitleTextStyle}>Software Engineer</div>
			<div
				style={{
					paddingTop: '12px',
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>dsteffee@alumni.stanford.edu</div>
				{dividerStar}
				<div>Issaquah, WA</div>
				{dividerStar}
				<div>steff-ee.github.io</div>
				{dividerStar}
				<div>linkedin.com/in/steff-ee</div>
			</div>
			<Divider thickness={2} rootStyle={{ padding: '12px' }} />
			<div style={subscriptStyle}>
				Adaptable Full Stack Web Developer with 10 years coding and 5 years' experience
				delivering and prioritizing the highest impact changes for customers without
				sacrificing code quality and reliability.
			</div>
		</div>
	)
}

interface IResumeSectionProps {
	title: string
	body: JSX.Element
	isMobile: boolean
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = (
	props: IResumeSectionProps
): JSX.Element => {
	const { title, body, isMobile } = props

	return (
		<div style={{ marginTop: '20px' }}>
			<div
				style={{
					fontFamily: 'Montserrat',
					fontSize: '23px',
					textAlign: 'center',
					margin: isMobile ? '25px 0px 25px 0px' : '0px 0px 10px 0px',
				}}
			>
				{title}
			</div>
			<div>{body}</div>
		</div>
	)
}

// replaces use of <li> to get around the univeral li styling in root.css
const ListItem: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return <li style={{ margin: '0px 0px 0px 10px' }}>{props.children}</li>
}

const ListHeader: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return <div style={{ marginTop: '6px', fontWeight: 600 }}>{props.children}</div>
}

interface IExperienceSubSectionProps {
	title: string
	timeRange: string
	subtext?: string
	body: JSX.Element
	isMobile: boolean
}

const ExperienceSubSection: React.FunctionComponent<IExperienceSubSectionProps> = (
	props: IExperienceSubSectionProps
): JSX.Element => {
	const { title, timeRange, body, subtext, isMobile } = props

	return (
		<div style={{ marginBottom: '20px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: isMobile ? 'column' : 'row',
				}}
			>
				<div
					style={{
						fontWeight: 600,
						fontSize: '21px',
					}}
				>
					{title}
				</div>
				<div style={{ margin: '0px 10px' }}>{timeRange}</div>
			</div>
			<div>{subtext}</div>
			<div style={{ margin: isMobile ? '10px 0px 0px 5px' : '10px 0px 0px 15px' }}>
				{body}
			</div>
		</div>
	)
}

export const Resume: React.FunctionComponent = (): JSX.Element => {
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
				padding: isMobile ? '10px' : '50px',
				border: '1px black solid',
				boxShadow: '3px 3px 1px darkgray',
			}}
		>
			<ResumeHeader isMobile={isMobile} />
			<ResumeSection
				title={'WORK EXPERIENCE'}
				isMobile={isMobile}
				body={
					<>
						<ExperienceSubSection
							title={'Microsoft'}
							timeRange={'2018 - present'}
							subtext={
								'Enterprise application, managing life cycle of low-code apps, project solutions, and sharing experiences'
							}
							isMobile={isMobile}
							body={
								<>
									<ListHeader>Code Architecture</ListHeader>
									<ListItem>
										Drive team to adopt Hooks and replace Redux with more
										productive patterns
									</ListItem>
									<ListItem>
										Elicit feedback and run design discussions to maintain code
										quality
									</ListItem>
									<ListHeader>Reliability</ListHeader>
									<ListItem>
										Triage bugs daily and generate service reports weekly and
										monthly
									</ListItem>
									<ListItem>
										Improve perceived performance through partial loading and
										track with revamped telemetry
									</ListItem>
									<ListHeader>Teamwork</ListHeader>
									<ListItem>
										Review all of team's pull requests, assist partner teams,
										guide vendors, and mentor interns
									</ListItem>
									<ListItem>
										Responsively dive into at-risk featurework to aid any
										feature crew in need
									</ListItem>
								</>
							}
						/>
						<ExperienceSubSection
							title={'TreeRing'}
							timeRange={'2015 - 2018'}
							subtext={
								'Consumer Yearbook Editor web application with high quality, robust print rendering'
							}
							isMobile={isMobile}
							body={
								<>
									<ListHeader>Primary Back-End Engineer</ListHeader>
									<ListItem>
										"Xylem" project: Re-architect the client/server framework in
										a team of two, like GraphQL but customized: unifying
										duplicate code, simplifying data access, and increasing
										expressiveness
									</ListItem>
									<ListItem>
										Supervise all SQL queries: Optimizing for efficiency,
										producing for new features, and advancing the algorithm for
										duplicate-finding during roster uploads
									</ListItem>
									<ListHeader>Customer Support Queue</ListHeader>
									<ListItem>
										Identify causes of reported incidents and address with
										fixes, scripts, and tests
									</ListItem>
									<ListItem>
										Balance between elegant, robust solutions and rapid-response
										repairs
									</ListItem>
								</>
							}
						/>
					</>
				}
			/>
			<ResumeSection
				title={'EDUCATION'}
				isMobile={isMobile}
				body={
					<ExperienceSubSection
						title={'Stanford University'}
						timeRange={'2010 - 2015'}
						isMobile={isMobile}
						body={
							<>
								<ListItem>
									Focus on graduate-level Theoretical Computer Science (algorithms
									and computability)
								</ListItem>
								<ListItem>
									Teaching Assistant for “Logic and Automated Reasoning”
								</ListItem>
								<ListItem>
									Resident Assistant for Eucalypto, collaborating to build a safe,
									supportive community for freshmen
								</ListItem>
							</>
						}
					/>
				}
			/>
			<ResumeSection
				title={'SKILLS'}
				isMobile={isMobile}
				body={
					<div style={{ marginLeft: '15px' }}>
						<ListItem>
							Currently Proficient: React, Redux, GraphQL, TypeScript, JavaScript,
							MySQL
						</ListItem>
						<ListItem>
							Prior Proficiencies: Angular, PHP, Java, C, C++, Ruby, Python
						</ListItem>
						<ListItem>
							Eager to learn new languages, tools, and skills; learn from the best;
							and share what I learn
						</ListItem>
					</div>
				}
			/>
		</div>
	)
}
