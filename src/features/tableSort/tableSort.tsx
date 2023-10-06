import { setSort } from '@/entities'
import { useAppDispatch, useAppSelector } from '@/shared'
import { Select, SelectItem } from '@tremor/react'

const TableSort = () => {
  const sort = useAppSelector((state) => state.categories.sort)
  const dispatch = useAppDispatch()

  function changeSort(value: string) {
    dispatch(setSort(value))
  }

  return (
    <Select
      onValueChange={(value) => changeSort(value)}
      defaultValue={sort}
      className="h-10 w-[335px]"
    >
      <SelectItem value="category" className="cursor-pointer hover:bg-gray-100">
        Сортировать по категории
      </SelectItem>
      <SelectItem value="group" className="cursor-pointer hover:bg-gray-100">
        Сортировать по группе
      </SelectItem>
      <SelectItem
        value="subcategory"
        className="cursor-pointer hover:bg-gray-100"
      >
        Сортировать по подкатегории
      </SelectItem>
      <SelectItem value="sku" className="cursor-pointer hover:bg-gray-100">
        Сортировать по названию (ID)
      </SelectItem>
    </Select>
  )
}

export { TableSort }
