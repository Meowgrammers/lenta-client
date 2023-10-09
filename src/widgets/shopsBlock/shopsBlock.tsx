import { FC } from 'react'
import { ShopsSearch, ResetTKButton, AllCheckbox } from '@/features'
import {
  LocationIcon,
  ShopsMock,
  useAppDispatch,
  useAppSelector,
} from '@/shared'
import { SelectedItem } from '@/widgets'

import { addAllItems, addSelectedItem } from '@/entities'

export const ShopsBlock: FC = () => {
  // useFetchShopsQuery({ page: 1, limit: 12 })
  // const shops = useAppSelector((state) => state.shops.allItems)
  const shops = ShopsMock.map((item) => item.id)
  const selectedItems = useAppSelector((state) => state.shops.selectedItems)
  const dispatch = useAppDispatch()

  const handleItemSelect = (id: string) => {
    if (!selectedItems.includes(id)) {
      dispatch(addSelectedItem(id))
    }
  }
  const handleAllSelect = () => {
    if (selectedItems.length) {
      dispatch(addAllItems([]))
    } else {
      dispatch(addAllItems(shops))
    }
  }

  return (
    <div className="mb-8 flex flex-col">
      <div className="mb-4 flex gap-1">
        <LocationIcon className="fill-white" />
        <p className="text-xl/[24px] font-medium">Торговые комплексы:</p>
      </div>
      <ShopsSearch onItemSelect={handleItemSelect} />
      <div className="flex items-center gap-1 pl-2 pt-1">
        <AllCheckbox
          checked={selectedItems === shops}
          indeterminate={
            selectedItems.length < shops.length && selectedItems.length !== 0
          }
          onChange={handleAllSelect}
        />
        <label>Выбрать все</label>
      </div>
      <div
        className={`mt-3 flex max-w-[318px] flex-wrap gap-1 ${
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
