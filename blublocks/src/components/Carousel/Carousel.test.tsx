/* eslint-disable max-lines-per-function */

import { fireEvent, render, screen } from "tests"
import Carousel from "./Carousel"
import { ComponentProps } from "."

describe("Carousel", () => {
  const props: ComponentProps = {
    children: [
      <img
        alt="Slide 1"
        key="1"
        src="https://storage.googleapis.com/pod_public/1300/182334.jpg"
      />,
      <img
        alt="Slide 2"
        key="2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpvPc_uN9t_MWLJqsZWOsP45ZZY5sNchRcw&s"
      />,
      <img
        alt="Slide 3"
        key="3"
        src="https://cache.desktopnexus.com/thumbseg/1208/1208379-bigthumbnail.jpg"
      />,
      <img
        alt="Slide 4"
        key="4"
        src="https://as2.ftcdn.net/v2/jpg/05/49/38/57/1000_F_549385757_wReK4GsDWPd0iC0fhxPYH8fKPNquxq7c.jpg"
      />,
      <img
        alt="Slide 5"
        key="5"
        src="https://favim.com/pd/s4/orig/50/colorful-flowers-photography-pretty-rainbow-Favim.com-454050.jpg"
      />
    ],
    onNext: jest.fn(),
    onPrev: jest.fn(),
    onTouchEnd: jest.fn(),
    onTouchMove: jest.fn(),
    onTouchStart: jest.fn(),
    slidesToShow: 3,
    translateX: 0
  }

  it("renders with default slides", () => {
    render(<Carousel {...props} />)
    expect(screen.getByRole("button", { name: "Prev" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument()
  })

  it("renders with slides", () => {
    render(<Carousel {...props} />)
    expect(screen.getByRole("img", { name: "Slide 1" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Slide 2" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Slide 3" })).toBeInTheDocument()
  })

  it("triggers next slide on click", () => {
    render(<Carousel {...props} />)
    const nextButton = screen.getByRole("button", { name: "Next" })
    fireEvent.click(nextButton)
    expect(screen.getByRole("img", { name: "Slide 4" })).toBeInTheDocument()
  })

  it("triggers prev slide on click", () => {
    render(<Carousel {...props} />)
    const nextButton = screen.getByRole("button", { name: "Next" })
    fireEvent.click(nextButton)
    const prevButton = screen.getByRole("button", { name: "Prev" })
    fireEvent.click(prevButton)
    expect(screen.getByRole("img", { name: "Slide 1" })).toBeInTheDocument()
  })

  it("renders with swipe gestures", () => {
    render(<Carousel {...props} />)
    const carousel = screen.getByRole("region")
    fireEvent.touchStart(carousel, { touches: [{ clientX: 100 }] })
    fireEvent.touchMove(carousel, { touches: [{ clientX: 200 }] })
    fireEvent.touchEnd(carousel)
    expect(screen.getByRole("img", { name: "Slide 4" })).toBeInTheDocument()
  })
})
