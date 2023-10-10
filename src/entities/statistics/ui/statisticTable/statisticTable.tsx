import { setSelectId, setSelectItem, setSelectStore } from '@/entities'
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
} from '@/shared'

import { FC } from 'react'
import { StatisticsResponse } from '../../api/types'

type VirtualItem = {
  index: number
  offsetTop: number
}

type CategoryTableProps = {
  items: VirtualItem[]
  totalHeight: number
  chartTable?: boolean
  sortingMock: StatisticsResponse[]
}

export const StatisticTable: FC<CategoryTableProps> = ({
  items,
  totalHeight,
  sortingMock,
  chartTable,
}) => {
  const check = useAppSelector((state) => state.app.check)

  const id = useAppSelector((state) => state.statistics.selectId)
  // //TODO: связь с бэком
  // const sku = useAppSelector((state) => state.categories.skus)
  // const group = useAppSelector((state) => state.categories.group)
  // const categories = useAppSelector((state) => state.categories.categories)
  // const subcategories = useAppSelector(
  //   (state) => state.categories.subcategories
  // )

  // const { data } = useFetchStatisticsQuery({
  //   sku: sku.length > 0 ? sku.join(',') : undefined,
  //   group: group.length > 0 ? group.join(',') : undefined,
  //   category: categories.length > 0 ? categories.join(',') : undefined,
  //   subcategory: subcategories.length > 0 ? subcategories.join(',') : undefined,
  //   page: 1,
  //   limit: 20,
  // })

  const dispatch = useAppDispatch()

  const handleSelect = (index: number) => {
    dispatch(
      setSelectId(`${sortingMock[index].store}${sortingMock[index].sku}`)
    )
    dispatch(setSelectItem(sortingMock[index]))
    dispatch(setSelectStore(sortingMock[index].store))
  }

  return (
    <>
      {sortingMock.length > 0 && (
        <Table style={{ height: totalHeight + 34 }}>
          <TableHead>
            <TableRow className={`absolute top-0 h-[34px] bg-[#002773] pl-5`}>
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
                      ? `absolute top-[34px] cursor-pointer bg-[rgba(0,61,150,0.08)] pl-5`
                      : `absolute top-[34px] cursor-pointer pl-5`
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
                    <Text>
                      {check ? 'руб' : item.uom === '17' ? 'кг' : 'шт'}
                    </Text>
                  </TableCell>
                  {!chartTable &&
                    forecast.map((fact_item, index) => (
                      <TableCell
                        className={`w-[80px]  ${
                          index % 2 === 1 && 'bg-[rgba(0,61,150,0.08)]'
                        }`}
                        key={index}
                      >
                        <Text>
                          {check
                            ? fact_item.sales_in_rub
                            : fact_item.sales_units}
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
