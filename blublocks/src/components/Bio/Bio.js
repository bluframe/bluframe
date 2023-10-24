// @flow

import { Image, Name, Section, Top } from "./styled"
import type { ComponentProps } from "."
import Content from "components/Content"
import React from "react"

const Bio = ({
  avatar,
  components,
  description,
  name
}: ComponentProps): React$Node => (
  <Section>
    <Top>
      <Image alt={name} src={avatar} />
      <Name>{name}</Name>
    </Top>

    <Content components={components} content={description} />
  </Section>
)

export default Bio
