// @flow

import { useMemo } from "react"

const START = 0

const useTrimText = (text: string, max: number): string => {
  const newText = useMemo(() => {
    if (text.length < max) {
      return text
    }

    return text.slice(START, max).concat("...")
  }, [max, text])

  return newText
}

export default useTrimText
