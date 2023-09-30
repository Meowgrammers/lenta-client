import {
  CategoryMock,
  Table,
  TableHeaderCell,
  TableRow,
  TableCell,
  Text,
  TableHead,
  TableBody,
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
  return (
    <Table style={{ height: totalHeight }}>
      <TableHead>
        <TableRow className="w-[850px] fixed z-10 h-11 bg-[#efefef]">
          <TableHeaderCell className="w-[50px]">[]</TableHeaderCell>
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
          const item = CategoryMock[virtualItem.index]!
          return (
            <TableRow
              key={item.id}
              className="absolute top-[44px] w-[850px]"
              style={{ transform: `translateY(${virtualItem.offsetTop}px)` }}
            >
              <TableCell className="w-[50px]">
                <Text>[]</Text>
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
              {item.uom && (
                <TableCell className="w-[100px]">
                  <Text>{item.uom}</Text>
                </TableCell>
              )}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
