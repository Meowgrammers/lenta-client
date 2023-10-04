import { FC } from 'react'

import { removeSelectedItem } from '@/entities'

import { DeleteIcon, useAppDispatch } from '@/shared'

interface DeleteButtonProps {
  id: string
}

export const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch()

  const handleItemRemove = () => {
    dispatch(removeSelectedItem(id))
  }

  return (
    <div onClick={handleItemRemove} className="cursor-pointer">
      <DeleteIcon />
    </div>
  )
}
