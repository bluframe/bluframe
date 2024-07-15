/* eslint-disable no-duplicate-imports, no-unused-vars, init-declarations */

declare module "@bluframe/grapple" {
  import React from "react"

  // PrepareComponent
  type GetProps<
    Props extends Record<string, unknown>,
    ComponentProps extends Record<string, unknown>
  > = (props: Props) => ComponentProps

  type Prepare<
    Props extends Record<string, unknown>,
    ComponentProps extends Record<string, unknown>
  > = (
    Component: React.JSXElementConstructor<ComponentProps>
  ) => React.JSXElementConstructor<Props>

  interface PrepareComponentOptions {
    onlyRenderIf?: (props: any) => boolean
    onlyUpdate?: string[]
  }

  export type PrepareComponent = <Props, ComponentProps>(
    usePrepareComponent: GetProps<Props, ComponentProps>,
    options?: PrepareComponentOptions
  ) => Prepare<Props, ComponentProps>

  // Hooks
  export type UseOnScreen = (
    offset?: string
  ) => [boolean, { current: ?HTMLElement }]
  export type UsePrevious = <T>(value: T) => ?T
  export type UseToggle = (defaultValue?: boolean) => [boolean, () => void]
  export type UseTrimText = (text: string, max: number) => string

  // Exports
  export const prepareComponent: PrepareComponent
  export const useOnScreen: UseOnScreen
  export const usePrevious: UsePrevious
  export const useToggle: UseToggle
  export const useTrimText: UseTrimText
}

declare module "@bluframe/grapple/prepareComponent" {
  import { prepareComponent } from "@bluframe/grapple"

  export default prepareComponent
}

declare module "@bluframe/grapple/useOnScreen" {
  import { useOnScreen } from "@bluframe/grapple"

  export default useOnScreen
}

declare module "@bluframe/grapple/usePrevious" {
  import { usePrevious } from "@bluframe/grapple"

  export default usePrevious
}

declare module "@bluframe/grapple/useToggle" {
  import { useToggle } from "@bluframe/grapple"

  export default useToggle
}

declare module "@bluframe/grapple/useTrimText" {
  import { useTrimText } from "@bluframe/grapple"

  export default useTrimText
}
