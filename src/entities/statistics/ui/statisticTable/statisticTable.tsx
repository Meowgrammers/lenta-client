import { setSelectId, setSelectItem } from '@/entities'
import {
  Table,
  TableHeaderCell,
  TableRow,
  TableCell,
  Text,
  TableHead,
  TableBody,
  useAppSelector,
  useAppDispatch,
  StatisticsMock,
} from '@/shared'

import { FC } from 'react'

type VirtualItem = {
  index: number
  offsetTop: number
}

type CategoryTableProps = {
  items: VirtualItem[]
  totalHeight: number
  doubleTable?: boolean
  chartTable?: boolean
  sortingMock: typeof StatisticsMock
}

export const StatisticTable: FC<CategoryTableProps> = ({
  items,
  totalHeight,
  doubleTable,
  sortingMock,
  chartTable,
}) => {
  const check = useAppSelector((state) => state.app.check)

  const id = useAppSelector((state) => state.statistics.selectId)

  const top = doubleTable ? 'top-[68px]' : 'top-[34px]'
  const height = doubleTable && 'h-[68px]'

  const dispatch = useAppDispatch()

  const handleSelect = (index: number) => {
    dispatch(
      setSelectId(`${sortingMock[index].store}${sortingMock[index].sku}`)
    )
    dispatch(setSelectItem(sortingMock[index]))
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
              {!chartTable &&
                sortingMock[0].forecast.map((fact_item, index) => {
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
              const { forecast } = item
              return (
                <TableRow
                  onClick={() => handleSelect(virtualItem.index)}
                  key={item.sku + Math.random()}
                  className={
                    id === `${item.store}${item.sku}`
                      ? `absolute ${top} cursor-pointer bg-[rgba(0,61,150,0.08)] pl-5`
                      : `absolute ${top} cursor-pointer pl-5`
                  }
                  style={{
                    transform: `translateY(${virtualItem.offsetTop}px)`,
                  }}
                >
                  <TableCell className="w-[100px]">
                    <Text>{item.store}</Text>
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
                  {!chartTable &&
                    forecast.map((fact_item, index) => (
                      <TableCell
                        className={`w-[80px]  ${
                          index % 2 === 1 && 'bg-[rgba(0,61,150,0.08)]'
                        }`}
                        key={index}
                      >
                        <Text>{fact_item.sales_units}</Text>
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
