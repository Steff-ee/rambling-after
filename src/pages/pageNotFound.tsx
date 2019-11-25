import foggyTown from 'Assets/images/foggy_town.jpg'
import React from 'react'
import { Page } from './page'

export const PageNotFound: React.FunctionComponent = (): JSX.Element => {
	return (
		<Page
			Content={
				<div style={{ margin: 'auto', width: '384px' }}>
					<p>Though your page could not be found</p>
					<p>I hope you will not fail</p>
					<p>if you choose to stick around</p>
					<p>for some other URL</p>
				</div>
			}
			headerBackgroundImage={foggyTown}
			titleText={''}
			selectedPivotTitle={''}
			setPivot={(): void => {
				return
			}}
			pivotsItems={[]}
			showPostsNav={false}
		/>
	)
}
