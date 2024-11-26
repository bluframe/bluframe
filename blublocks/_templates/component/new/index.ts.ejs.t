---
to: "<%= path ? `src/components/${path}/${name}/index.ts` : `src/components/${name}/index.ts` %>"
---
import <%= name %> from "./<%= name %>"
<% if(locals.usePrepareComponent){ -%>
import prepareComponent from "@bluframe/grapple/prepareComponent"
<% } -%>

export interface Props {
  // Props
}

export interface ComponentProps extends Props {
  // ComponentProps
}
<% if(locals.usePrepareComponent){ -%>
export const usePrepareComponent = (props: Props): ComponentProps => {
  return {
    ...props
  }
}
<% } -%>

<% if(locals.usePrepareComponent){ -%>
export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  <%= name %>
)
<% } else {-%>
export default <%= name %>
<% } -%>
