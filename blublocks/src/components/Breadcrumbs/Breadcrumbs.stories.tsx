import { Meta, StoryObj } from "@storybook/react"
import Breadcrumbs from "components/Breadcrumbs"
import theme from "styles/theme"

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "Components/Breadcrumbs"
}

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/electronics", label: "Electronics" },
      { href: "/electronics/tvs", label: "TVs" },
      { href: "/electronics/tvs/4k", label: "4K TVs" }
    ]
  }
}

export const SingleItem: Story = {
  ...Default,
  args: {
    items: [{ href: "/", label: "Home" }]
  }
}

export const NoLinks: Story = {
  ...Default,
  args: {
    items: [
      { label: "Home" },
      { label: "Electronics" },
      { label: "TVs" },
      { label: "4K TVs" }
    ]
  }
}

export const CustomLink: Story = {
  ...Default,
  args: {
    LinkComponent: ({ href, children }) => (
      <a href={href} style={{ color: theme.palette.info.main }}>
        {children}
      </a>
    ),
    items: [
      { href: "/", label: "Home" },
      { href: "/electronics", label: "Electronics" },
      { href: "/electronics/tvs", label: "TVs" },
      { href: "/electronics/tvs/4k", label: "4K TVs" }
    ]
  }
}

export default meta
