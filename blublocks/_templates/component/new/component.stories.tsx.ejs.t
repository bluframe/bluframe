---
to: "<%= path ? `src/components/${path}/${name}/${name}.stories.tsx` : `src/components/${name}/${name}.stories.tsx` %>"
---
import { Meta, StoryObj } from "@storybook/react"
<% if(locals.path){ -%>
import <%= name %> from "components/<%= path %>/<%= name %>"
<% } else {-%>
import <%= name %> from "components/<%= name %>"
<% } -%>
import renderStoriesWrapper from "helpers/renderStoriesWrapper"

const meta: Meta<typeof <%= name %>> = {
  component: <%= name %>,
  title: "<%= name %>/<%= name %>"
}

type Story = StoryObj<typeof <%= name %>>

export const Default: Story = {
  args: {
    // default story props
  },
  render: renderStoriesWrapper(<%= name %>)
}

export default meta
