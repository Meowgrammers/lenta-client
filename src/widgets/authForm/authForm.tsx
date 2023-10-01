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
    <div className="flex flex-col justify-center items-center w-full h-screen text-secondary bg-blueMain">
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
            className="!rounded-full p-[13px] bg-white mt-[28px] hover:bg-white mx-auto hover:px-[20px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <span className="flex mr-[6px] text-[#2c2a29] text-lg leading-6">
                Войти
              </span>
            )}
          </Button>
          <Button
            variant="light"
            className="mt-[40px] mx-auto text-white underline font-semibold text-sm/[16px] hover:text-[#d7dcf1] "
          >
            Забыли пароль?
          </Button>
        </form>
      </div>
    </div>
  )
}
