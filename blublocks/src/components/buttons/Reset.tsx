import styled from "styled-components"

type Props = {
  $bold?: boolean
  $expanded?: boolean
  $iconOnly?: boolean
  $noHoverHighlight?: boolean
  $outlined?: boolean
  $padded?: boolean
  $raised?: boolean
  $rounded?: boolean
  $secondary?: boolean
  $small?: boolean
  $transparent?: boolean
  disabled?: boolean
}

const Button = styled.button<Props>`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
  line-height: normal;

  outline: none;
  text-align: inherit;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;

  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none;

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  -webkit-text-size-adjust: 100%;
`
export default Button
