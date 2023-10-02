import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Logo, Input, Button, ArrowIcon } from '@/shared'

export const AuthForm: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    navigate('/')
    console.log('Form submitted')
  }

  return (
    <div className="text-secondary flex h-screen w-full flex-col items-center justify-center bg-blueMain">
      <div className="flex flex-col items-center gap-[80px]">
        <Logo />
        <form
          className="flex flex-col items-start"
          name="auth"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            placeholder="введите почту"
            errorMessage="Некорректный email"
            error={true}
          />
          <Input
            type="password"
            placeholder="введите пароль"
            className="mt-[28px]"
          />

          <Button
            icon={ArrowIcon}
            iconPosition="right"
            type="submit"
            className="mx-auto mt-[28px] !rounded-full bg-white p-[13px] hover:bg-white hover:px-[20px]"
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
            className="mx-auto mt-[40px] text-sm/[16px] font-semibold text-white underline hover:text-[#d7dcf1] "
          >
            Забыли пароль?
          </Button>
        </form>
      </div>
    </div>
  )
}
