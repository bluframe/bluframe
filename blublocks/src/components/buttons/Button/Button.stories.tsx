import Button, { type Props } from "components/buttons/Button"
import Icon from "components/Icon"
import { StoryObj } from "@storybook/react"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

const meta = {
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

type Story = StoryObj<typeof Button>

const ExpandedWrapper = styled.div`
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

export const Default: Story = {
  args: {
    label: "Button"
  }
}

export const Bold: Story = {
  args: {
    bold: true,
    label: "Button"
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Button"
  }
}

export const Loading: Story = {
  args: {
    label: "Button",
    loading: true
  }
}

export const IconEnd: Story = {
  args: {
    iconEnd: <Icon name="IoArrowForward" />,
    label: "Button"
  }
}

export const IconOnly: Story = {
  args: {
    icon: <Icon name="IoArrowBack" size="24px" />,
    iconOnly: true,
    label: "Go back"
  }
}

export const IconOnlyRaisedAndRounded: Story = {
  args: {
    icon: <Icon name="IoArrowBack" size="24px" />,
    iconOnly: true,
    label: "Go back",
    raised: true,
    rounded: true
  }
}

export const IconOnlyRounded: Story = {
  args: {
    icon: <Icon name="IoArrowBack" size="24px" />,
    iconOnly: true,
    label: "Go back",
    rounded: true
  }
}

export const IconStart: Story = {
  args: {
    iconStart: <Icon name="IoArrowBack" />,
    label: "Button"
  }
}

export const NoHoverHighlight: Story = {
  args: {
    label: "Button",
    noHoverHighlight: true
  }
}

export const Outlined: Story = {
  args: {
    label: "Button",
    outlined: true
  }
}

export const Padded: Story = {
  args: {
    label: "Button",
    padded: true
  }
}

export const Expanded: Story = {
  args: {
    expanded: true,
    label: "Button"
  },
  render: ExpandedTemplate
}

export const Secondary: Story = {
  args: {
    label: "Button",
    secondary: true
  }
}

export const Small: Story = {
  args: {
    label: "Button",
    small: true
  }
}

export const TransparentIconOnly: Story = {
  args: {
    icon: <Icon name="IoArrowBack" size="24px" />,
    iconOnly: true,
    label: "Go back",
    transparent: true
  }
}

export default meta
