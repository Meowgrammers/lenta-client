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

type QualityTableProps = {
  items: VirtualItem[]
  totalHeight: number
}

export const QualityTable: FC<QualityTableProps> = ({ items, totalHeight }) => {
  const week = useAppSelector((state) => state.forecast.week)

  return (
    <div className="flex">
      {Array(week)
        .fill(0)
        .map((index) => {
          return (
            <Table
              style={{ height: totalHeight }}
              key={index}
              className="min-w-[328px]"
            >
              <TableHead className="absolute top-0 min-h-[68px] ">
                <TableRow className="flex w-full items-center justify-center overflow-hidden border-b border-l border-solid border-b-[rgba(255,255,255,0.24)] border-l-[rgba(255,255,255,0.24)] bg-[#003d96] text-center">
                  <TableHeaderCell>1{index} неделя</TableHeaderCell>
                </TableRow>
                <TableRow className="overflow-hidden border-l border-solid  border-l-[rgba(255,255,255,0.24)] bg-[#003d96]">
                  <TableHeaderCell className="w-[82px]">
                    Продажи
                  </TableHeaderCell>
                  <TableHeaderCell className="w-[82px]">
                    Прогноз
                  </TableHeaderCell>
                  <TableHeaderCell className="w-[82px]">
                    Разница
                  </TableHeaderCell>
                  <TableHeaderCell className="w-[82px]">WAPE</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((virtualItem) => {
                  const item = SalesMock[virtualItem.index]!
                  const { fact } = item
                  return (
                    <TableRow
                      key={virtualItem.index}
                      className={`absolute top-[68px] border-l border-solid border-l-[rgba(77,77,77,0.24)] ${
                        index % 2 === 0 && 'bg-[rgba(0,61,150,0.08)]'
                      }`}
                      style={{
                        transform: `translateY(${virtualItem.offsetTop}px)`,
                      }}
                    >
                      <TableCell className="w-[82px]">
                        <Text>
                          {fact.reduce((curr, acc) => {
                            return curr + acc.sales_units
                          }, 0)}
                        </Text>
                      </TableCell>
                      <TableCell className="w-[82px]">
                        <Text>
                          {fact.reduce((curr, acc) => {
                            return curr + acc.sales_units
                          }, 0)}
                        </Text>
                      </TableCell>
                      <TableCell className="w-[82px]">
                        <Text>
                          {fact.reduce((curr, acc) => {
                            return curr + acc.sales_units
                          }, 0)}
                        </Text>
                      </TableCell>
                      <TableCell className="w-[82px]">
                        <Text>
                          {fact.reduce((curr, acc) => {
                            return curr + acc.sales_units
                          }, 0)}
                        </Text>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )
        })}
    </div>
  )
}
