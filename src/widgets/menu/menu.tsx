import { FC, useState } from 'react'
import { ProductsBlock, ProfileBlock, MenuTitle, ShopsBlock } from '@/widgets'
import { ExitButton, RollUpButton } from '@/features'
import { LocationIcon, LogoMini, ProductIcon } from '@/shared'

export const Menu: FC = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true)
  const handleToggleMenu = () => {
    setIsMenuExpanded((prevExpanded) => !prevExpanded)
  }
  return (
    <>
      {isMenuExpanded ? (
        <div className="flex flex-col bg-color-back-secondary px-8 py-6 text-white">
          <MenuTitle
            handleToggleMenu={handleToggleMenu}
            isMenuExpanded={isMenuExpanded}
          />
          <ProfileBlock />
          <ShopsBlock />
          <ProductsBlock />
        </div>
      ) : (
        <div className="flex w-[80px] flex-col items-center gap-10 bg-color-back-secondary px-4 py-6 ">
          <div className="flex flex-col items-center gap-4">
            <LogoMini />
            <RollUpButton
              handleToggleMenu={handleToggleMenu}
              isMenuExpanded={isMenuExpanded}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="h-6 w-6 rounded-full bg-white"></div>
            <ExitButton />
          </div>
          <div
            className="flex flex-col items-center gap-4"
            onClick={() => setIsMenuExpanded(true)}
          >
            <LocationIcon className="cursor-pointer" />
            <ProductIcon className="cursor-pointer" />
          </div>
        </div>
      )}
    </>
  )
}
