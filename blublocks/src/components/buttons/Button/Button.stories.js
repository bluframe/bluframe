// @flow

import Button, { type Props } from "components/buttons/Button"
import styled, { type StyledComponent } from "styled-components"
import Icon from "components/Icon"
import React from "react"
import type { Story } from "@storybook/react"
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

export const Default: Story<Props> = Template.bind({})
Default.args = {
  label: "Button"
}

export const Bold: Story<Props> = Template.bind({})
Bold.args = {
  bold: true,
  label: "Button"
}

export const Disabled: Story<Props> = Template.bind({})
Disabled.args = {
  disabled: true,
  label: "Button"
}

export const Loading: Story<Props> = Template.bind({})
Loading.args = {
  label: "Button",
  loading: true
}

export const IconEnd: Story<Props> = Template.bind({})
IconEnd.args = {
  iconEnd: <Icon name="IoArrowForward" />,
  label: "Button"
}

export const IconOnly: Story<Props> = Template.bind({})
IconOnly.args = {
  icon: <Icon name="IoArrowBack" size="24px" />,
  iconOnly: true,
  label: "Go back"
}

export const IconStart: Story<Props> = Template.bind({})
IconStart.args = {
  iconStart: <Icon name="IoArrowBack" />,
  label: "Button"
}

export const NoHoverHighlight: Story<Props> = Template.bind({})
NoHoverHighlight.args = {
  label: "Button",
  noHoverHighlight: true
}

export const Outlined: Story<Props> = Template.bind({})
Outlined.args = {
  label: "Button",
  outlined: true
}

export const Padded: Story<Props> = Template.bind({})
Padded.args = {
  label: "Button",
  padded: true
}

export const Expanded: Story<Props> = ExpandedTemplate.bind({})
Expanded.args = {
  expanded: true,
  label: "Button"
}

export const Secondary: Story<Props> = Template.bind({})
Secondary.args = {
  label: "Button",
  secondary: true
}

export const Small: Story<Props> = Template.bind({})
Small.args = {
  label: "Button",
  small: true
}

export const TransparentIconOnly: Story<Props> = Template.bind({})
TransparentIconOnly.args = {
  icon: <Icon name="IoArrowBack" size="24px" />,
  iconOnly: true,
  label: "Go back",
  transparent: true
}

export default stories
