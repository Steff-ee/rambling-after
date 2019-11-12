import React, { useContext, useState } from 'react'
import { NavOrientation } from '../../components/iconNav/iconNav.types'
import { MediaContext, MediaSize } from '../../components/mediaProvider'
import { classicColors } from './classicConstants'
import { ClassicPageNav } from './classicPageNav'
import { ClassicPostsNav } from './classicPostsNav'

export interface IClassicNavProps {
	showPosts: boolean
	rootStyle?: React.CSSProperties
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export const ClassicNav: React.FunctionComponent<IClassicNavProps> = (
	props: IClassicNavProps
): JSX.Element => {
	const {
		showPosts: showPostsProp,
		rootStyle,
		firstClick,
		backClick,
		nextClick,
		latestClick,
	} = props
	const mediaSize = useContext(MediaContext)
	const [showPostsState, setShowPostsState] = useState<boolean>(false)

	const commonStyle = {
		backgroundColor: classicColors.secondary,
		width: '100%',
		height: '64px',
		display: 'flex',
		justifyContent: 'space-between',
	}

    let showPosts = showPostsProp
	if (mediaSize === MediaSize.Small) {
        showPosts = showPostsProp // && showPostsState
    }
    
		return (
			<div
				style={{
					...commonStyle,
					...rootStyle,
				}}
			>
				<ClassicPageNav orientation={NavOrientation.Left} />
				{showPostsProp && (
					<ClassicPostsNav
						orientation={NavOrientation.Right}
						firstClick={firstClick}
						backClick={backClick}
						nextClick={nextClick}
						latestClick={latestClick}
					/>
				)}
			</div>
		)
}
