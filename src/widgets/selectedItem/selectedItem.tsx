import { FC } from 'react'

import { DeleteButton } from '@/features'

interface SelectedItemProps {
  item: string
}

export const SelectedItem: FC<SelectedItemProps> = ({ item }) => {
  return (
    <div className="item flex w-[157px] cursor-default gap-1 rounded-full bg-white/[0.16] px-3 py-1 hover:bg-white/[0.4] active:bg-[#002773]">
      <p className="overflow-hidden text-ellipsis pt-[1px] text-selected-item">
        {item}
      </p>
      <DeleteButton id={item} />
    </div>
  )
}
