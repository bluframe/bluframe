// @flow

import Button, { type Props } from "components/buttons/Button"
import styled, { type StyledComponent } from "styled-components"
import Icon from "components/Icon"
import React from "react"
import type { Theme } from "@bluframe/blublocks"
import mediaQueries from "styles/mediaQueries"

const stories = {
  argTypes: {
    bold: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    expanded: { control: { type: "boolean" } },
    loading: { control: { type: "boolean" } },
    onClick: { action: "button click" },
    outlined: { control: { type: "boolean" } },
    padded: { control: { type: "boolean" } },
    secondary: { control: { type: "boolean" } },
    small: { control: { type: "boolean" } }
  },
  component: Button,
  title: "Buttons/Button"
}

const Template = (args: Props) => <Button {...args} />

const ExpandedWrapper: StyledComponent<
  {||},
  Theme,
  HTMLDivElement
> = styled.div`
  width: 300px;

  ${mediaQueries.tablet} {
    width: 300px;
  }
`

// eslint-disable-next-line react/no-multi-comp
const ExpandedTemplate = (args: Props) => (
  <ExpandedWrapper>
    <Button {...args} />
  </ExpandedWrapper>
)

export const Default: any = Template.bind({})
Default.args = {
  label: "Button"
}

export const Bold: any = Template.bind({})
Bold.args = {
  bold: true,
  label: "Button"
}

export const Disabled: any = Template.bind({})
Disabled.args = {
  disabled: true,
  label: "Button"
}

export const Loading: any = Template.bind({})
Loading.args = {
  label: "Button",
  loading: true
}

export const IconEnd: any = Template.bind({})
IconEnd.args = {
  iconEnd: <Icon name="cloudOutline" />,
  label: "Button"
}

export const IconStart: any = Template.bind({})
IconStart.args = {
  iconStart: <Icon name="cloudOutline" />,
  label: "Button"
}

export const NoHoverHighlight: any = Template.bind({})
NoHoverHighlight.args = {
  label: "Button",
  noHoverHighlight: true
}

export const Outlined: any = Template.bind({})
Outlined.args = {
  label: "Button",
  outlined: true
}

export const Padded: any = Template.bind({})
Padded.args = {
  label: "Button",
  padded: true
}

export const Expanded: any = ExpandedTemplate.bind({})
Expanded.args = {
  expanded: true,
  label: "Button"
}

export const Secondary: any = Template.bind({})
Secondary.args = {
  label: "Button",
  secondary: true
}

export const Small: any = Template.bind({})
Small.args = {
  label: "Button",
  small: true
}

export default stories
