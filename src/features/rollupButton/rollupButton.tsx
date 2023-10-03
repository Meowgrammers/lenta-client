import { FC, useState } from 'react'

import { RollUpIcon } from '@/shared'

export const RollUpButton: FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const handleRollup = () => {
    console.log('свернуть')
  }
  return (
    <div
      onClick={handleRollup}
      className="my-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RollUpIcon
        className="h-[24px] w-[24px] cursor-pointer"
        fill={isHovered ? '#002773' : 'white'}
      />
    </div>
  )
}
