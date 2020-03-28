import foggyTown from 'Assets/images/foggy_town.jpg'
import React from 'react'
import { ClassicPageTemplate } from '../modes/classic/classicPageTemplate'

export const PageNotFound: React.FunctionComponent = (): JSX.Element => {
	return (
		<ClassicPageTemplate
			Content={
				<div style={{ margin: 'auto', width: '384px' }}>
					<p>Though your page could not be found</p>
					<p>I hope you will not fail</p>
					<p>if you choose to stick around</p>
					<p>for some other URL</p>
				</div>
			}
			headerBackgroundImage={foggyTown}
			backgroundStyle={{ backgroundColor: 'lightgrey' }}
			selectedPivotTitle={''}
			setPivot={(): void => {
				return
			}}
			pivotsItems={[]}
			showPostsNav={false}
		/>
	)
}
