import React, { useState } from 'react'
import { PageRoutes } from '../helpers/routes'
import { IPost, PivotRoutes } from './post.types'

interface IOpenPostsContext {
	getLastOpenPost: (page: PageRoutes, pivot: PivotRoutes) => IPost | undefined
	setLastOpenPost: (page: PageRoutes, pivot: PivotRoutes, post: IPost) => void
}

export const OpenPostsContext = React.createContext<IOpenPostsContext>({
	getLastOpenPost: (): IPost | undefined => undefined,
	setLastOpenPost: (): void => {
		return
	},
})

export const OpenPostsProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	const [dictionary, setDictionary] = useState<{
		[pageRoute: string]: { [pivotRoute: string]: IPost }
	}>({
		[PageRoutes.Home]: {},
		[PageRoutes.Stories]: {},
		[PageRoutes.Games]: {},
		[PageRoutes.Conjecture]: {},
	})

	return (
		<OpenPostsContext.Provider
			value={{
				getLastOpenPost: (page: PageRoutes, pivot: PivotRoutes): IPost | undefined =>
					dictionary[page][pivot],
				setLastOpenPost: (page: PageRoutes, pivot: PivotRoutes, post: IPost): void => {
					// (TODO) more efficient way?
					const newDictionary = { ...dictionary }
					newDictionary[page][pivot] = post
					setDictionary(newDictionary)
				},
			}}
		>
			{props.children}
		</OpenPostsContext.Provider>
	)
}
