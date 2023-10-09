import { Button, PAGES } from '@/shared'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import notfound from '@/assets/images/notfound.png'
import serverError from '@/assets/images/serverError.png'

import { ErrorPageProps } from '@/pages'

export const ErrorBlock: FC<ErrorPageProps> = ({ code }) => {
  const navigate = useNavigate()

  let errorMessage = ''
  let errorImage = null

  switch (code) {
    case 404:
      errorMessage = 'Страница не найдена'
      errorImage = notfound
      break
    case 500:
      errorMessage = 'Проблема с сервером'
      errorImage = serverError
      break
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-max flex-col items-center justify-center gap-6">
        {errorImage && <img src={errorImage} alt={String(code)} />}
        <p className="text-[2.5rem] font-medium leading-[44px] text-[#4d4d4d]/[.56]">
          {errorMessage}
        </p>
        <Button
          variant="primary"
          className="mt-4 w-[188px] rounded-lg border-[#003d96] bg-[#003d96] hover:border-[#002773] hover:bg-[#002773]"
          onClick={() => navigate(PAGES.MAIN)}
        >
          Вернуться на главную
        </Button>
      </div>
    </div>
  )
}
