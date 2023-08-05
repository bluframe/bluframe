// @flow
/* eslint-disable sort-imports, no-duplicate-imports, max-lines */

declare module "@bluframe/blublocks" {
  import type { ElementRef } from "react"
  import type { KeyFrames, StyledComponent } from "styled-components"

  declare type IconGroupName = "io5"

  declare type AnimationName = "bounceIn" | "bounceOut" | "fadeIn" | "fadeOut"

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

  declare type ColorName =
    | "abbey"
    | "alto"
    | "black"
    | "boulder"
    | "capeCod"
    | "codGray"
    | "diesel"
    | "dustyGray"
    | "gallery"
    | "gray"
    | "mercury"
    | "mineShaft"
    | "nevada"
    | "pomegranate"
    | "quillGray"
    | "shark"
    | "silver"
    | "silverChalice"
    | "tundora"
    | "white"

  declare type Colors = {|
    +[name: string]: string
  |}

  declare type BasePalette = {|
    +disabled: BaseColorGrades,
    +error: BaseColorGrades,
    +primary: BaseColorGrades,
    +secondary: BaseColorGrades,
    +subtitle: BaseColorGrades,
    +text: BaseColorGrades
  |}

  declare type Palette = {|
    +disabled: ColorGrades,
    +error: ColorGrades,
    +primary: ColorGrades,
    +secondary: ColorGrades,
    +subtitle: ColorGrades,
    +text: ColorGrades
  |}

  declare type ThemeColors = {|
    +gray: ColorGrades
  |}

  declare type MediaQueries = {|
    +desktop: string,
    +largeDesktop: string,
    +tablet: string
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
    +colors: ThemeColors,
    +palette: Palette
  |}

  // Props
  declare type BadgeProps = {|
    +className?: string,
    +color?: $Keys<Palette>,
    +label: string
  |}

  declare type ButtonProps = {|
    +ariaLabel?: string,
    +bold?: boolean,
    +className?: string,
    +disabled?: boolean,
    +expanded?: boolean,
    +icon?: React$Node,
    +iconEnd?: React$Node,
    +iconOnly?: boolean,
    +iconStart?: React$Node,
    +label: string,
    +loading?: boolean,
    +noHoverHighlight?: boolean,
    +onClick?: () => void,
    +outlined?: boolean,
    +padded?: boolean,
    +raised?: boolean,
    +rounded?: boolean,
    +secondary?: boolean,
    +small?: boolean,
    +transparent?: boolean,
    +type?: string
  |}

  declare type OptionValue = number | string

  declare type Option = {|
    +label: React$Node,
    +value: OptionValue
  |}

  declare type CheckboxProps = {|
    ...Option,
    +inputId?: string,
    +isChecked: boolean,
    +name: string,
    +onChange: (value: OptionValue) => void
  |}

