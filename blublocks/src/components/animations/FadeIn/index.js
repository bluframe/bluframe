// @flow

import FadeIn from "./FadeIn"

export type Props = {|
  +children: React$Node,
  +fadeIn: "Left" | "Right" | "Up",
  +isAnimated: boolean
|}

export type ComponentProps = {|
  +children: React$Node,
  +fadeIn: "Left" | "Right" | "Up",
  +isAnimated: boolean
|}

export default FadeIn
