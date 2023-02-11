// @flow

import { useEffect, useRef, useState } from "react"

const DEFAULT_IS_VISIBLE = false
const DEFAULT_OFFSET = "0px"

const useOnScreen = (
  offset?: string = DEFAULT_OFFSET
): [boolean, {| current: ?HTMLElement |}] => {
  // Create ref to attach to HTMLElement to track
  const ref = useRef<?HTMLElement>(null)

  // Set a state for when HTMLElement isOnScreen
  const [isOnScreen, setIsOnScreen] = useState<boolean>(DEFAULT_IS_VISIBLE)

  useEffect(() => {
    // Create IntersectionObserver and set isOnScreen to truue when HTMLElement isIntersecting
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOnScreen(entry.isIntersecting)
        }
      },
      {
        offset
      }
    )

    if (ref.current) {
      // Start observing HTMLElement
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        // On unmount stop observing HTMLElement
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [isOnScreen, ref]
}

export default useOnScreen
