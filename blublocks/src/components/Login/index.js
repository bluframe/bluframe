// @flow

import type { LoginProps, OnSubmitLogin } from "@bluframe/blublocks"
import Login from "./Login"
import prepareComponent from "@bluframe/grapple/prepareComponent"
import { useRef } from "react"

export type Props = {|
  ...LoginProps
|}

export type ComponentProps = {|
  ...$Diff<Props, {| +onSubmitLogin: OnSubmitLogin |}>,
  +onSubmit: (event: SyntheticEvent<>) => void,
  +passwordRef: { current: null | HTMLInputElement },
  +usernameRef: { current: null | HTMLInputElement }
|}

export const usePrepareComponent = ({
  isLoading,
  name,
  onSubmitLogin
}: Props): ComponentProps => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const onSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault()

    onSubmitLogin({
      password: passwordRef.current?.value ?? "",
      username: usernameRef.current?.value ?? ""
    })
  }

  return {
    isLoading,
    name,
    onSubmit,
    passwordRef,
    usernameRef
  }
}

export default (prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Login
): React$ComponentType<Props>)
