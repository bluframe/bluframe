export interface MediaQueries {
  desktop: string
  largeDesktop: string
  tablet: string
}

const mediaQueries: MediaQueries = {
  desktop: "@media only screen and (min-width: 1024px)",
  largeDesktop: "@media only screen and (min-width: 1200px)",
  tablet: "@media only screen and (min-width: 768px)"
}

export default mediaQueries
