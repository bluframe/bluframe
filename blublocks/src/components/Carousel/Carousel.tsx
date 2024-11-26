import {
  CarouselContainer,
  CarouselInner,
  CarouselSlide,
  NextButton,
  PrevButton
} from "./styled"
import { ComponentProps } from "."
import Icon from "components/Icon"

const Carousel = ({
  children,
  className,
  onNext,
  onPrev,
  onTouchEnd,
  onTouchMove,
  onTouchStart,
  slidesToShow,
  translateX
}: ComponentProps) => {
  return (
    <CarouselContainer
      aria-atomic="true"
      aria-label="Carousel"
      aria-live="polite"
      className={className}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      role="region"
    >
      <CarouselInner $translateX={translateX}>
        {children.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CarouselSlide $slidesToShow={slidesToShow} key={index}>
            {child}
          </CarouselSlide>
        ))}
      </CarouselInner>
      <PrevButton
        icon={<Icon group="io5" name="IoChevronBack" size="36px" />}
        iconOnly
        label="Prev"
        noHoverHighlight
        onClick={onPrev}
      />
      <NextButton
        icon={<Icon group="io5" name="IoChevronForward" size="36px" />}
        iconOnly
        label="Next"
        noHoverHighlight
        onClick={onNext}
      />
    </CarouselContainer>
  )
}

export default Carousel
