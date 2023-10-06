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
  doubleTable?: boolean
  sortingMock: typeof CategoryMock
}

export const CategoryTable: FC<CategoryTableProps> = ({
  items,
  totalHeight,
  doubleTable,
  sortingMock,
}) => {
  const check = useAppSelector((state) => state.app.check)

  const id = useAppSelector((state) => state.categories.selectId)

  const top = doubleTable ? 'top-[68px]' : 'top-[34px]'
  const height = doubleTable && 'h-[68px]'

  const dispatch = useAppDispatch()

  const handleSelect = (index: number) => {
    dispatch(setSelectId(sortingMock[index].id))
  }

  return (
    <>
      {sortingMock.length > 0 && (
        <Table style={{ height: totalHeight + 34 }}>
          <TableHead>
            <TableRow className={`absolute ${height} top-0 bg-[#002773] pl-5`}>
              <TableHeaderCell className="w-[100px]">ТК</TableHeaderCell>
              <TableHeaderCell className="w-[100px]">Группа</TableHeaderCell>
              <TableHeaderCell className="w-[100px]">Категория</TableHeaderCell>
              <TableHeaderCell className="w-[116px]">
                Подкатегория
              </TableHeaderCell>
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
                      ? `absolute ${top} cursor-pointer bg-[rgba(0,61,150,0.08)] pl-5`
                      : `absolute ${top} cursor-pointer pl-5`
                  }
                  style={{
                    transform: `translateY(${virtualItem.offsetTop}px)`,
                  }}
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
                    <Text>{check ? 'руб' : item.uom}</Text>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </>
  )
}