  // Find a better solution other than any
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
    isMenuExpanded?: boolean,
    menuId?: string,
    +onClick?: () => void
  |}

  declare type IconProps = {|
    +color?: string,
    +group?: IconGroupName,
    +name: string,
    +size?: string
  |}

  declare type InputTextProps = {|
    +className?: string,
    +defaultValue?: string,
    +error?: boolean,
    +helperText?: string,
    +inputId?: string,
    +isFullBorder?: boolean,
    +label: string,
    +onBlur?: (event: SyntheticEvent<*>) => void,
    +onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
    +name: string,
    +ref?: ElementRef<*>,
    +required?: boolean,
    +step?: string,
    +type?: string,
    +value?: string
  |}

  declare type LoadingProps = {|
    +contrast?: boolean,
    +disabled?: boolean,
    +secondary?: boolean,
    +size?: number
  |}

  declare type ModalProps = {|
    +children: React$Node,
    +isOpen: boolean,
    +onClose: () => void
  |}

  declare type ProviderProps = {|
    +children: React$Node,
    +theme: BaseTheme
  |}

  declare type RadioGroupProps = {|
    +className?: string,
    +label: React$Node,
    +name: string,
    +onChange: (value: OptionValue) => void,
    +options: Option[],
    +selected: OptionValue | null
  |}

  declare type RadioProps = {|
    ...Option,
    +inputId?: string,
    +isChecked: boolean,
    +name: string,
    +onChange: (value: OptionValue) => void
  |}

  declare type SelectedIconProps = {|
    +color?: string,
    +size?: string,
    +title?: string
  |}

  declare type SelectProps = {|
    +defaultValue?: string,
    +className?: string,
    +label: React$Node,
    +name: string,
    +onBlur?: (event: SyntheticEvent<*>) => void,
    +onChange: (value: OptionValue | null) => void,
    +options: Option[],
    +placeholder?: string,
    +ref?: ElementRef<*>,
    +value?: OptionValue | null
  |}

  // Components
  declare type AnimationComponents = {| +[key: AnimationName]: KeyFrames |}
  declare type BadgeComponent = React$ComponentType<BadgeProps>
  declare type ButtonComponent = React$ComponentType<ButtonProps>
  declare type CheckboxComponent = React$ComponentType<CheckboxProps>
  declare type ContentComponent = React$ComponentType<ContentProps>
  declare type HamburgerComponent = React$ComponentType<HamburgerProps>
  declare type FadeInComponent = StyledComponent<
    {| +fadeIn: "Left" | "Right" | "Up", +isAnimated: boolean |},
    Theme,
    HTMLDivElement
  >
  declare type FlipComponent = StyledComponent<
    {| +flip: "X" | "Y", +isAnimated: boolean |},
    Theme,
    HTMLDivElement
  >
  declare type IconComponent = React$ComponentType<IconProps>
  declare type InputTextComponent = React$ComponentType<InputTextProps>
  declare type LoadingComponent = React$ComponentType<LoadingProps>
  declare type ModalComponent = React$ComponentType<ModalProps>
  declare type ProviderComponent = React$ComponentType<ProviderProps>
  declare type RadioComponent = React$ComponentType<RadioProps>
  declare type RadioGroupComponent = React$ComponentType<RadioGroupProps>
  declare type ResetButtonComponent = StyledComponent<
    {||},
    Theme,
    HTMLButtonElement
  >
  declare type SelectComponent = React$ComponentType<SelectProps>

  // Exports
  declare var Animations: AnimationComponents
  declare var Badge: BadgeComponent
  declare var BluBlocksProvider: ProviderComponent
  declare var Button: ButtonComponent
  declare var Checkbox: CheckboxComponent
  declare var Content: ContentComponent
  declare var FadeIn: FadeInComponent
  declare var Flip: FlipComponent
  declare var H1: StyledComponent<{||}, Theme, HTMLHeadingElement>
  declare var H2: StyledComponent<{||}, Theme, HTMLHeadingElement>
  declare var H3: StyledComponent<{||}, Theme, HTMLHeadingElement>
  declare var H4: StyledComponent<{||}, Theme, HTMLHeadingElement>
  declare var H5: StyledComponent<{||}, Theme, HTMLHeadingElement>
  declare var H6: StyledComponent<{||}, Theme, HTMLHeadingElement>
  declare var Hamburger: HamburgerComponent
  declare var Icon: IconComponent
  declare var InputText: InputTextComponent
  declare var Loading: LoadingComponent
  declare var Modal: ModalComponent
  declare var Paragraph: StyledComponent<{||}, Theme, HTMLParagraphElement>
  declare var Radio: RadioComponent
  declare var RadioGroup: RadioGroupComponent
  declare var ResetButton: ResetButtonComponent
  declare var Select: SelectComponent
  declare var SubtitleH1: StyledComponent<{||}, Theme, HTMLParagraphElement>
  declare var SubtitleH2: StyledComponent<{||}, Theme, HTMLParagraphElement>
  declare var SubtitleH3: StyledComponent<{||}, Theme, HTMLParagraphElement>
  declare var colors: Colors
  declare var mediaQueries: MediaQueries
}

