import { FC } from 'react'

import { Logo, Input } from '@/shared'

import { Wrapper, Form, Content } from './authForm.styles'

export const AuthForm: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Logo />
        <Form name="auth">
          <Input type="email" placeholder="введите почту" />
          <Input type="password" placeholder="введите пароль" />
        </Form>
      </Content>
    </Wrapper>
  )
}
