import { setExItem, setSelectId, setSelectStore } from '@/entities'
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
  StatisticExtendedMock,
} from '@/shared'

import { FC } from 'react'

type VirtualItem = {
  index: number
  offsetTop: number
}

type CategoryTableProps = {
  items: VirtualItem[]
  totalHeight: number
  sortingMock: typeof StatisticExtendedMock
}

export const StatisticExTable: FC<CategoryTableProps> = ({
  items,
  totalHeight,
  sortingMock,
}) => {
  const check = useAppSelector((state) => state.app.check)
  const week = useAppSelector((state) => state.forecast.week)

  const id = useAppSelector((state) => state.statistics.selectId)

  const dispatch = useAppDispatch()

  const handleSelect = (index: number) => {
    dispatch(
      setSelectId(`${sortingMock[index].store}${sortingMock[index].sku}`)
    )
    dispatch(setExItem(sortingMock[index]))
    dispatch(setSelectStore(sortingMock[index].store))
  }

  return (
    <>
      {sortingMock.length > 0 && (
        <Table style={{ height: totalHeight + 34 }}>
          <TableHead>
            <TableRow className={`absolute top-0 h-[68px] bg-[#002773] pl-5`}>
              <TableHeaderCell className="w-[100px]">ТК</TableHeaderCell>
              <TableHeaderCell className="w-[100px]">Группа</TableHeaderCell>
              <TableHeaderCell className="w-[100px]">Категория</TableHeaderCell>
              <TableHeaderCell className="w-[116px]">
                Подкатегория
              </TableHeaderCell>
              <TableHeaderCell className="w-[100px]">Товар</TableHeaderCell>
              <TableHeaderCell className="w-[48px]">Ед.</TableHeaderCell>
              {sortingMock[0].statistic.slice(-week).map((i, index) => {
                return (
                  <div key={index}>
                    <TableRow className="flex w-full items-center justify-center overflow-hidden border-b border-l border-solid border-b-[rgba(255,255,255,0.24)] border-l-[rgba(255,255,255,0.24)] bg-[#002773] text-center">
                      <TableHeaderCell>{i.week} неделя</TableHeaderCell>
                    </TableRow>
                    <TableRow className="overflow-hidden border-l border-solid  border-l-[rgba(255,255,255,0.24)] bg-[#002773]">
                      <TableHeaderCell className="w-[82px]">
                        Продажи
                      </TableHeaderCell>
                      <TableHeaderCell className="w-[82px]">
                        Прогноз
                      </TableHeaderCell>
                      <TableHeaderCell className="w-[82px]">
                        Разница
                      </TableHeaderCell>
                      <TableHeaderCell className="w-[82px]">
                        WAPE
                      </TableHeaderCell>
                    </TableRow>
                  </div>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((virtualItem) => {
              const item = StatisticExtendedMock[virtualItem.index]!
              return (
                <TableRow
                  onClick={() => handleSelect(virtualItem.index)}
                  key={item.sku + Math.random()}
                  className={
                    id === `${item.store}${item.sku}`
                      ? `absolute top-[68px] cursor-pointer bg-[rgba(0,61,150,0.08)] pl-5`
                      : `absolute top-[68px] cursor-pointer pl-5`
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
                  {item.statistic.slice(-week).map((el) => {
                    return (
                      <>
                        <TableCell className="w-[82px]">
                          <Text>{el.sales_units}</Text>
                        </TableCell>
                        <TableCell className="w-[82px]">
                          <Text>{el.target}</Text>
                        </TableCell>
                        <TableCell className="w-[82px]">
                          <Text>{el.difference}</Text>
                        </TableCell>
                        <TableCell className="w-[82px]">
                          <Text>{el.wape}</Text>
                        </TableCell>
                      </>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </>
  )
}
