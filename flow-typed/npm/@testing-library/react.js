// @flow

declare module "@testing-library/react" {
  import type { Element } from "react"

  declare export type RenderResult = {|
    container: HTMLElement,
    unmount: () => boolean,
    rerender: (ui: Element<any>, options?: any) => void,
    asFragment: () => DocumentFragment
  |}

  declare export var act: (
    callback: () => Promise<void> | void
  ) => Promise<void>
  declare export var fireEvent: {|
    (element: HTMLElement, event: SyntheticEvent<>): void,
    blur: (element: HTMLElement) => void,
    change: (
      element: HTMLElement,
      value: string | {| target: { value: string } |}
    ) => void,
    click: (element: HTMLElement) => void,
    dblClick: (element: HTMLElement) => void,
    focus: (element: HTMLElement) => void,
    input: (element: HTMLElement, { target: { value: string } }) => void,
    keyDown: (element: HTMLElement, key: string | Object) => void,
    keyPress: (element: HTMLElement, key: string | Object) => void,
    keyUp: (element: HTMLElement, key: string | Object) => void,
    mouseDown: (element: HTMLElement) => void,
    mouseEnter: (element: HTMLElement) => void,
    mouseLeave: (element: HTMLElement) => void,
    mouseMove: (element: HTMLElement) => void,
    mouseOut: (element: HTMLElement) => void,
    mouseOver: (element: HTMLElement) => void,
    mouseUp: (element: HTMLElement) => void,
    scroll: (window: any, { target: { scrollY: number } }) => void, 
    select: (
      element: HTMLElement,
      selection: {| start: number, end: number |}
    ) => void,
    submit: (element: HTMLElement) => void,
    touchEnd: (element: HTMLElement) => void,
    touchStart: (element: HTMLElement) => void
  |}

  declare export var render: (ui: Element<any>, options?: any) => RenderResult

  declare export var screen: {|
    getByText: (text: string | RegExp) => HTMLElement,
    queryByText: (text: string | RegExp) => ?HTMLElement,
    getAllByText: (text: string | RegExp) => Array<HTMLElement>,
    queryAllByText: (text: string | RegExp) => Array<HTMLElement>,
    findByText: (text: string | RegExp) => Promise<HTMLElement>,
    findAllByText: (text: string | RegExp) => Promise<Array<HTMLElement>>,
    getByRole: (role: string, options?: { name?: string }) => HTMLElement,
    queryByRole: (role: string, options?: { name?: string }) => ?HTMLElement,
    getAllByRole: (
      role: string,
      options?: { name?: string }
    ) => Array<HTMLElement>,
    queryAllByRole: (
      role: string,
      options?: { name?: string }
    ) => Array<HTMLElement>,
    findByRole: (
      role: string,
      options?: { name?: string }
    ) => Promise<HTMLElement>,
    findAllByRole: (
      role: string,
      options?: { name?: string }
    ) => Promise<Array<HTMLElement>>,
    getByLabelText: (text: string | RegExp) => HTMLElement,
    queryByLabelText: (text: string | RegExp) => ?HTMLElement,
    getAllByLabelText: (text: string | RegExp) => Array<HTMLElement>,
    queryAllByLabelText: (text: string | RegExp) => Array<HTMLElement>,
    findByLabelText: (text: string | RegExp) => Promise<HTMLElement>,
    findAllByLabelText: (text: string | RegExp) => Promise<Array<HTMLElement>>
  |}

  declare export var waitFor: (
    callback: () => mixed,
    options?: {| timeout?: number, interval?: number |}
  ) => Promise<void>
}
