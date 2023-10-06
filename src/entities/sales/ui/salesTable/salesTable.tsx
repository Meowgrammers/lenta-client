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
  sortingMock: typeof SalesMock
}

export const SalesTable: FC<SalesTableProps> = ({
  items,
  totalHeight,
  sortingMock,
}) => {
  const check = useAppSelector((state) => state.app.check)

  return (
    <>
      {sortingMock.length > 0 && (
        <Table style={{ height: totalHeight + 34 }}>
          <TableHead>
            <TableRow className="absolute overflow-hidden bg-[#002773]">
              {sortingMock[0].fact.map((fact_item, index) => {
                return (
                  <TableHeaderCell key={index} className="w-[80px]">
                    {fact_item.date
                      .split('-')
                      .reverse()
                      .join('.')
                      .replace('.20', '.')}
                  </TableHeaderCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((virtualItem) => {
              const item = sortingMock[virtualItem.index]!

              const { fact } = item
              return (
                <TableRow
                  key={virtualItem.index}
                  className="absolute top-[34px] border-l border-solid border-l-[rgba(77,77,77,0.24)]"
                  style={{
                    transform: `translateY(${virtualItem.offsetTop}px)`,
                  }}
                >
                  {fact.map((fact_item, index) => (
                    <TableCell
                      className={`w-[80px]  ${
                        index % 2 === 1 && 'bg-[rgba(0,61,150,0.08)]'
                      }`}
                      key={index}
                    >
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
      )}
    </>
  )
}
