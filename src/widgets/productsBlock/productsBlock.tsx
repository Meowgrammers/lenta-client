import { FC } from 'react'
import { ProductIcon, Input, SearchIcon } from '@/shared'
import { ListMenu } from '@/widgets'

export const ProductsBlock: FC = () => {
  return (
    <>
      <div className="mb-4 flex gap-1">
        <ProductIcon className="fill-white" />
        <p className=" text-xl/[24px] font-medium">Товары:</p>
      </div>
      <Input
        className="mb-2 !w-[318px]"
        icon={SearchIcon}
        type="text"
        placeholder="Поиск"
      />
      <ListMenu />
    </>
  )
}
