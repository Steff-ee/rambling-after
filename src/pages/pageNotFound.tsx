import foggyTown from 'Assets/images/foggy_town.jpg'
import React from 'react'
import { SeasonalPageTemplate } from '../modes/classic/seasonalPageTemplate'
import { classicBackgroundTextureStyle } from '../shared/helpers/styles'

export const PageNotFound: React.FunctionComponent = (): JSX.Element => {
	return (
		<SeasonalPageTemplate
			Content={
				<div style={{ margin: 'auto', width: '384px' }}>
					<p>Though your page could not be found</p>
					<p>I hope you will not fail</p>
					<p>if you choose to stick around</p>
					<p>for some other URL</p>
				</div>
			}
			headerBackgroundImage={foggyTown}
			backgroundStyle={classicBackgroundTextureStyle}
			selectedPivotTitle={''}
			setPivot={(): void => {
				return
			}}
			pivotsItems={[]}
			showPostsNav={false}
			artistName={'an unknown photographer'}
			artistLink={'https://best-wallpaper.net/'}
		/>
	)
}
