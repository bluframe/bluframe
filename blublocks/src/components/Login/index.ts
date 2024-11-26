"use client"

import { FormEventHandler, RefObject, useRef } from "react"
import Login from "./Login"
import prepareComponent from "@bluframe/grapple/prepareComponent"

export interface LoginInput {
  password: string
  username: string
}

// eslint-disable-next-line no-unused-vars
export type OnSubmitLogin = (login: LoginInput) => void

export interface LoginProps {}

export interface Props {
  isLoading?: boolean
  name?: string
  onSubmitLogin: OnSubmitLogin
  usernameLabel?: string
}

export interface ComponentProps extends Omit<Props, "onSubmitLogin"> {
  onSubmit: FormEventHandler
  passwordRef: RefObject<HTMLInputElement>
  usernameRef: RefObject<HTMLInputElement>
}

export const usePrepareComponent = ({
  isLoading,
  name,
  onSubmitLogin,
  usernameLabel
}: Props): ComponentProps => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const onSubmit: FormEventHandler = (event) => {
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
    usernameLabel,
    usernameRef
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  Login
)
