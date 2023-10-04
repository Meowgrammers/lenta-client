import { FC } from 'react'

import { resetSelectedItems } from '@/entities'

import { useAppDispatch, Button } from '@/shared'

export const ResetTKButton: FC = () => {
  const dispatch = useAppDispatch()

  const handleResetItems = () => {
    dispatch(resetSelectedItems())
  }

  return (
    <Button
      onClick={handleResetItems}
      className="mt-6 h-10 border-white text-white hover:bg-white/[0.16] hover:text-white active:bg-color-back-primary-on-blue"
      variant="secondary"
    >
      Сбросить
    </Button>
  )
}
