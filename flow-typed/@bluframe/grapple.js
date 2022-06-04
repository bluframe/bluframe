// @flow
/* eslint-disable no-duplicate-imports */

declare module "@bluframe/grapple" {
  // PrepareComponent
  declare type GetProps<
    Props: {| +[string]: any |},
    ComponentProps: {| +[string]: any |}
  > = (props: Props) => ComponentProps

  declare type Prepare<
    Props: {| +[string]: any |},
    ComponentProps: {| +[string]: any |}
  > = (
    Component: React$AbstractComponent<ComponentProps, any>
  ) => React$AbstractComponent<Props, any>

  declare type PrepareComponentOptions = {|
    +onlyRenderIf?: (props: any) => boolean,
    +onlyUpdate?: string[]
  |}

  declare type PrepareComponent = <Props, ComponentProps>(
    usePrepareComponent: GetProps<Props, ComponentProps>,
    options?: PrepareComponentOptions
  ) => Prepare<Props, ComponentProps>

  // Hooks
  declare type UseTrimText = (text: string, max: number) => string

  // Exports
  declare var prepareComponent: PrepareComponent
  declare var useTrimText: UseTrimText
}

declare module "@bluframe/grapple/prepareComponent" {
  import type { PrepareComponent } from "@bluframe/grapple"

  declare export default PrepareComponent
}

declare module "@bluframe/grapple/useTrimText" {
  import type { UseTrimText } from "@bluframe/grapple"

  declare export default UseTrimText
}