declare module "@bluframe/blublocks/Animations" {
  import type { AnimationComponents } from "@bluframe/blublocks"

  declare export default AnimationComponents
}

declare module "@bluframe/blublocks/BluBlocksProvider" {
  import type { ProviderComponent } from "@bluframe/blublocks"

  declare export default ProviderComponent
}

declare module "@bluframe/blublocks/Badge" {
  import type { BadgeComponent } from "@bluframe/blublocks"

  declare export default BadgeComponent
}

declare module "@bluframe/blublocks/Button" {
  import type { ButtonComponent } from "@bluframe/blublocks"

  declare export default ButtonComponent
}

declare module "@bluframe/blublocks/Checkbox" {
  import type { CheckboxComponent } from "@bluframe/blublocks"

  declare export default CheckboxComponent
}

declare module "@bluframe/blublocks/Content" {
  import type { ContentComponent } from "@bluframe/blublocks"

  declare export default ContentComponent
}

declare module "@bluframe/blublocks/FadeIn" {
  import type { FadeInComponent } from "@bluframe/blublocks"

  declare export default FadeInComponent
}

declare module "@bluframe/blublocks/Flip" {
  import type { FlipComponent } from "@bluframe/blublocks"

  declare export default FlipComponent
}

declare module "@bluframe/blublocks/Typography/H1" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLHeadingElement>
}

declare module "@bluframe/blublocks/Typography/H2" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLHeadingElement>
}

declare module "@bluframe/blublocks/Typography/H3" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLHeadingElement>
}

declare module "@bluframe/blublocks/Typography/H4" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLHeadingElement>
}

declare module "@bluframe/blublocks/Typography/H5" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLHeadingElement>
}

declare module "@bluframe/blublocks/Typography/H6" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLHeadingElement>
}

declare module "@bluframe/blublocks/Hamburger" {
  import type { HamburgerComponent } from "@bluframe/blublocks"

  declare export default HamburgerComponent
}

declare module "@bluframe/blublocks/Icon" {
  import type { IconComponent } from "@bluframe/blublocks"

  declare export default IconComponent
}

declare module "@bluframe/blublocks/InputText" {
  import type { InputTextComponent } from "@bluframe/blublocks"

  declare export default InputTextComponent
}

declare module "@bluframe/blublocks/Loading" {
  import type { LoadingComponent } from "@bluframe/blublocks"

  declare export default LoadingComponent
}

declare module "@bluframe/blublocks/Modal" {
  import type { ModalComponent } from "@bluframe/blublocks"

  declare export default ModalComponent
}

declare module "@bluframe/blublocks/Typography/Paragraph" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLParagraphElement>
}

declare module "@bluframe/blublocks/Radio" {
  import type { RadioComponent } from "@bluframe/blublocks"

  declare export default RadioComponent
}

declare module "@bluframe/blublocks/RadioGroup" {
  import type { RadioGroupComponent } from "@bluframe/blublocks"

  declare export default RadioGroupComponent
}

declare module "@bluframe/blublocks/ResetButton" {
  import type { ResetButtonComponent } from "@bluframe/blublocks"

  declare export default ResetButtonComponent
}

declare module "@bluframe/blublocks/Select" {
  import type { SelectComponent } from "@bluframe/blublocks"

  declare export default SelectComponent
}

declare module "@bluframe/blublocks/Typography/SubtitleH1" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLParagraphElement>
}

declare module "@bluframe/blublocks/Typography/SubtitleH2" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLParagraphElement>
}

declare module "@bluframe/blublocks/Typography/SubtitleH3" {
  import type { StyledComponent } from "styled-components"
  import type { Theme } from "@bluframe/blublocks"

  declare export default StyledComponent<{||}, Theme, HTMLParagraphElement>
}

declare module "@bluframe/blublocks/colors" {
  import type { Colors } from "@bluframe/blublocks"

  declare export default Colors
}

declare module "@bluframe/blublocks/mediaQueries" {
  import type { MediaQueries } from "@bluframe/blublocks"

  declare export default MediaQueries
}
