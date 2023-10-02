import {
  CategoryMock,
  Table,
  TableHeaderCell,
  TableRow,
  TableCell,
  Text,
  TableHead,
  TableBody,
  useAppSelector,
  sortByField,
  useAppDispatch,
} from '@/shared'

import { FC } from 'react'
import { setSelectId } from '../..'

type VirtualItem = {
  index: number
  offsetTop: number
}

type CategoryTableProps = {
  items: VirtualItem[]
  totalHeight: number
}

export const CategoryTable: FC<CategoryTableProps> = ({
  items,
  totalHeight,
}) => {
  const check = useAppSelector((state) => state.app.check)
  const sort = useAppSelector((state) => state.categories.sort)
  const id = useAppSelector((state) => state.categories.selectId)

  const dispatch = useAppDispatch()
  const sortingMock = CategoryMock.sort(sortByField(sort))

  const handleSelect = (index: number) => {
    dispatch(setSelectId(sortingMock[index].id))
  }

  return (
    <Table style={{ height: totalHeight }}>
      <TableHead>
        <TableRow className="absolute bg-[#003d96] pl-5">
          <TableHeaderCell className="w-[100px]">ТК</TableHeaderCell>
          <TableHeaderCell className="w-[100px]">Группа</TableHeaderCell>
          <TableHeaderCell className="w-[100px]">Категория</TableHeaderCell>
          <TableHeaderCell className="w-[116px]">Подкатегория</TableHeaderCell>
          <TableHeaderCell className="w-[100px]">Товар</TableHeaderCell>
          <TableHeaderCell className="w-[48px]">Ед.</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((virtualItem) => {
          const item = sortingMock[virtualItem.index]!
          return (
            <TableRow
              onClick={() => handleSelect(virtualItem.index)}
              key={item.id}
              className={
                id === item.id
                  ? 'absolute top-[34px] cursor-pointer bg-[rgba(0,61,150,0.08)] pl-5'
                  : 'absolute top-[34px] cursor-pointer pl-5'
              }
              style={{ transform: `translateY(${virtualItem.offsetTop}px)` }}
            >
              <TableCell className="w-[100px]">
                <Text>{item.id}</Text>
              </TableCell>
              <TableCell className="w-[100px]">
                <Text>{item.group}</Text>
              </TableCell>
              <TableCell className="w-[100px]">
                <Text>{item.category}</Text>
              </TableCell>
              <TableCell className="w-[116px]">
                <Text>{item.subcategory}</Text>
              </TableCell>
              <TableCell className="w-[100px]">
                <Text>{item.sku}</Text>
              </TableCell>
              <TableCell className="w-[48px]">
                <Text>{check ? '-' : item.uom}</Text>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
