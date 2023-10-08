import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Logo, Input, Button, ArrowIcon } from '@/shared'
import { useLoginMutation } from '@/entities/user/api/userApi'
import { yupSchemaAuthForm } from './lib/validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginRequest } from '@/entities/user/api/types'

export const AuthForm: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  type FormData = yup.InferType<typeof yupSchemaAuthForm>
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    mode: 'onChange',
    resolver: yupResolver(yupSchemaAuthForm),
  })

  const onSubmit: SubmitHandler<LoginRequest> = async (data: FormData) => {
    const response = await login(data)
    console.log(response)
    const isError = 'error' in response

    if (!isError) {
      navigate('/')
    } else {
      console.log(isError)
    }
  }

  return (
    <div className="text-secondary flex h-screen w-full flex-col items-center justify-center bg-blueMain">
      <div className="flex flex-col items-center gap-[80px]">
        <Logo />
        <form
          className="flex flex-col items-start"
          name="auth"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            placeholder="введите username"
            errorMessage={errors.username?.message}
            {...register('username')}
            isError={!!errors.username?.message}
            required
          />
          <Input
            type="password"
            placeholder="введите пароль"
            className="mt-[28px]"
            {...register('password')}
            isError={!!errors.password?.message}
            errorMessage={errors.password?.message}
            required
          />

          <Button
            icon={ArrowIcon}
            iconPosition="right"
            type="submit"
            className="mx-auto mt-[28px] !rounded-full border-none bg-white p-[13px] hover:bg-white hover:px-[20px] active:bg-[#002773] active:text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <span className="mr-[6px] flex text-lg leading-6 text-[#2c2a29]">
                Войти
              </span>
            )}
          </Button>
          <Button
            variant="light"
            className="mx-auto mt-[40px] border-none text-sm/[16px] font-semibold text-white underline hover:text-[#d7dcf1] "
          >
            Забыли пароль?
          </Button>
        </form>
      </div>
    </div>
  )
}
