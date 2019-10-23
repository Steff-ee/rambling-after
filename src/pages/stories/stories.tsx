import React, { useContext, useEffect } from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
import { SeasonsContext } from '../../shared/presentational/seasons/seasons'
import { getNextSeason } from '../../shared/presentational/seasons/seasonsHelpers'
import { Page } from '../page'

export const storiesTitle = 'stories'

export enum StoryPivots {
	Posts = 'posts',
	Stories = 'stories',
	Links = 'links',
}

export const storyPivotTitlePhrases: IPivotTitlePhrases = [
	// posts about stories
	[StoryPivots.Posts, 'about', storiesTitle],
	// my stories written
	['my', StoryPivots.Stories, 'written'],
	// some interesting links
	['some', 'interesting', StoryPivots.Links],
]

const titleMap = makeTitleMap(storyPivotTitlePhrases)

export const Stories: React.FunctionComponent = (): JSX.Element => {
	const { pivotName, pivots } = usePivots(storyPivotTitlePhrases, StoryPivots.Posts, titleMap)
	const { setSeason } = useContext(SeasonsContext)
	useEffect(() => {
		setSeason(getNextSeason(1))
	}, [])

	let pageContent
	switch (pivotName) {
		case StoryPivots.Posts:
			pageContent = (
				<>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus
						metus ac tortor efficitur aliquam. Ut eu consequat lacus. Integer gravida
						posuere elit. Sed convallis augue nunc, id dapibus nibh cursus et. Donec ut
						congue erat. Integer fermentum, sapien a vestibulum mollis, ipsum sem
						viverra tellus, quis vestibulum nibh nisl vitae metus. Aliquam ac
						sollicitudin justo. Pellentesque pulvinar, justo at molestie porta, eros
						tellus scelerisque dui, id semper mi enim a ante. Ut at accumsan dui. Proin
						nibh felis, laoreet ullamcorper nunc id, efficitur accumsan leo. Ut molestie
						bibendum metus, ut mollis mauris convallis gravida. Sed tristique porttitor
						velit, at cursus sem pellentesque id. Nulla sodales eros aliquam sodales
						pretium. Curabitur eu tristique tellus, sollicitudin hendrerit leo. Nulla
						facilisi. Mauris eleifend est eget gravida lacinia.
					</p>
					<p>
						Vestibulum tristique sapien enim, id commodo ipsum ornare ac. Maecenas
						bibendum laoreet leo, sed tempus metus. Ut nec hendrerit mi. Sed congue est
						ut nulla pulvinar, ac euismod mi pretium. Curabitur varius orci ut cursus
						egestas. Nunc bibendum id purus maximus facilisis. In vitae augue nec elit
						suscipit sagittis nec non arcu.
					</p>
					<p>
						Donec ac ante id enim tempor dignissim. Curabitur nec libero ipsum. In a
						scelerisque enim, nec elementum libero. Etiam vel dignissim tellus, ut
						ornare mauris. Nullam eu lectus at ipsum euismod ultrices consequat varius
						lacus. Nam eu nisl a risus fringilla elementum. Vestibulum porta sagittis
						felis, in consectetur sem fermentum sollicitudin. Sed finibus nulla vitae
						consequat mattis. Quisque interdum, risus pretium consectetur ullamcorper,
						nulla arcu rhoncus lorem, ac vulputate felis nisi non metus.
					</p>
					<p>
						Nam nunc dui, bibendum in sapien ac, placerat laoreet diam. Curabitur quis
						finibus ex. Ut sed aliquam urna. Fusce ullamcorper magna erat, eget sodales
						sapien tincidunt eget. Proin posuere, metus ut rutrum posuere, urna arcu
						ullamcorper lorem, eu tempus augue mauris at enim. Curabitur faucibus sapien
						quis arcu luctus, id auctor nisi aliquet. Integer lobortis posuere sapien,
						ut aliquet nisi malesuada a.
					</p>
					<p>
						Curabitur tempus venenatis tortor. Ut rutrum enim elit, interdum ornare
						lectus condimentum quis. Sed dapibus tincidunt urna a feugiat. Phasellus
						molestie commodo risus, sed semper neque convallis eu. Morbi sagittis
						malesuada dui a aliquam. Aliquam vel commodo libero, quis vehicula lectus.
						Cras tempus nulla in mauris vehicula aliquet. Nunc ac nisl neque. Aliquam
						efficitur velit ligula, sed rutrum odio molestie eu. Pellentesque id
						condimentum enim, in lacinia nisi. Etiam luctus nisl a neque placerat, non
						aliquet elit facilisis. Nam vel cursus purus.
					</p>
				</>
			)
			break
		case StoryPivots.Stories:
			const pageContentCount = 30
			const pageContents = []
			for (let i = 0; i < pageContentCount; i++) {
				pageContents.push(
					<p>
						Curabitur tempus venenatis tortor. Ut rutrum enim elit, interdum ornare
						lectus condimentum quis. Sed dapibus tincidunt urna a feugiat. Phasellus
						molestie commodo risus, sed semper neque convallis eu. Morbi sagittis
						malesuada dui a aliquam. Aliquam vel commodo libero, quis vehicula lectus.
						Cras tempus nulla in mauris vehicula aliquet. Nunc ac nisl neque. Aliquam
						efficitur velit ligula, sed rutrum odio molestie eu. Pellentesque id
						condimentum enim, in lacinia nisi. Etiam luctus nisl a neque placerat, non
						aliquet elit facilisis. Nam vel cursus purus.
					</p>
				)
			}
			pageContent = <>{pageContents}</>
			break
		case StoryPivots.Links:
		default:
			pageContent = <>Big Ideas</>
	}

	return <Page titleText={storiesTitle} Pivots={pivots} Content={pageContent} />
}
