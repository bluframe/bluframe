// @flow

import { Image, Name, Right, Section } from "./styled"
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
    <Image alt={name} src={avatar} />

    <Right>
      <Name>{name}</Name>

      <Content components={components} content={description} />
    </Right>
  </Section>
)

export default Bio
