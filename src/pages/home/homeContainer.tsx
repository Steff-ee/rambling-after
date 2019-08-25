// import * as React from 'react';
// import { Home } from './home';

// export interface IAppComponentLibrariesCommandBarContainerProps {
//   selectedAppComponentLibrary: IAppComponentLibrary;
// }

// export type IOwnProps = IAppComponentLibrariesCommandBarContainerProps;

// export const withHomeLogic = (
//   innerComponent: typeof Home
// ): React.ComponentClass<IOwnProps> => {
//   return class AppComponentLibrariesCommandBarWrapper extends React.Component<IOwnProps> {
//     render(): JSX.Element {
//       const { selectedAppComponentLibrary } = this.props;

//       return (
//         <InnerComponent
//           options={{ context: CommandContexts.CommandBar, isItemSelected: !!selectedAppComponentLibrary }}
//         />
//       );
//     }
//   };
// }

// export const HomeContainer = withHomeLogic(
//   home
// );
