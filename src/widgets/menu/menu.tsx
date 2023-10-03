import {
  DeleteButton,
  ExitButton,
  ListMenu,
  RollUpButton,
  ShopsSearch,
} from '@/features'
import {
  Button,
  LocationIcon,
  LogoMenuIcon,
  ProductIcon,
  ShopsMock,
  useAppDispatch,
  useAppSelector,
} from '@/shared'
import { FC } from 'react'

import { addSelectedItem } from '@/entities'

export const Menu: FC = () => {
  const selectedItems = useAppSelector((state) => state.shops.selectedItems)
  const dispatch = useAppDispatch()
  console.log(selectedItems)

  const handleItemSelect = (id: string) => {
    if (!selectedItems.includes(id)) {
      dispatch(addSelectedItem(id))
    }
  }

  return (
    <div className="flex w-[382px] flex-col bg-color-back-secondary px-8 py-6 text-white">
      <div className="mb-10 flex justify-between">
        <LogoMenuIcon />
        <RollUpButton />
      </div>
      <div className=" mb-8 flex justify-between gap-2 rounded-2xl bg-white/[0.16] p-3">
        <div className="h-10 w-10 rounded-full bg-white"></div>
        <div className="flex flex-col gap-[2px] pr-3">
          <p className="text-profile-title font-semibold">
            София Павлова-Печерская
          </p>
          <p className="text-selected-item">Старший менеджер</p>
        </div>
        <ExitButton />
      </div>
      <div className="mb-8 flex flex-col">
        <div className="mb-4 flex gap-1">
          <LocationIcon />
          <p className="text-xl/[24px] font-medium">Торговые комплексы:</p>
        </div>
        <ShopsSearch shops={ShopsMock} onItemSelect={handleItemSelect} />
        <div className="mt-3 flex flex-wrap gap-1">
          {selectedItems.map((item, index) => (
            <div
              className="item flex w-[157px] cursor-default gap-1 rounded-full bg-white/[0.16] px-3 py-1"
              key={`${item}_${index}`}
            >
              <div className="text-selected-item overflow-hidden text-ellipsis pt-[1px]">
                {item}
              </div>
              <DeleteButton id={item} />
            </div>
          ))}
        </div>
        <Button
          className="mt-6 h-10 border-white text-white hover:bg-white/[0.16] hover:text-white active:bg-color-back-primary-on-blue"
          variant="secondary"
        >
          Сбросить
        </Button>
      </div>
      <div className="product">
        <div className="mb-4 flex gap-1">
          <ProductIcon />
          <p className="text-xl/[24px] font-medium">Товары:</p>
        </div>
      </div>
      <ListMenu />
      <Button
        className="mt-6 h-10 border-white text-white hover:bg-white/[0.16] hover:text-white active:bg-color-back-primary-on-blue"
        variant="secondary"
      >
        Сбросить
      </Button>
    </div>
  )
}
