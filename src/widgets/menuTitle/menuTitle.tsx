import { FC } from 'react'
import { RollUpButton } from '@/features'
import { LogoMenuIcon } from '@/shared'

export const MenuTitle: FC<{
  handleToggleMenu: () => void
  isMenuExpanded: boolean
}> = ({ handleToggleMenu, isMenuExpanded }) => {
  return (
    <div className="mb-10 flex justify-between">
      <LogoMenuIcon />
      <RollUpButton
        handleToggleMenu={handleToggleMenu}
        isMenuExpanded={isMenuExpanded}
      />
    </div>
  )
}
