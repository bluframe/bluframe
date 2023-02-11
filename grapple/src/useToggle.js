// @flow

import { useCallback, useState } from "react"

const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  // Always start with a boolean default value
  const [value, setValue] = useState(Boolean(defaultValue))

  const toggle = useCallback(() => {
    // Toggle value
    setValue((currentValue) => !currentValue)
  }, [])

  // Return value and toggler
  return [value, toggle]
}

export default useToggle
