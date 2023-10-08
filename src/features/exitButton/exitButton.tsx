import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ExitIcon, useAppSelector } from '@/shared'
import { useLogoutMutation } from '@/entities/user/api/userApi'

export const ExitButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const token = useAppSelector((state) => state.user.token)
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  const handleExit = async () => {
    const response = await logout({ auth_token: token })
    const isError = 'error' in response

    if (!isError) {
      navigate('/auth')
    } else {
      console.log(isError)
    }
  }

  return (
    <div
      onClick={handleExit}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ExitIcon
        className="h-[24px] w-[24px] cursor-pointer"
        fill={isHovered ? '#002773' : 'white'}
      />
    </div>
  )
}
