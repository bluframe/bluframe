import { ComponentProps } from "."
import Icon from "components/Icon"
import Link from "components/Typography/Link"
import { Wrapper } from "./styled"

const SocialLink = ({
  iconGroup,
  iconName,
  link,
  name,
  platformName
}: ComponentProps) => (
  <Wrapper>
    <Icon group={iconGroup} name={iconName} title={platformName} />
    <Link
      aria-label={platformName}
      href={link}
      rel="noopener noreferrer"
      target="__blank"
    >
      {name}
    </Link>
  </Wrapper>
)

export default SocialLink
