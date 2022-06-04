// @flow

import Flip from "./Flip"

export type Props = {|
  +children: React$Node,
  +flip: "X" | "Y",
  +isAnimated: boolean
|}

export type ComponentProps = {|
  +children: React$Node,
  +flip: "X" | "Y",
  +isAnimated: boolean
|}

export default Flip
