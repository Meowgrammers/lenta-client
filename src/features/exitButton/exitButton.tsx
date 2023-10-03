import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ExitIcon } from '@/shared'

export const ExitButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const handleExit = () => {
    console.log('выйти')
    navigate('/auth')
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
