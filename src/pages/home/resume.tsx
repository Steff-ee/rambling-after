import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'

const pageWidth = '750px' // with padding of 50, makes 8.5 x 11 ratio
const pageHeight = '1000px'

const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Open Sans',
	fontSize: '15px',
	lineHeight: '21px',
}

const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontWeight: 600,
	fontSize: '34px',
	lineHeight: '39px',
	paddingBottom: '2px',
	letterSpacing: '4px',
}

const subtitleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '21px',
	letterSpacing: '1px',
	fontWeight: 600,
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
			<div style={{ ...subtitleTextStyle, fontWeight: 400 }}>Software Engineer</div>
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
				Adaptable Full Stack Web Developer with 5 years of industry experience maximizing
				customer impact, balancing features, reliability and performance with technical debt
				reduction.
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

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = (
	props: IResumeSectionProps
): JSX.Element => {
	const { title, body, isMobile, rootStyle } = props

	return (
		<div style={{ ...rootStyle, marginTop: '21px' }}>
			<div
				style={{
					...subtitleTextStyle,
					fontSize: '23px',
					textAlign: 'center',
					margin: isMobile ? '25px 0px 25px 0px' : '0px 0px 4px 0px',
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
const ListItem: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return <li style={{ margin: '0px 0px 4px 11px' }}>{props.children}</li>
}

const ListHeader: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return (
		<div style={{ marginTop: '8px', fontWeight: 600, lineHeight: '25px' }}>
			{props.children}
		</div>
	)
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
		<div style={{ marginBottom: '16px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: isMobile ? 'column' : 'row',
					lineHeight: '25px',
				}}
			>
				<div style={subtitleTextStyle}>{title}</div>
				<div style={{ margin: '0px 6px' }}>{timeRange}</div>
			</div>
			{subtext && <div>{subtext}</div>}
			<div style={{ margin: isMobile ? '10px 0px 0px 5px' : '2px 50px 0px 15px' }}>
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
										Drive team to adopt Hooks and replace Redux and other
										patterns with more productive ones
									</ListItem>
									<ListItem>
										Revamped telemetry framework to distinguish error rates by
										app type and server vs client (uncovered to be 99.9%)
									</ListItem>
									<ListHeader>Reliability</ListHeader>
									<ListItem>
										Increase apps page reliability (98.5% to 99.3%) by reducing
										client errors and preventing failure state with partial
										loading
									</ListItem>
									<ListItem>
										Generate weekly service reports, triage bugs daily, and
										mitigate high severity issues that arise
									</ListItem>
									<ListHeader>Teamwork</ListHeader>
									<ListItem>
										Guide partner teams and vendors, mentor interns, and share
										feedback on code changes (second highest pull request
										reviewer in monorepo)
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
										a team of two: unifying duplicate code, simplifying data
										access, and increasing expressiveness
									</ListItem>
									<ListItem>
										Supervise all SQL queries: Optimizing for efficiency,
										producing for new features, and advancing the algorithm for
										finding duplicate users during roster uploads
									</ListItem>
									<ListItem>
										Identify, triage, and resolve customer incidents with rapid
										repairs and automated testing
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
									Resident Assistant, collaborating to build a safe, supportive
									community for freshmen
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
					<div style={{ padding: '6px 0px 0px 15px' }}>
						<ListItem>
							Currently Proficient: React, Redux, GraphQL, TypeScript, JavaScript,
							Python
						</ListItem>
						<ListItem>
							Prior Proficiencies: MySQL, Angular, AWS, PHP, Java, C, C++, Ruby
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
