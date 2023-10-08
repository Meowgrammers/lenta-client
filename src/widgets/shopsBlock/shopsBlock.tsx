import { FC } from 'react'
import { ShopsSearch, ResetTKButton, AllCheckbox } from '@/features'
import {
  LocationIcon,
  ShopsMock,
  useAppDispatch,
  useAppSelector,
} from '@/shared'
import { SelectedItem } from '@/widgets'

import { addSelectedItem } from '@/entities'

export const ShopsBlock: FC = () => {
  const selectedItems = useAppSelector((state) => state.shops.selectedItems)
  const dispatch = useAppDispatch()

  const handleItemSelect = (id: string) => {
    if (!selectedItems.includes(id)) {
      dispatch(addSelectedItem(id))
    }
  }

  return (
    <div className="mb-8 flex flex-col">
      <div className="mb-4 flex gap-1">
        <LocationIcon className="fill-white" />
        <p className="text-xl/[24px] font-medium">Торговые комплексы:</p>
      </div>
      <ShopsSearch shops={ShopsMock} onItemSelect={handleItemSelect} />
      <div className="flex items-center gap-1 pl-2 pt-1">
        <AllCheckbox
          checked={false}
          indeterminate={false}
          onChange={() => console.log('Выбрать все')}
        />
        <label>Выбрать все</label>
      </div>
      <div
        className={`mt-3 flex flex-wrap gap-1 ${
          selectedItems.length ? 'flex' : 'hidden'
        }`}
      >
        {selectedItems.map((item) => (
          <SelectedItem item={item} key={item} />
        ))}
      </div>
      <ResetTKButton />
    </div>
  )
}
