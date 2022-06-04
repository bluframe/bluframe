// @flow
/* eslint-disable sort-imports, no-duplicate-imports */

declare module "@bluframe/blublocks" {
  import type { StyledComponent } from "styled-components"

  declare type Theme = {|
    +font: {|
      +family: string
    |},
    +palette: {|
      +primary: {|
        +contrast: string,
        +main: string
      |},
      +secondary: {|
        +contrast: string,
        +main: string
      |},
      +text: string
    |}
  |}

  // Props
  declare type ButtonProps = {|
    +buttonType?: string,
    +className?: string,
    +isBold?: boolean,
    +isPadded?: boolean,
    +label: string,
    +onClick?: () => void
  |}

  declare type ContentComponents = {|
    [tag: string]: (props: any) => any
  |}

  declare type ContentProps = {|
    +components?: ContentComponents,
    +content: string,
    +max?: number,
    +paragraphAs?: string,
    +stripMarkdown?: boolean
  |}

  declare type ProviderProps = {|
    +children: React$Node,
    +theme: Theme
  |}

  // Components
  declare type ButtonComponent = React$ComponentType<ButtonProps>
  declare type ContentComponent = React$ComponentType<ContentProps>
  declare type ProviderComponent = React$ComponentType<ProviderProps>

  // Exports
  declare var BluBlocksProvider: ProviderComponent
  declare var Button: ButtonComponent
  declare var Column: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Container: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Content: ContentComponent
  declare var FAIcon: any
  declare var FadeIn: any
  declare var Flip: any
  declare var Lead: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Row: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Section: StyledComponent<{}, mixed, HTMLElement>
  declare var colors: any
  declare var mediaQueries: any
}

declare module "@bluframe/blublocks/BluBlocksProvider" {
  import type { ProviderComponent } from "@bluframe/blublocks"

  declare export default ProviderComponent
}

declare module "@bluframe/blublocks/Button" {
  import type { ButtonComponent } from "@bluframe/blublocks"

  declare export default ButtonComponent
}

declare module "@bluframe/blublocks/Content" {
  import type { ContentComponent } from "@bluframe/blublocks"

  declare export default ContentComponent
}
