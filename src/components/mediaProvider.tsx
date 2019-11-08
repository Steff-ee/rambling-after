import React from 'react'
import Media from 'react-media'

export enum MediaSize {
	Small,
	Large,
}

export const mediaSizes = {
	Small: '(max-width: 699px)',
	Large: '(min-width: 700px)',
}

export const MediaContext = React.createContext<MediaSize>(MediaSize.Small)

export const MediaProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = (
	props: React.PropsWithChildren<{}>
): JSX.Element => {
	return (
		<Media queries={mediaSizes}>
			{(matches): JSX.Element => (
				<MediaContext.Provider value={matches.Small ? MediaSize.Small : MediaSize.Large}>
					{props.children}
				</MediaContext.Provider>
			)}
		</Media>
	)
}
