// @flow

import { useEffect, useRef } from "react"

const usePrevious = <T>(value: T): ?T => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default usePrevious
