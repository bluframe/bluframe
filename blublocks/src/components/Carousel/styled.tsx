import Button from "components/buttons/Button"
import styled from "styled-components"

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
`

export const CarouselInner = styled.div<{ $translateX: number }>`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  transform: ${({ $translateX }) => `translateX(${$translateX}%)`};
  transition: transform 0.3s ease-out;
`

export const CarouselSlide = styled.div<{ $slidesToShow: number }>`
  flex: 0 0 auto;
  width: ${({ $slidesToShow }) => `calc(100% / ${$slidesToShow})`};
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const NextButton = styled(NavButton)`
  right: 0;
`

export const PrevButton = styled(NavButton)`
  left: 0;
`
