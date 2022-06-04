// @flow

import type {
  GetProps,
  Prepare,
  PrepareComponentOptions
} from "@bluframe/grapple"
import React, { useMemo } from "react"

/*
 *
 * Receive Props, transform them in ComponentProps and return
 * Component with ComponentProps
 *
 * onlyRenderIf: only render component if function returns true
 *
 * onlyUpdate: only update component if a prop in array changes
 *
 */
const prepareComponent =
  <Props: {| +[string]: any |}, ComponentProps: {| +[string]: any |}>(
    usePrepareComponent: GetProps<Props, ComponentProps>,
    options?: PrepareComponentOptions
  ): Prepare<Props, ComponentProps> =>
  (
    Component: React$AbstractComponent<ComponentProps, any>
  ): React$AbstractComponent<Props, any> => {
    const PrepareComponent = (props: Props): React$Node => {
      const newProps: ComponentProps = usePrepareComponent(props)

      let updateProps = [newProps]

      if (options && options.onlyUpdate) {
        // eslint-disable-next-line react/destructuring-assignment
        updateProps = options.onlyUpdate.map((item) => props[item])
      }

      const MemoizeComponent = useMemo(
        () => <Component {...newProps} />,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        updateProps
      )

      if (options && options.onlyRenderIf && !options.onlyRenderIf(props)) {
        return null
      }

      return MemoizeComponent
    }

    return PrepareComponent
  }

export default prepareComponent
