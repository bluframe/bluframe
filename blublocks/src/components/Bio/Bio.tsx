/* eslint-disable no-ternary, no-nested-ternary */

import { Name, NameAndSocialLinks, Section, Top } from "./styled"
import { ComponentProps } from "."
import Content from "components/Content"
import Link from "components/Typography/Link"
import SocialLinks from "components/SocialLinks"

const Bio = ({
  LinkComponent = Link,
  components,
  description,
  image,
  isAvatarCircle,
  isShowName = true,
  name,
  socialLinks,
  url
}: ComponentProps) => (
  <Section aria-label={name} role="region">
    <Top $isAvatarCircle={isAvatarCircle} $isShowName={isShowName}>
      {url ? <LinkComponent href={url}>{image}</LinkComponent> : image}
      {isShowName ? (
        <NameAndSocialLinks>
          {isShowName ? (
            url ? (
              <LinkComponent href={url}>
                <Name>{name}</Name>
              </LinkComponent>
            ) : (
              <Name>{name}</Name>
            )
          ) : null}
        </NameAndSocialLinks>
      ) : null}
    </Top>

    {socialLinks ? <SocialLinks {...socialLinks} /> : null}

    <Content components={components} content={description} />
  </Section>
)

export default Bio
