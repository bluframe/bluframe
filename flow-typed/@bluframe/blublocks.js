// @flow
/* eslint-disable sort-imports, no-duplicate-imports */

declare module "@bluframe/blublocks" {
  import type { StyledComponent } from "styled-components"

  declare type IconGroup = "ion"

  // Theme
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

  declare type HamburgerProps = {|
    +onClick?: () => void
  |}

  declare type IconProps = {|
    +color?: string,
    +group: IconGroup,
    +name: string,
    +size?: string
  |}

  declare type FAIconProps = {|
    +name: string,
    +fontSize?: string
  |}

  declare type ProviderProps = {|
    +children: React$Node,
    +theme: Theme
  |}

  // Components
  declare type ButtonComponent = React$ComponentType<ButtonProps>
  declare type ContentComponent = React$ComponentType<ContentProps>
  declare type FAIconComponent = React$ComponentType<FAIconProps>
  declare type HamburgerComponent = React$ComponentType<HamburgerProps>
  declare type IconComponent = React$ComponentType<IconProps>
  declare type ProviderComponent = React$ComponentType<ProviderProps>
  declare type ResetButtonComponent = StyledComponent<
    {},
    mixed,
    HTMLButtonElement
  >

  // Exports
  declare var Animations: any
  declare var BluBlocksProvider: ProviderComponent
  declare var Button: ButtonComponent
  declare var Column: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Container: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Content: ContentComponent
  declare var FAIcon: FAIconComponent
  declare var FadeIn: any
  declare var Flip: any
  declare var Hamburger: HamburgerComponent
  declare var Icon: IconComponent
  declare var Lead: StyledComponent<{}, mixed, HTMLDivElement>
  declare var ResetButton: ResetButtonComponent
  declare var Row: StyledComponent<{}, mixed, HTMLDivElement>
  declare var Section: StyledComponent<{}, mixed, HTMLElement>
  declare var colors: any
  declare var mediaQueries: any
}

declare module "@bluframe/blublocks/Animations" {
  declare export default any
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

declare module "@bluframe/blublocks/FAIcon" {
  import type { FAIconComponent } from "@bluframe/blublocks"

  declare export default FAIconComponent
}

declare module "@bluframe/blublocks/Hamburger" {
  import type { HamburgerComponent } from "@bluframe/blublocks"

  declare export default HamburgerComponent
}

declare module "@bluframe/blublocks/Icon" {
  import type { IconComponent } from "@bluframe/blublocks"

  declare export default IconComponent
}

declare module "@bluframe/blublocks/ResetButton" {
  import type { ResetButtonComponent } from "@bluframe/blublocks"

  declare export default ResetButtonComponent
}
