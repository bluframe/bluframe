// @flow

import { useCallback, useState } from "react"

const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(Boolean(defaultValue))

  const toggle = useCallback(() => {
    setValue((currentValue) => !currentValue)
  }, [])

  return [value, toggle]
}

export default useToggle
