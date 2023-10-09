import { FC } from 'react'

import { resetSelectedItems } from '@/entities'

import { useAppDispatch, useAppSelector, Button } from '@/shared'

export const ResetTKButton: FC = () => {
  const dispatch = useAppDispatch()
  const selectedItems = useAppSelector((state) => state.shops.selectedItems)

  const handleResetItems = () => {
    dispatch(resetSelectedItems())
  }

  return (
    <Button
      onClick={handleResetItems}
      className={`mt-6 h-10 shadow-sm ${
        selectedItems.length === 0
          ? 'cursor-default border-white/[.40] text-white/[.40] shadow-sm'
          : ' border-white text-white hover:bg-white/[0.16] hover:text-white active:bg-color-back-primary-on-blue'
      }`}
      variant="secondary"
      disabled={selectedItems.length === 0}
    >
      Сбросить
    </Button>
  )
}
