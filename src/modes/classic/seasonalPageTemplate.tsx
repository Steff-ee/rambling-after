import React from 'react'
import { useParams } from 'react-router-dom'
import { IRouteParams } from '../../shared/helpers/routes'
import { useSeasonalBackgroundProps } from '../seasons/useSeasonalBackgroundProps'
import { PageTemplate } from './pageTemplate'
import { IPageTemplateBackgroundsProps, IPageTemplateProps } from './pageTemplate.types'

export type ISeasonalPageTemplateProps = Omit<
	IPageTemplateProps,
	keyof IPageTemplateBackgroundsProps
> &
	Partial<IPageTemplateBackgroundsProps>

export function SeasonalPageTemplate(props: ISeasonalPageTemplateProps): JSX.Element {
	const { page } = useParams<IRouteParams>()
	const backgroundProps = useSeasonalBackgroundProps(page)

	return <PageTemplate {...backgroundProps} {...props} />
}
