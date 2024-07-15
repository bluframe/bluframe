/* eslint-disable max-lines-per-function */

import { prepareComponent, useTrimText } from "@bluframe/grapple"
import Content from "./Content"
import React from "react"
import strip from "strip-markdown"

// Find a better solution other than any
export interface ContentComponents {
  // eslint-disable-next-line no-unused-vars
  [tag: string]: (props: any) => any
}

export interface Props {
  className?: string
  components?: ContentComponents
  content: string
  max?: number
  paragraphAs?: string
  stripMarkdown?: boolean
}

export interface ComponentProps
  extends Omit<Props, "max" | "paragraphAs" | "stripMarkdown"> {
  rehypePlugins: any[]
  remarkPlugins: any[]
}

const usePrepareComponent = ({
  className,
  components: overrideComponents = {},
  content,
  max = Infinity,
  paragraphAs,
  stripMarkdown
}: Props): ComponentProps => {
  const components: ContentComponents = {}

  if (paragraphAs) {
    // eslint-disable-next-line react/display-name, no-unused-vars, id-length
    components.p = ({ node, ...props }) =>
      React.createElement(paragraphAs, props)
  }

  const remarkPlugins = []

  if (stripMarkdown) {
    remarkPlugins.push(strip)
  }

  const rehypePlugins: any[] = []

  return {
    className,
    components: {
      ...components,
      ...overrideComponents
    },
    content: useTrimText(content, max),
    rehypePlugins,
    remarkPlugins
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Content
)
