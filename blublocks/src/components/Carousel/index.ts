"use client"
/* eslint-disable max-lines-per-function, max-statements */

import React, { useEffect, useState } from "react"
import Carousel from "./Carousel"
import prepareComponent from "@bluframe/grapple/prepareComponent"

export interface Props {
  children: React.ReactNode
  className?: string
  slidesToShow?: number
  slidesToScroll?: number
}

export interface ComponentProps extends Omit<Props, "slidesToScroll"> {
  children: React.ReactNode[]
  onNext: () => void
  onPrev: () => void
  // eslint-disable-next-line no-unused-vars
  onTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void
  // eslint-disable-next-line no-unused-vars
  onTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void
  onTouchEnd: () => void
  slidesToShow: number
  translateX: number
}

const DEFAULT_SLIDES_TO_SCROLL = 1
const DEFAULT_SLIDES_TO_SHOW = 1

const DEFAULT_ACTIVE_INDEX = 0
const DEFAULT_TRANSLATE_X = 0

const FIRST = 0
const TOTAL = 100
const HALF = 50

const usePrepareComponent = ({
  children,
  slidesToScroll = DEFAULT_SLIDES_TO_SCROLL,
  slidesToShow = DEFAULT_SLIDES_TO_SHOW,
  ...props
}: Props): ComponentProps => {
  // If children isn't an array throw error
  if (!Array.isArray(children)) {
    throw new Error("Children must be an array of React nodes")
  }

  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX)
  const [translateX, setTranslateX] = useState(DEFAULT_TRANSLATE_X)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchMove, setTouchMove] = useState<number | null>(null)

  useEffect(() => {
    const onResize = () => {
      setTranslateX(-activeIndex * (TOTAL / slidesToShow))
    }

    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [activeIndex, slidesToShow])

  useEffect(() => {
    setTranslateX(-activeIndex * (TOTAL / slidesToShow))
  }, [activeIndex, slidesToShow])

  const onNext = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex + slidesToScroll) % children?.length
    )
  }

  const onPrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - slidesToScroll + children?.length) % children?.length
    )
  }

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.touches[FIRST].clientX)
  }

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchMove(event.touches[FIRST].clientX)
  }

  const onTouchEnd = () => {
    if (touchStart && touchMove) {
      const swipeDistance = touchMove - touchStart
      if (swipeDistance > HALF) {
        onPrev()
      } else if (swipeDistance < -HALF) {
        onNext()
      }
    }
    setTouchStart(null)
    setTouchMove(null)
  }

  return {
    ...props,
    children,
    onNext,
    onPrev,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    slidesToShow,
    translateX
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Carousel
)
