---
to: "<%= path ? `src/components/${path}/${name}/${name}.tsx` : `src/components/${name}/${name}.tsx` %>"
---
import { ComponentProps } from "."
import { Wrapper } from "./styled"

const <%= name %> = (props: ComponentProps) => (
  <Wrapper />
)


export default <%= name %>
