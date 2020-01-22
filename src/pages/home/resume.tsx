import React, { useContext } from 'react'
import { Divider } from '../../components/content/divider'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { subscriptStyle } from '../../shared/helpers/styles'

const lightTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '14px',
	lineHeight: '23px',
}

const titleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '36px',
	paddingBottom: '12px',
	letterSpacing: '3px',
}

const subtitleTextStyle: React.CSSProperties = {
	fontFamily: 'Montserrat',
	fontSize: '21px',
	letterSpacing: '1px',
}

const dividerStar = <div>✧</div>

const ResumeHeader: React.FunctionComponent = (): JSX.Element => {
	return (
		<div style={{ textAlign: 'center', marginBottom: '25px' }}>
			<div style={titleTextStyle}>DANIEL STEFFEE</div>
			<div style={subtitleTextStyle}>Software Engineer</div>
			<div
				style={{
					...lightTextStyle,
					paddingTop: '12px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>dsteffee@alumni.stanford.edu</div>
				{dividerStar}
				<div>(352) 672-4266</div>
				{dividerStar}
				<div>Issaquah, WA</div>
				{dividerStar}
				<div>steff-ee.github.io</div>
			</div>
			<Divider thickness={2} rootStyle={{ padding: '12px' }} />
			<div style={subscriptStyle}>
				Adaptable Full Stack Web Developer with 5 years’ experience prioritizing the highest
				impact changes for customers. Flexibly aided team to ensure at-risk features
				deliver. Drove design discussions, service reports, and reviewed all code changes to
				guarantee code quality and product reliability.
			</div>
		</div>
	)
}

interface IResumeSectionProps {
	title: string
	body: JSX.Element
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = (
	props: IResumeSectionProps
): JSX.Element => {
	const { title, body } = props

	return (
		<div
			style={{
				marginBottom: '25px',
			}}
		>
			<div
				style={{
					fontFamily: 'Montserrat',
					fontSize: '23px',
					textAlign: 'center',
					marginBottom: '15px',
				}}
			>
				{title}
			</div>
			<div style={lightTextStyle}>{body}</div>
		</div>
	)
}

interface IExperienceSubSectionProps {
	title: string
	timeRange: string
	body: JSX.Element
}

const ExperienceSubSection: React.FunctionComponent<IExperienceSubSectionProps> = (
	props: IExperienceSubSectionProps
): JSX.Element => {
	const { title, timeRange, body } = props

	return (
		<div style={{ marginBottom: '25px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
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
				<div>{timeRange}</div>
			</div>
			<div style={{ marginTop: '20px' }}>{body}</div>
		</div>
	)
}

export const Resume: React.FunctionComponent = (): JSX.Element => {
	const mediaSize = useContext(MediaContext)

	if (mediaSize === MediaSize.Small) {
		return <div>Resume has yet to be implemented for mobile</div>
	}

	return (
		<div
			style={{
				maxWidth: 850,
				maxHeight: 1100,
				backgroundColor: 'white',
				padding: '50px',
				border: '1px black solid',
				boxShadow: '3px 3px 1px darkgray',
			}}
		>
			<ResumeHeader />
			<ResumeSection
				title={'WORK EXPERIENCE'}
				body={
					<>
						<ExperienceSubSection
							title={'Microsoft'}
							timeRange={'2018 - present'}
							body={<>Blah blah blah</>}
						/>
						<ExperienceSubSection
							title={'TreeRing'}
							timeRange={'2015 - 2018'}
							body={<>Blah blah blah</>}
						/>
					</>
				}
			/>
			<ResumeSection
				title={'EDUCATION'}
				body={
					<ExperienceSubSection
						title={'Stanford'}
						timeRange={'2010 - 2015'}
						body={<>Blah blah blah</>}
					/>
				}
			/>
			<ResumeSection
				title={'SKILLS'}
				body={
					<>
						<li>
							Currently Proficient: React, Redux, GraphQL, TypeScript, JavaScript,
							MySQL
						</li>
						<li>Prior Proficiencies: Angular 4, PHP, Java, C, C++, Ruby</li>
					</>
				}
			/>
		</div>
	)
}
