import { Name, Section, Top } from "./styled"
import { ComponentProps } from "."
import Content from "components/Content"
import React from "react"

const Bio = ({ components, description, image, name }: ComponentProps) => (
  <Section>
    <Top>
      {image}
      <Name>{name}</Name>
    </Top>

    <Content components={components} content={description} />
  </Section>
)

export default Bio
