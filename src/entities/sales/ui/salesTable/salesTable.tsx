import {
  Table,
  TableHeaderCell,
  TableRow,
  TableCell,
  Text,
  TableHead,
  TableBody,
  SalesMock,
  useAppSelector,
} from '@/shared'

import { FC } from 'react'

type VirtualItem = {
  index: number
  offsetTop: number
}

type SalesTableProps = {
  items: VirtualItem[]
  totalHeight: number
}

export const SalesTable: FC<SalesTableProps> = ({ items, totalHeight }) => {
  const check = useAppSelector((state) => state.app.check)

  return (
    <Table style={{ height: totalHeight }}>
      <TableHead>
        <TableRow className="absolute  overflow-hidden bg-[#003d96]">
          <TableHeaderCell className="w-[80px]">19.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">21.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">22.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">23.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">24.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">25.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">26.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">27.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">28.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">29.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">30.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">31.07.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">1.08.23</TableHeaderCell>
          <TableHeaderCell className="w-[80px]">2.08.23</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((virtualItem) => {
          const item = SalesMock[virtualItem.index]!
          const { fact } = item
          return (
            <TableRow
              key={virtualItem.index}
              className="absolute top-[34px] border-l border-solid border-l-[rgba(77,77,77,0.24)]"
              style={{ transform: `translateY(${virtualItem.offsetTop}px)` }}
            >
              {fact.map((fact_item, index) => (
                <TableCell className="w-[80px]" key={index}>
                  <Text>
                    {check ? fact_item.sales_rub : fact_item.sales_units}
                  </Text>
                </TableCell>
              ))}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
