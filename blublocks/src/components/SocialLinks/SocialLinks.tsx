/* eslint-disable no-ternary, max-lines-per-function */

import { Li, Ul } from "./styled"
import { ComponentProps } from "."
import SocialLink from "./SocialLink"

const SocialLinks = ({
  facebook,
  instagram,
  reddit,
  twitterX,
  website,
  youtube
}: ComponentProps) => (
  <Ul aria-label="Social Links">
    {instagram ? (
      <Li aria-label="Instagram">
        <SocialLink
          iconGroup="fa6"
          iconName="FaInstagram"
          link={`https://instagram.com/${instagram}`}
          name={instagram}
          platformName="Instagram"
        />
      </Li>
    ) : null}
    {facebook ? (
      <Li aria-label="Facebook">
        <SocialLink
          iconGroup="fa6"
          iconName="FaFacebook"
          link={`https://facebook.com/${facebook}`}
          name={facebook}
          platformName="Facebook"
        />
      </Li>
    ) : null}
    {twitterX ? (
      <Li aria-label="Twitter X">
        <SocialLink
          iconGroup="fa6"
          iconName="FaXTwitter"
          link={`https://twitter.com/${twitterX}`}
          name={twitterX}
          platformName="Twitter X"
        />
      </Li>
    ) : null}
    {youtube ? (
      <Li aria-label="YouTube">
        <SocialLink
          iconGroup="fa6"
          iconName="FaYoutube"
          link={`https://youtube.com/${youtube}`}
          name={youtube}
          platformName="YouTube"
        />
      </Li>
    ) : null}
    {reddit ? (
      <Li aria-label="Reddit">
        <SocialLink
          iconGroup="fa6"
          iconName="FaReddit"
          link={`https://reddit.com/user/${reddit}`}
          name={reddit}
          platformName="Reddit"
        />
      </Li>
    ) : null}
    {website ? (
      <Li aria-label="Website">
        <SocialLink
          iconGroup="io5"
          iconName="IoGlobeOutline"
          link={website}
          name={website.replace(/https?:\/\//u, "")}
          platformName="Website"
        />
      </Li>
    ) : null}
  </Ul>
)

export default SocialLinks
