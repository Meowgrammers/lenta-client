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
  Checkbox,
} from '@/shared'

import { FC } from 'react'

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
  const sortingMock = CategoryMock.sort(sortByField(sort))

  return (
    <Table style={{ height: totalHeight }}>
      <TableHead>
        <TableRow className="z-10 h-[44px] bg-[#efefef]">
          <TableHeaderCell className="w-[50px]">
            <Checkbox />
          </TableHeaderCell>
          <TableHeaderCell>ТК</TableHeaderCell>
          <TableHeaderCell>Группа</TableHeaderCell>
          <TableHeaderCell>Категория</TableHeaderCell>
          <TableHeaderCell>Подкатегория</TableHeaderCell>
          <TableHeaderCell className="w-[100px]">ID и название</TableHeaderCell>
          <TableHeaderCell className="w-[100px]">Единица</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((virtualItem) => {
          const item = sortingMock[virtualItem.index]!
          return (
            <TableRow
              key={item.id}
              className="absolute top-[44px] "
              style={{ transform: `translateY(${virtualItem.offsetTop}px)` }}
            >
              <TableCell className="w-[50px]">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Text>{item.id}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.group}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.category}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.subcategory}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.sku}</Text>
              </TableCell>
              <TableCell className="w-[100px]">
                <Text>{check ? '-' : item.uom}</Text>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
