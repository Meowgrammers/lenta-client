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

export const CategoryTable: FC = () => {
  return (
    <Table>
      <TableHead>
        <TableRow className="h-[60px] bg-[#efefef]">
          <TableHeaderCell>[]</TableHeaderCell>
          <TableHeaderCell>ТК</TableHeaderCell>
          <TableHeaderCell>Группа</TableHeaderCell>
          <TableHeaderCell>Категория</TableHeaderCell>
          <TableHeaderCell>Подкатегория</TableHeaderCell>
          <TableHeaderCell>ID и название</TableHeaderCell>
          <TableHeaderCell>Единица</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {CategoryMock.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>[]</TableCell>
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
                <TableCell>
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
