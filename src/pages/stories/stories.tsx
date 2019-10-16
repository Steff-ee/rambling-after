import React from 'react'
import {
	IPivotTitlePhrases,
	makeTitleMap,
	usePivots,
} from '../../shared/presentational/hooks/usePivots'
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

	let pageContent
	switch (pivotName) {
		case StoryPivots.Posts:
			pageContent = <>BLOG POST ONE and TWO and THREE and FOUR</>
			break
		case StoryPivots.Stories:
			pageContent = <>Rambling After comic</>
			break
		case StoryPivots.Links:
		default:
			pageContent = <>Big Ideas</>
	}

	return <Page titleText={storiesTitle} Pivots={pivots} Content={pageContent} />
}
