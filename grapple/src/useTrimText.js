// @flow

import { useMemo } from "react"

const START = 0

const useTrimText = (text: string, max: number): string => {
  const newText = useMemo(() => {
    // If text is within our max length return text as is
    if (text.length < max) {
      return text
    }

    // Slice text to max length and add trailing ...
    return text.slice(START, max).concat("...")
  }, [max, text])

  return newText
}

export default useTrimText
