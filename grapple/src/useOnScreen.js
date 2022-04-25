// @flow

import { useEffect, useRef, useState } from "react"

const DEFAULT_IS_VISIBLE = false
const DEFAULT_OFFSET = "0px"

const useOnScreen = (
  offset?: string = DEFAULT_OFFSET
): [boolean, {| current: ?HTMLElement |}] => {
  const ref = useRef<?HTMLElement>(null)

  const [isOnScreen, setOnScreen] = useState<boolean>(DEFAULT_IS_VISIBLE)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOnScreen(entry.isIntersecting)
        }
      },
      {
        offset
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [isOnScreen, ref]
}

export default useOnScreen
