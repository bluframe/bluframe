import { Meta, StoryObj } from "@storybook/react"
import Carousel from "components/Carousel"
import mediaQueries from "styles/mediaQueries"
import styled from "styled-components"

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  title: "Components/Carousel"
}

const Wrapper = styled.div`
  width: 100%;

  ${mediaQueries.tablet} {
    width: 360px;
  }
`

const Image = styled.img`
  width: 100%;
`

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  args: {
    children: [
      <Image
        key="1"
        src="https://storage.googleapis.com/pod_public/1300/182334.jpg"
      />,
      <Image
        key="2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpvPc_uN9t_MWLJqsZWOsP45ZZY5sNchRcw&s"
      />,
      <Image
        key="3"
        src="https://cache.desktopnexus.com/thumbseg/1208/1208379-bigthumbnail.jpg"
      />,
      <Image
        key="4"
        src="https://as2.ftcdn.net/v2/jpg/05/49/38/57/1000_F_549385757_wReK4GsDWPd0iC0fhxPYH8fKPNquxq7c.jpg"
      />,
      <Image
        key="5"
        src="https://favim.com/pd/s4/orig/50/colorful-flowers-photography-pretty-rainbow-Favim.com-454050.jpg"
      />
    ],
    slidesToScroll: 1,
    slidesToShow: 3
  },
  render: (props) => (
    <Wrapper>
      <Carousel {...props} />
    </Wrapper>
  )
}

export const SingleSlide: Story = {
  ...Default,
  args: {
    ...Default.args,
    slidesToScroll: 1,
    slidesToShow: 1
  }
}

export const MultipleSlidesToScroll: Story = {
  ...Default,
  args: {
    ...Default.args,
    slidesToScroll: 2
  }
}

export default meta
