import { FC, useState } from 'react'

import { RollUpIcon } from '@/shared'

export const RollUpButton: FC<{
  handleToggleMenu: () => void
  isMenuExpanded: boolean
}> = ({ handleToggleMenu, isMenuExpanded }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onClick={handleToggleMenu}
      className="my-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RollUpIcon
        className={`h-[24px] w-[24px] cursor-pointer ${
          isMenuExpanded ? '' : 'rotate-180'
        }`}
        fill={isHovered ? '#002773' : 'white'}
      />
    </div>
  )
}
