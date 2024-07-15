/* eslint-disable no-ternary */

import { Container, Form, Heading, Inputs } from "./styled"
import Button from "components/buttons/Button"
import { ComponentProps } from "."
import InputText from "components/inputs/InputText"
import React from "react"

const Login = ({
  isLoading,
  name,
  onSubmit,
  passwordRef,
  usernameLabel,
  usernameRef
}: ComponentProps) => (
  <Container>
    {name ? <Heading>{name}</Heading> : null}
    <Form onSubmit={onSubmit}>
      <Inputs>
        <InputText
          inputId="username"
          label={usernameLabel ?? "Username"}
          name="username"
          ref={usernameRef}
          required
          type="email"
        />

        <InputText
          inputId="password"
          label="Password"
          name="password"
          ref={passwordRef}
          required
          type="password"
        />
      </Inputs>

      <Button
        disabled={isLoading}
        label="Login"
        loading={isLoading}
        type="submit"
      />
    </Form>
  </Container>
)

export default Login
