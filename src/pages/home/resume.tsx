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

const ResumeHeader: React.FunctionComponent = (): JSX.Element => {
	return (
		<div style={{ textAlign: 'center', marginBottom: '50px' }}>
			<div style={titleTextStyle}>DANIEL STEFFEE</div>
			<div>Software Engineer</div>
			<div
				style={{
					...lightTextStyle,
					paddingTop: '6px',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<div>dsteffee@alumni.stanford.edu</div>
				<div>(352) 672-4266</div>
				<div>Issaquah, WA</div>
				<div>steff-ee.github.io</div>
			</div>
			<Divider thickness={2} rootStyle={{ padding: '15px' }} />
			<div style={subscriptStyle}>
				Adaptable Full Stack Web Developer with 5 years’ experience prioritizing the highest
				impact changes and fixes to customers. Flexibly aided team to ensure at-risk
				features deliver. Drove design discussions, service reports, and reviewed all code
				changes to guarantee code quality and product reliability.
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
				marginBottom: '30px',
			}}
		>
			<div
				style={{
					fontFamily: 'Montserrat',
					fontSize: '23px',
					textAlign: 'center',
				}}
			>
				{title}
			</div>
			<div style={lightTextStyle}>{body}</div>
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
			<ResumeSection title={'WORK EXPERIENCE'} body={<>Blah blah blah</>} />
			<ResumeSection title={'EDUCATION'} body={<>Blah blah blah</>} />
			<ResumeSection title={'SKILLS'} body={<>Blah blah blah</>} />
		</div>
	)
}
