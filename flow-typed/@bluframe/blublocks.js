// @flow
/* eslint-disable sort-imports, no-duplicate-imports */

declare module "@bluframe/blublocks" {
  import type { StyledComponent } from "styled-components"

  declare type IconGroup = "ion"

  declare type BaseColorGrades = {|
    +contrast: string,
    +dark?: string,
    +light?: string,
    +main: string
  |}

  declare type ColorGrades = {|
    +contrast: string,
    +dark: string,
    +light: string,
    +main: string
  |}

  declare type BasePalette = {|
    +disabled: BaseColorGrades,
    +primary: BaseColorGrades,
    +secondary: BaseColorGrades,
    +text: BaseColorGrades
  |}

  declare type Palette = {|
    +disabled: ColorGrades,
    +primary: ColorGrades,
    +secondary: ColorGrades,
    +text: ColorGrades
  |}

  declare type Colors = {|
    +gray: ColorGrades
  |}

  // Theme
  declare type BaseTheme = {|
    +font: {|
      +family: string
    |},
    +palette: BasePalette
  |}

  declare type Theme = {|
    ...BaseTheme,
    +colors: Colors,
    +palette: Palette
  |}

  // Props
  declare type ButtonProps = {|
    +bold?: boolean,
    +buttonType?: string,
    +className?: string,
    +disabled?: boolean,
    +iconEnd?: React$Node,
    +iconStart?: React$Node,
    +label: string,
    +noHoverHighlight?: boolean,
    +onClick?: () => void,
    +outlined?: boolean,
    +padded?: boolean,
    +secondary?: boolean
  |}

  declare type ContentComponents = {|
    [tag: string]: (props: any) => any
  |}

  declare type ContentProps = {|
    +className?: string,
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
    +theme: BaseTheme
  |}

  declare type SelectOption = {|
    +label: string,
    +value: number | string
  |}

  declare type SelectProps = {|
    +className?: string,
    +name: string,
    +onSelect: () => void,
    +options: SelectOption[],
    +placeholder?: string,
    +selected: number | string | null
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
  declare type SelectComponent = React$ComponentType<SelectProps>

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

declare module "@bluframe/blublocks/Select" {
  import type { SelectComponent } from "@bluframe/blublocks"

  declare export default SelectComponent
}

declare module "@bluframe/blublocks/ResetButton" {
  import type { ResetButtonComponent } from "@bluframe/blublocks"

  declare export default ResetButtonComponent
}
