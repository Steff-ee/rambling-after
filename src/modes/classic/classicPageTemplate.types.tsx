import { MediaSize } from '../../components/mediaProvider'
import { IUsePivotKeyReturns } from '../../shared/presentational/hooks/usePivots.types'

export interface IClassicPageTemplateProps {
	headerBackgroundImage: string
	Content: JSX.Element
	showPostsNav: boolean

	/* Pivots */
	selectedPivotTitle: string | undefined
	setPivot: IUsePivotKeyReturns['setPivot']
	pivotsItems: IUsePivotKeyReturns['pivotsItems']

	/* Posts Navigation */
	firstClick?: () => void
	backClick?: () => void
	nextClick?: () => void
	latestClick?: () => void
}

export interface IParallaxTitleProps {
	headerBackgroundImage: string
	mediaSize: MediaSize
	skipMorph: boolean
}

export type IParallaxPivotsProps = Pick<
	IClassicPageTemplateProps,
	'selectedPivotTitle' | 'setPivot' | 'pivotsItems'
> & {
	arePivotsSticky: boolean
	pivotsPositionRef: React.MutableRefObject<null>
}

export type IMobilePivotsProps = Pick<IClassicPageTemplateProps, 'setPivot' | 'pivotsItems'>
