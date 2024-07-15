import type { ComponentProps } from "."
import React from "react"
import ReactMarkdown from "react-markdown"
import { Wrapper } from "./styled"

const Content = ({
  className,
  components,
  content,
  rehypePlugins,
  remarkPlugins
}: ComponentProps) => (
  <Wrapper className={className}>
    <ReactMarkdown
      components={components}
      rehypePlugins={rehypePlugins}
      remarkPlugins={remarkPlugins}
    >
      {content}
    </ReactMarkdown>
  </Wrapper>
)

export default Content
