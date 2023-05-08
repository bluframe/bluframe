// @flow

import type {
  GetProps,
  Prepare,
  PrepareComponentOptions
} from "@bluframe/grapple"
import React, { type ElementRef, forwardRef, useMemo } from "react"

/*
 * Receive Props, transform them in ComponentProps and return
 * Component with ComponentProps
 *
 * onlyRenderIf: only render component if function returns true
 *
 * onlyUpdate: only update component if a prop in array changes
 */
const prepareComponent =
  <Props: {| +[string]: any |}, ComponentProps: {| +[string]: any |}>(
    usePrepareComponent: GetProps<Props, ComponentProps>,
    options?: PrepareComponentOptions
  ): Prepare<Props, ComponentProps> =>
  (
    Component: React$AbstractComponent<ComponentProps, any>
  ): React$AbstractComponent<Props, any> => {
    // PrepareComponent is a higher-order component that wraps the original Component
    // and handles the props transformation, rendering, and updating logic.
    const PrepareComponent = forwardRef(
      (props: Props, ref: ElementRef<any>): React$Node => {
        // Transform Props into ComponentProps using the usePrepareComponent function
        const newProps: ComponentProps = usePrepareComponent(props)

        // Determine which props to use for controlling component updates
        let updateProps = [newProps]
        if (options && options.onlyUpdate) {
          updateProps = options.onlyUpdate.map((item) => props[item])
        }

        // MemoizeComponent is a memoized version of the Component that only updates when
        // the specified props change, as defined by the onlyUpdate option.
        const MemoizeComponent = useMemo(
          () => <Component {...newProps} ref={ref} />,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          updateProps
        )

        // Only render the component if the onlyRenderIf option is not provided or
        // if it returns true.
        if (options && options.onlyRenderIf && !options.onlyRenderIf(props)) {
          return null
        }

        return MemoizeComponent
      }
    )

    PrepareComponent.displayName = "PrepareComponent"

    return PrepareComponent
  }

export default prepareComponent
