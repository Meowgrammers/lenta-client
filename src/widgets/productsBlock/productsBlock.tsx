import { FC } from 'react'
import { ProductIcon } from '@/shared'
import { ListMenu } from '@/widgets'

export const ProductsBlock: FC = () => {
  return (
    <>
      <div className="mb-4 flex gap-1">
        <ProductIcon />
        <p className="text-xl/[24px] font-medium">Товары:</p>
      </div>
      <ListMenu />
    </>
  )
}
